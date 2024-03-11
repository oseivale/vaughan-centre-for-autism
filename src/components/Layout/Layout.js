import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer/Footer";
import { MainNav } from '@/components/MainNav/MainNav'
import { footerData, publications, mainNavLinks } from "../data";
import { arimo, nunito_sans, shantell_sans, grupo, staatliches } from '../../fonts/fonts'

export function Layout({
    children
}) {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/Final.gif" />
            </Head>
            <MainNav navLinks={mainNavLinks.navLinks} />
            <main>{children}</main>
            <Footer footerLinks={footerData.footerLinks} publications={publications.publicationLinks} />
        </>
    )
}