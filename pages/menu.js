import { handleError } from "lib/helper";
import {useEffect, useState} from "react";
import { toast } from "react-toastify"
import axios from "axios"
import Product from "@/components/homePage/product/Product";
import {useRouter} from "next/router";

const MenuPage = ({ products, categories, error }) => {
    const [search, setSearch] = useState('');
    const [productList, setProductList] = useState(products);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        error && toast.error(error)
    }, [error])

    const handleFilter = async (value) => {
        let query = { ...router.query, ...value }

        if (!value.hasOwnProperty('page')) {
            delete query.page;
        }

        try {
            setLoading(true)
            const res = await axios.get(`/menu?${new URLSearchParams(query).toString()}`)
            setProductList(res.data.data);
            await router.push(`/menu?${new URLSearchParams(query).toString()}`, undefined, {shallow: true})
        } catch (err) {
            toast.error(handleError(err))
        } finally {
            setLoading(false)
        }
    }

    return (
        <section className="food_section layout_padding">
            <div className="container">
                <div className="row">

                    {/*Right Section*/}
                    <div className="col-sm-12 col-lg-3">

                        {/*Search Box*/}
                        <div>
                            <label className="form-label">جستجو</label>
                            <div className="input-group mb-3">
                                <input type="text" onChange={(e) => setSearch(e.target.value)} className="form-control" placeholder="نام محصول ..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <button onClick={() => search !== '' && handleFilter({ search })} className="input-group-text" id="basic-addon2"><i className="bi bi-search"></i></button>
                            </div>
                        </div>
                        {/*Search Box*/}

                        <hr />

                        {/*Category*/}
                        <div className="filter-list">
                            <div className="form-label">دسته بندی</div>
                            <ul>
                                {categories && categories.map((category, index) => (
                                    <li onClick={() => handleFilter({ category: category.id })} key={index} className={router.query.hasOwnProperty('category') && router.query.category === category.id ? 'my-2 cursor-pointer filter-list-active' : 'my-2 cursor-pointer'}>{category.name}</li>
                                ))}
                            </ul>
                        </div>
                        {/*Category*/}

                        <hr />

                        {/*Sort*/}
                        <div>
                            <label className="form-label">مرتب سازی</label>
                            <div className="form-check my-2">
                                <input onChange={() => handleFilter({ sortBy: 'max' })} checked={router.query.hasOwnProperty('sortBy') && router.query.sortBy === 'max'} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label cursor-pointer" htmlFor="flexRadioDefault1">
                                    بیشترین قیمت
                                </label>
                            </div>
                            <div className="form-check my-2">
                                <input onChange={() => handleFilter({ sortBy: 'min' })} checked={router.query.hasOwnProperty('sortBy') && router.query.sortBy === 'min'} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                />
                                <label className="form-check-label cursor-pointer" htmlFor="flexRadioDefault2">
                                    کمترین قیمت
                                </label>
                            </div>
                            <div className="form-check my-2">
                                <input onChange={() => handleFilter({ sortBy: 'bestseller' })} checked={router.query.hasOwnProperty('sortBy') && router.query.sortBy === 'bestseller'} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"
                                />
                                <label className="form-check-label cursor-pointer" htmlFor="flexRadioDefault3">
                                    پرفروش ترین
                                </label>
                            </div>
                            <div className="form-check my-2">
                                <input onChange={() => handleFilter({ sortBy: 'sale' })} checked={router.query.hasOwnProperty('sortBy') && router.query.sortBy === 'sale'} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"
                                />
                                <label className="form-check-label cursor-pointer" htmlFor="flexRadioDefault4">
                                    با تخفیف
                                </label>
                            </div>
                        </div>
                        {/*Sort*/}
                    </div>
                    {/*Right Section*/}

                    {/*Left Section*/}
                    {productList && productList.products.length !== 0 ? (
                        <>
                            {loading ?
                                (<div className="col-sm-12 col-lg-9">
                                    <div className="d-flex justify-content-center align-items-center h-100">
                                        <div className="spinner-border"></div>
                                    </div>
                                </div>)
                                :
                                (<div className="col-sm-12 col-lg-9">
                                    <div className="row gx-3">
                                        {productList && productList.products.map((product, index) => (
                                            <div key={index} className="col-sm-6 col-lg-4">
                                                <Product product={product} />
                                            </div>
                                        ))}
                                    </div>
                                    <nav className="d-flex justify-content-center mt-5">
                                        <ul className="pagination">
                                            {productList && productList.meta.links.slice(1, -1).map((link, index) => (
                                                <li key={index} className={link.active ? 'page-item active' : 'page-item'}>
                                                    <button onClick={() => handleFilter({ page: link.label })} className="page-link">{link.label}</button>
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                </div>)}
                        </>
                    ) : (
                        <div className="col-sm-12 col-lg-9">
                            <div className="d-flex justify-content-center align-items-center h-100">
                                <h5>محصولی یافت نشده!</h5>
                            </div>
                        </div>
                    )}
                    {/*Left Section*/}

                </div>
            </div>
        </section>
    )
}

export default MenuPage;



export async function getServerSideProps({ resolvedUrl }) {
    try {
        const res = await axios.get(`${resolvedUrl}`)
        const resCate = await axios.get("/categories")
        // console.log(res.data.data);
        return {
            props: {
                products: res.data.data,
                categories: resCate.data.data
            }
        }
    } catch (err) {
        return {
            props: {
                error: handleError(err)
            }
        }
    }
}
