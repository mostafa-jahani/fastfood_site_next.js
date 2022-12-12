import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";


const Header = () => {
    const router = useRouter();

    return (
        <div className={router.pathname === '/' ? '' : 'sub_page'}>
            <div className="hero_area">
                <div className="bg-box">
                    <Image src={'/images/hero-bg.jpg'} fill alt="hero-image" />
                </div>

                <header className="header_section">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg custom_nav-container">
                            <Link href="/" className="navbar-brand">
                                    <span>فست فود</span>
                            </Link>

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mx-auto">
                                    <li className={router.pathname === '/' ? 'nav-item active' : 'nav-item'}>
                                        <Link href="/" className="nav-link">صفحه اصلی</Link>
                                    </li>
                                    <li className={router.pathname === '/menu' ? 'nav-item active' : 'nav-item'}>
                                        <Link href="/menu" className="nav-link">منو</Link>
                                    </li>
                                    <li className={router.pathname === '/about' ? 'nav-item active' : 'nav-item'}>
                                        <Link href="/about" className="nav-link">درباره ما</Link>
                                    </li>
                                    <li className={router.pathname === '/contact' ? 'nav-item active' : 'nav-item'}>
                                        <Link href="/contact" className="nav-link">تماس با ما</Link>
                                    </li>
                                </ul>
                                <div className="user_option">
                                    <a className="cart_link position-relative" href="cart.html">
                                        <i className="bi bi-cart-fill text-white fs-5"></i>
                                        <span className="position-absolute top-0 translate-middle badge rounded-pill">
                                            3
                                        </span>
                                    </a>
                                    <a href="login.html" className="btn-auth">
                                        ورود
                                    </a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>

                {router.pathname === '/' &&
                    (<section className="slider_section">
                        <div id="customCarousel1" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-7 col-lg-6">
                                                <div className="detail-box">
                                                    <h2 className="mb-3 fw-bold">
                                                        لورم ایپسوم متن ساختگی
                                                    </h2>
                                                    <p>
                                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                                                        از
                                                        طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                                        سطرآنچنان که
                                                        لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                                                        بهبود
                                                        ابزارهای کاربردی می باشد.
                                                    </p>
                                                    <div className="btn-box">
                                                        <a href="" className="btn1">
                                                            سفارش
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-7 col-lg-6">
                                                <div className="detail-box">
                                                    <h2 className="mb-3 fw-bold">
                                                        لورم ایپسوم متن ساختگی
                                                    </h2>
                                                    <p>
                                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                                                        از
                                                        طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                                        سطرآنچنان که
                                                        لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                                                        بهبود
                                                        ابزارهای کاربردی می باشد.
                                                    </p>
                                                    <div className="btn-box">
                                                        <a href="" className="btn1">
                                                            سفارش
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-7 col-lg-6">
                                                <div className="detail-box">
                                                    <h2 className="mb-3 fw-bold">
                                                        لورم ایپسوم متن ساختگی
                                                    </h2>
                                                    <p>
                                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                                                        از
                                                        طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                                        سطرآنچنان که
                                                        لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                                                        بهبود
                                                        ابزارهای کاربردی می باشد.
                                                    </p>
                                                    <div className="btn-box">
                                                        <a href="" className="btn1">
                                                            سفارش
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <ol className="carousel-indicators">
                                    <li data-bs-target="#customCarousel1" data-bs-slide-to="0" className="active"></li>
                                    <li data-bs-target="#customCarousel1" data-bs-slide-to="1"></li>
                                    <li data-bs-target="#customCarousel1" data-bs-slide-to="2"></li>
                                </ol>
                            </div>
                        </div>

                    </section>)
                }

            </div>
        </div>
    )
}

export default Header;