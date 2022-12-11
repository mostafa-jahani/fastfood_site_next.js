import Features from "@/components/Features";
import axios from "axios";
import {handleError} from "../lib/helper";
import {useEffect} from "react";
import {toast} from "react-toastify";
import ProductsTab from "@/components/product/ProductsTab";

const Home = ({ productsTab, error }) => {

    useEffect(() => {
        error && toast.error(error)
    }, [error])

    return (
        <>
            <Features />
            {productsTab && <ProductsTab tabs={productsTab} />}
        </>
    )
}

export default Home;




export async function getServerSideProps() {
    try {
        const res = await axios.get("/products/products-tabs")
        return {
            props: {
                productsTab: res.data.data
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
