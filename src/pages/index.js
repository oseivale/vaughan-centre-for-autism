import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer/Footer";
import { MainNav } from '@/components/MainNav/MainNav'
import { PrimaryCard } from '@/components/Cards/PrimaryCard/PrimaryCard'
import { footerData, publications, mainNavLinks, listData } from "../components/data";
import { arimo, nunito_sans, shantell_sans, grupo, staatliches } from '../fonts/fonts'
import { Layout } from '@/components/Layout/Layout';
import { HeroBanner } from '@/components/HeroBanner/HeroBanner';
import { Speech } from '../icons/speech'
import { Gear } from "@/icons/gear";
import { Book } from "@/icons/book";
import { Lightbulb } from "@/icons/lightbulb";
import { Education } from "@/icons/education";
import { List } from "@/components/List/List";
import { SecondaryCard } from "@/components/Cards/Secondary/SecondaryCard";
import { PageRow } from "@/components/PageRow/PageRow";
import { columns, headerColumn } from "../components/data";
import heroImg from '/public/aaron-burden-1zR3WNSTnvY-unsplash.jpg'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <HeroBanner bgImg={'/public/aaron-burden-1zR3WNSTnvY-unsplash.jpg'} />
      <PageRow columns={headerColumn} />
      <section className={'grid-2-col'}>

        <SecondaryCard cardHeader={'Why Vaughan Center for Autism?'} cardBody={'Etiam porttitor risus massa nec condiment gravida nibhvelit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit.'} />
        <List listData={listData} listHeader={'All Programs Include:'} />
      </section>

      <section className={'grid-center-3-col'}>
        <PrimaryCard icon={<Speech />} cardDescription={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis'} cardHeader={'Oral Communication'} />

        <PrimaryCard icon={<Gear />} cardDescription={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis'} cardHeader={'Functional Skills'} />

        <PrimaryCard icon={<Lightbulb />} cardDescription={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis'} cardHeader={'Intellectual Disability'} />

        <PrimaryCard icon={<Book />} cardDescription={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis'} cardHeader={'English as a Second Language'} />

        <PrimaryCard icon={<Education />} cardDescription={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis'} cardHeader={'Behaviour Modification'} />
      </section>
      <PageRow id={'questions'} columns={columns} />
    </Layout>
  );
}
