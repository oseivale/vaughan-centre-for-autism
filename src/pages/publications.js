import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Layout } from '@/components/Layout/Layout'
import { PageWrapper } from "@/components/PageHeader/PageWrapper";
import placeholder from '/public/placeholder-img.webp'
const inter = Inter({ subsets: ["latin"] });



export default function Publications() {
    return (
        <Layout pageTitle={'Publications'}>
            <div>
                <PageWrapper pageHeaderImg={'/stephen-phillips-hostreviews-co-uk-Gs-tdnDyYKE-unsplash.jpg'} pageHeader={'Publications'}>
                    <section>
                        <h1>About the Books</h1>
                        <h3>
                            NATURE INTERVENTION; A TREATMENT FOR AUTISM SPECTRUM DISORDER
                        </h3>
                        <h5>
                            Osei, A. (2022). Nature intervention: A treatment for Autism Spectrum Disorder. Philadelphia:
                            Dorrance
                        </h5>
                        <p>
                            In Nature Intervention, Albert Wireko Osei, PhD provides an effective, sustainable,
                            comprehensive and easy-to-implement special education treatment for individuals living with
                            Autism Spectrum Disorder. With special attention to recent advances in early identification,
                            diagnosis and the treatment of the disorder, this longitudinal study provides expert guidance,
                            experiential narratives and problem-solving strategies for families, teachers, clinicians, students,
                            researchers and individuals living with autism.
                        </p>
                        <p>
                            The book also provides a narrative account of fathering a child with autism and the experience
                            provides readers with everything they want to know about the diagnosis, treatment, coping and
                            healing strategies for Autism Spectrum Disorder. Practical knowledge and professional
                            experiences supported with case studies are shared with readers throughout the book.
                        </p>
                        <p>
                            Readers will enjoy reading and learning about nature-based treatment intervention activities that
                            are resourceful, practical, available and accessible to every individual on the Autism Spectrum,
                            irrespective of their socio-economic and geographical location.Readers will enjoy reading and learning about nature-based treatment intervention activities that
                            are resourceful, practical, available and accessible to every individual on the Autism Spectrum,
                            irrespective of their socio-economic and geographical location.
                        </p>

                    </section>

                    <h3>BEGINNING WITH BRANDON’S INTEREST</h3>
                    <h5>
                        Osei, A. Beginning with Brandon’s interest. (2010). Rotterdam: Sense Publishers.
                    </h5>
                    <p>
                        The book provides a critical account and analysis of one child with autism spectrum disorder
                        who throughout his life has demonstrated that interest-based education offers children with
                        autism problem- solving skills to deal with the myriad of problems that prevent educators as well
                        as learners from developing an effective communication.
                    </p>
                    <p>
                        Traditionally, behaviors of children with autism have been studied by researchers from diverse
                        disciplines. On the other hand, many if these studies have grossly misrepresented autism
                        related behaviors. The problem has been the role given to the applied behavior analysis (ABA)
                        by behavior experts as a colander for understanding differences in autism.
                    </p>
                    <p>
                        The book reveals another flaw in autism studies and that is how researchers have harnessed
                        their findings into an institutional effort permitting them to mandate and discriminate between
                        differences in behaviors in autism. This dilemma has prevented many parents from employing
                        their best practices to advance their children’s interest and skills beyond the institutional
                        thinking.
                    </p>
                    <p>
                        This book invites readers to experience how one child with autism communicated his interest
                        and skills beyond the conformist maxim to advance his language, social and academic skills.
                    </p>

                </PageWrapper>
            </div>
        </Layout>
    );
}
