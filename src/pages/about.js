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



export default function About() {
  return (
    <Layout>
      <div>
        <PageWrapper pageHeaderImg={'/unseen-studio-s9CC2SKySJM-unsplash.jpg'} pageHeader={'About Us'}>
          <section>
            <h1>Who we are</h1>
            <p>Albert Wireko Osei, PhD is the Autism Treatment Specialist and the Clinical Director at
              the Vaughan Centre for Autism in the city of Vaughan, York Region, and the town of
              Innisfil both in Ontario, Canada.</p>
            <p>Vaughan Centre for Autism was first opened in the city of Vaughan in May of 2009. It is
              the most preferred treatment Centre for many children on the autism spectrum. The
              Centre has also trained many Interns from various community colleges.</p>

          </section>
          <section>
            <h1>Our Founder</h1>
            <div className={'grid-col-1 '}>
              <Image className={'about-img'} src={'/L3DOM-44V5P05_AmankwahD_08.jpg'} alt='' width={200} height={250} />
              <caption>Dr. Albert Wireko Osei, PhD, Founder, Vaughan Centre for Autism</caption>
              <p>Dr. Osei has successfully treated many children with autism and other
                neurodevelopmental disorders who had experienced delays in their social, cognitive and
                communication development. He also treats children living with Elimination, Feeding
                and Eating Disorders.</p>
              <p>Dr. Osei has done extensive research in the treatment of autism and psychosocial
                rehabilitation for young adults with autism. This includes working hand-in-hand with
                other professional service providers and developing the required treatment programs to
                alleviate the behavioral disturbances and concerns associated with the disorder.</p>
              <p>He is the author of some of the most educative and clinically sought- after books on autism:</p>
              <p>“Nature Intervention: A treatment for Autism Spectrum Disorders (2022).
                Boston: Dorrance Publishers”</p>
              <p>“Beginning with Brandon’s Interest” (2010). Rotterdam:
                Sense Publishers.</p>
              <p>Dr. Osei is a member of the Ontario Psychological Association.</p>
            </div>


          </section>
        </PageWrapper>
      </div>
    </Layout>
  );
}
