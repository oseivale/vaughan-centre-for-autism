import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer/Footer";
import { MainNav } from '@/components/MainNav/MainNav'
import { footerData, publications, mainNavLinks } from "../components/data";
import { arimo, nunito_sans, grupo, staatliches } from '../fonts/fonts'
import { Layout } from '@/components/Layout/Layout'
import { PageWrapper } from "@/components/PageHeader/PageWrapper";
import Link from "next/link";
import { Download } from "@/icons/download";

const inter = Inter({ subsets: ["latin"] });

export default function Forms() {
  return (
    <Layout>
      <PageWrapper pageHeaderImg={'/unseen-studio-s9CC2SKySJM-unsplash.jpg'} pageHeader={'Forms'}>
        <h1 className={'formsPageTitleHeader'}>Vaughan Centre for Autism Form Downloads</h1>
        <section>
          <div>
            <h3>Registration Form</h3>
            <Link className={'btn-link'} href='#'>Download the registration form here <Download /> </Link>
          </div>
          <div>
            <h3>Assessment Form</h3>
            <Link className={'btn-link'} href='#'>Download the assessment form here <Download /> </Link>
          </div>
        </section>
      </PageWrapper>
    </Layout>
  );
}
