import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer/Footer";
import { MainNav } from '@/components/MainNav/MainNav'
import { PrimaryCard } from '@/components/Cards/PrimaryCard/PrimaryCard'
import { footerData, publications, mainNavLinks, listData } from "../components/data";
import { arimo, nunito_sans, grupo, staatliches } from '../fonts/fonts'
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
import { columns, headerColumn, headerColumn2 } from "../components/data";
import heroImg from '/public/aaron-burden-1zR3WNSTnvY-unsplash.jpg'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <HeroBanner bgImg={'/public/aaron-burden-1zR3WNSTnvY-unsplash.jpg'} ctaPath={'/programs'} />
      <PageRow columns={headerColumn} />
      <section className={'grid-2-col'}>

        <SecondaryCard cardHeader={'Why Choose Vaughan Center for Autism?'} cardBody={'We provide a comprehensive treatment program for our clients because ASD comes with multiple challenges that need to treated. For example, a nonverbal client is likely to demonstrate behavior or academic challenges because of communication deficits. Consequently, it is important that the client receives treatment for the behaviors that are likely to trigger other negative behaviors.'} />
        <List listData={listData} listHeader={'All Programs Include:'} />
      </section>
      <PageRow columns={headerColumn2} pattern={true} />
      <section className={'grid-center-3-col'}>
        <PrimaryCard icon={<Gear />} cardDescription={'We employ special educational strategies that generate a fast, fluid and sustainable development of social skills with no stress to the child.  We have strategies to help individuals on the autism spectrum to develop play skills and friendships and integrate successfully into the social environment.'} cardHeader={'Social Skills'} path={'/programs/social-skills'} />

        <PrimaryCard icon={<Book />} cardDescription={'We treat clinically diagnosed impairments such as toileting incontinence, writing challenges, and other psychosocial stressors.'} cardHeader={'Occupational Challenges'} path={'/programs/occupational-challenges'} />
        <PrimaryCard icon={<Lightbulb />} cardDescription={'We treat clinically diagnosed academic or educational problems such as learning disorders (low-level literacy), underachievement and task avoidance. We work with teachers and parents to help students to meet their individual education plan (IEP) targets.'} cardHeader={'Academic or Educational Challenges'} path={'/programs/academic-challenges'} />
        <PrimaryCard icon={<Speech />} cardDescription={'We have an effective speech and language development program with a proven record. Nonverbal children in our program have developed speech and language skills in a record time. '} cardHeader={'Speech, Language and Communication Development '} path={'/programs/speech-language-and-communication-development'} />
        <PrimaryCard icon={<Education />} cardDescription={'Our behavior modification program aims at giving the client the opportunity for learning and acquiring new skills. Our treatment program provide a creative solution for treating maladaptive behaviors. We combine therapy and education in our approach to eliminate problem behaviors. <br> We have an effective autism treatment program intended to enable the client to learn and acquire new positive behaviors in a collaborative problem - solving environment. '} cardHeader={'Behaviour Modification'} path={'/programs/behaviour-modification'} />
      </section>
      <PageRow id={'questions'} columns={columns} />
    </Layout>
  );
}
