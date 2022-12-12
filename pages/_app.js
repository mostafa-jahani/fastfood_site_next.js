import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'react-toastify/dist/ReactToastify.css'
import 'react-tabs/style/react-tabs.css';
import '@/styles/globals.css'
import {useEffect} from "react";
import Header from "@/components/layout/Header";
import {ToastContainer} from "react-toastify";
import axios from "axios";
import Footer from "@/components/layout/Footer";


axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_API_URL

function MyApp({Component, pageProps}) {

    useEffect(() => {
        import ('bootstrap/dist/js/bootstrap.bundle');
    }, [])

    return (
        <>
            <Header/>
            <Component {...pageProps} />
            <Footer/>
            <ToastContainer />
        </>
    )
}

export default MyApp
