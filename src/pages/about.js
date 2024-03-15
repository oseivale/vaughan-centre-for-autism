import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer/Footer";
import { MainNav } from '@/components/MainNav/MainNav'
import { footerData, publications, mainNavLinks } from "../components/data";
import { arimo, nunito_sans, grupo, staatliches } from '../fonts/fonts'
import { Layout } from '@/components/Layout/Layout'
import { PageWrapper } from "@/components/PageHeader/PageWrapper";
import placeholder from '/public/placeholder-img.webp'
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <div>
        <PageWrapper>
          <section>
            <h1>Who we are</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </section>
          <section>
            <h1>A Message from our Founder:</h1>
            <div className={'grid-2-4-col grid-col-1'}>
              <Image src={placeholder} alt='' width={200} height={150} />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>


          </section>
        </PageWrapper>
      </div>
    </Layout>
  );
}
