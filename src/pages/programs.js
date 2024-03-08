import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer/Footer";
import { MainNav } from '@/components/MainNav/MainNav'
import { footerData, publications, mainNavLinks } from "./data";
import { arimo, nunito_sans, shantell_sans, grupo, staatliches } from '../fonts/fonts'
import { Layout } from '@/components/Layout/Layout'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      {'Programs Content here'}
    </Layout>
  );
}
