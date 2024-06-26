import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { Layout } from "@/components/Layout/Layout";
import { PageWrapper } from "@/components/PageHeader/PageWrapper";
import { useRouter } from "next/router";
import { services } from "@/components/data";
import Link from "next/link";
import { Question } from "@/icons/question";
import { Arrow } from "@/icons/arrow";

const inter = Inter({ subsets: ["latin"] });

export default function ProgramDetails() {
  const [pageData, setPageData] = useState([]);
  const [serviceTitle, setSetServiceTitle] = useState('')

  const router = useRouter();
  console.log("router", router);

  const { query } = router;
  console.log("query", query);

  useEffect(() => {
    const serviceData = services.filter((service) => {
      return service.path.split("/")[2] === query["program-name"];
    });
    setPageData(serviceData);

    const serviceName = query["program-name"]
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
      .join(" ");

      setSetServiceTitle(serviceName)
  }, []);

  return (
    <Layout pageTitle={`${serviceTitle}`}>
      <PageWrapper
        pageHeader={pageData[0]?.name}
        pageHeaderImg={pageData[0]?.bgImage}
      >
        <div className={"whatWeDo"}>
          <h1>What we do</h1>
          <p>{pageData[0]?.description}</p>
        </div>
        <div className={"questionBox"}>
          <h1>
            Questions <Question />
          </h1>
          <p>
            Feel free to reach out for more information, or to schedule a free
            consultation!
          </p>
          <Link className={"btnSecondary"} href="/contact">
            Contact Us
          </Link>
        </div>
        <div className={"servicesLinkWrapper"}>
          <Link className={"servicesLink"} href={"/programs"}>
            Back to All Programs <Arrow />
          </Link>
        </div>
      </PageWrapper>
    </Layout>
  );
}
