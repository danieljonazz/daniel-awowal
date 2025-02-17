import { facebook, instagram, linkedin, logowhite, twitter } from "@/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const tabs = [
    { text: "Pricing", link: "/pricing" },
    { text: "FAQs", link: "/faq" },
    { text: "Blog", link: "/blog" },
    { text: "Contact Us", link: "/contact-us" },
    { text: "Privacy Policy", link: "/privacy-policy" },
    { text: "Terms And Conditions", link: "/terms-and-condition" },
  ];
  const social = [
    {
      icon: facebook,
      link: "https://www.facebook.com/profile.php?id=61563975635037&mibextid=ZbWKwL",
    },
    { icon: twitter, link: "https://x.com/avowalcreatives" },
    { icon: instagram, link: "https://www.instagram.com/avowalcreatives/" },
    {
      icon: linkedin,
      link: "https://www.linkedin.com/company/avowalcreatives/",
    },
  ];

  return (
    <footer className="bg-black w-full min-h-[205px] py-5 px-10 gap-5 flex flex-col items-center justify-center">
      <ul className="w-fit h-fit grid grid-cols-3 lg:flex lg:flex-row gap-5 lg:gap-10">
        {tabs.map((el, index) => (
          <li
            key={index}
            className="text-white text-center cursor-pointer text-[10px] lg:text-[15px] font-normal"
          >
            <Link href={el.link}>{el.text}</Link>
          </li>
        ))}
      </ul>
      <Image
        src={logowhite}
        alt="Avowal Logo"
        className="my-3 lg:hidden"
        width={150}
        height={150}
      />
      <div className="w-full h-[56px] border-t flex items-end justify-between border-[#1D2739]">
        <Image
          src={logowhite}
          alt="Avowal Logo"
          className="hidden lg:flex"
          width={150}
          height={150}
        />
        <p className="text-[#667185] text-[10px] lg:text-[14px] font-normal">
          © {currentYear} Avowal. All rights reserved.
        </p>
        <ul className="w-fit h-fit flex flex-row gap-3">
          {social.map((el, index) => (
            <li
              key={index}
              className="w-[20px] cursor-pointer h-[20px] rounded-full bg-white flex items-center justify-center"
            >
              <Link href={el.link} target="_blank" rel="noopener noreferrer">
                <Image src={el.icon} alt={el.link} width={15} height={15} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
