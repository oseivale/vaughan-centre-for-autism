import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer/Footer";
import { MainNav } from '@/components/MainNav/MainNav'
import { footerData, publications, mainNavLinks } from "../components/data";
import { arimo, nunito_sans, grupo, staatliches } from '../fonts/fonts'
import { Layout } from '@/components/Layout/Layout'
import { ContactForm } from "@/components/Form/Form";

const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
  return (
    <Layout pageTitle={'Contact Us'}>
      <section className={'grid-col-1'}>
        <div>
          <ContactForm />
        </div>
      </section>
    </Layout>
  );
}
