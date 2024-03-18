import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer/Footer";
import { MainNav } from '@/components/MainNav/MainNav'
// import { footerData, publications, mainNavLinks } from "../components/data";
// import { arimo, nunito_sans, grupo, staatliches } from '../fonts/fonts'
import { Layout } from '@/components/Layout/Layout'
import { PageWrapper } from "@/components/PageHeader/PageWrapper";
import { useRouter } from "next/router";
import { services } from "@/components/data";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });


export default function ProgramDetails({ params }) {
    const [pageData, setPageData] = useState([])

    const router = useRouter()
    console.log('router', router)

    const { query } = router
    console.log('query', query)

    useEffect(() => {
        const serviceData = services.filter(service => {
            return service.path.split('/')[2] === query['program-name']
        })
        setPageData(serviceData)
    }, [])


    return (
        <Layout>
            <PageWrapper pageHeader={pageData[0]?.name} pageHeaderImg={pageData[0]?.bgImage}>
                <h1>What do we do?</h1>
                <p>{pageData[0]?.description}</p>
                <div className={'questionBox'}>
                    <h1>Questions?</h1>
                    <p>Feel free to reach out for more information, or to schedule a free consultation!</p>
                    <Link className={'btnSecondary'} href='/contact'>Contact Us</Link>
                </div>

            </PageWrapper>
        </Layout>
    );
}
