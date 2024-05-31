import React from "react";
import style from "./PageWrapper.module.css";
import { nunito_sans } from "@/fonts/fonts";
import Image from "next/image";
import Link from "next/link";
import Home from "@/pages";
import { HomeIcon } from "@/icons/home";
import Contact from "@/pages/contact";
import { ContactIcon } from "@/icons/contact";

export function PageWrapper({
  children,
  pageHeader,
  pageHeaderImg,
  pageHeaderBgColor,
}) {
  return (
    <div className={`${style.formContainer} ${nunito_sans.className}`}>
      <div className={style.headerContentWrapper}>
        <Image
          className={style.contactImg}
          alt=""
          src={pageHeaderImg}
          width={200}
          height={200}
        />
        <div className={style.formHeader}>
          <h2>{pageHeader}</h2>
        </div>
      </div>
      <div className={style.contactContentWrapper}>
        <div className={style.sideBar}>
          <div>
            <h2>Locations</h2>
            <strong>Maple Community Centre</strong>
            <p>
              10190 Keele St,
              <br /> Maple, Ontario, L6A 1R7
            </p>
            <strong>Civic Centre Resource Library</strong>
            <p>
              2191 Major Mackenzie Dr W, <br />
              Vaughan, Ontario, L6A 4W2
            </p>
          </div>
          <div>
            <h2>Hours</h2>
            <p>Mon - Sat: 8.00am - 6.00pm</p>
          </div>
          <div>
            {/* <div className={style.headerWrapper}>
                            <ContactIcon />
                        </div> */}
            <h2>Contact</h2>
            <Link className={style.teleLink} href="tel:+16475185492">
              tel: 647.518.5492
            </Link>
            <br />
            <Link className={style.teleLink} href="tel:+12898597676">
              bus: 289.859.7676
            </Link>
          </div>

          {/* <h2>Quick Links</h2>
                    <div className={style.breadCrumb}><Link className={style.homeIcon} href='/'><HomeIcon /> Back to Home</Link></div>  */}
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
