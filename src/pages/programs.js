import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer/Footer";
import { MainNav } from '@/components/MainNav/MainNav'
import { footerData, publications, mainNavLinks, services } from "../components/data";
import { arimo, nunito_sans, grupo, staatliches } from '../fonts/fonts'
import { Layout } from '@/components/Layout/Layout'
import { PageWrapper } from "@/components/PageHeader/PageWrapper";
import { LinkCard } from "@/components/Cards/LinkCard/LinkCard";

const inter = Inter({ subsets: ["latin"] });

export default function Programs() {
  return (
    <Layout>
      <PageWrapper pageHeaderImg={'/sandy-millar-nuS2GDpCDoI-unsplash.jpg'} pageHeader={'Programs'}>
        {/* <p>Our clinical and special education services are supported by over a decade of our continuing
          academic research in ABA and Special education services for children with autism and other
          neurodevelopmental disorders, which has received excellent results from our clients.</p> */}
        <section className={'grid-section'}>

          <div className={'grid-card-3-col'}>
            {services.map(service => {
              return (
                <LinkCard key={service.name} cardImg={service.bgImage} cardHeader={service.name} path={service.path} />
              )
            })}
          </div>
        </section>
      </PageWrapper>
    </Layout>
  );
}
