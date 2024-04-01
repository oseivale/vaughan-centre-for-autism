import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer/Footer";
import { MainNav } from "@/components/MainNav/MainNav";
import { footerData, publications, mainNavLinks } from "../data";
import { arimo, nunito_sans, grupo, staatliches } from "../../fonts/fonts";

export function Layout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <title>{`Vaughan Centre for Autism | ${pageTitle}`}</title>
        <meta
          name="description"
          content="VAUGHAN CENTRE FOR AUTISM is a leader in the development of effective clinical treatment interventions for children with autism and other neurodevelopmental disorders. We provide evidence-based services across the lifespan to help the individual to achieve a healthy and a productive life."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Final.gif" />
      </Head>
      <MainNav navLinks={mainNavLinks.navLinks} />
      <main>{children}</main>
      <Footer
        footerLinks={footerData.footerLinks}
        publications={publications.publicationLinks}
      />
    </>
  );
}
