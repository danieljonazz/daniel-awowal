import whyavowalimg from "../../../../public/icons/whyavowal.svg";
import bullet from "../../../../public/icons/bullet.svg";

import React from "react";
import Image from "next/image";

import { useRouter } from "next/navigation";

const WhyAvowal = () => {
  const router = useRouter();
  const features = [
    "Effortless Feedback Collection: Easily create feedback request links by naming the link, choosing if responses should be public, and selecting the desired fields.",
    "Centralized Dashboard: View, manage, and decide which feedback to make public from one intuitive dashboard.",
    "Integration Options: Seamlessly integrate with your app via API, embed feedback forms on your website, or display feedback using a link.",
    "Future Features: Soon, you'll be able to capture feedback from social media posts and inboxes directly to your Avowal dashboard.",
    "Shared Usage: One subscription allows access for your entire team, ensuring everyone can contribute to managing feedback.",
  ];

  return (
    <div className="flex flex-col lg:flex-row px-5 lg:px-0 items-center gap-10 my-5">
      <Image src={whyavowalimg.src} alt="" width={600} height={400} />
      <div className="flex flex-col">
        <span className="text-[50px] leading-[65px] font-bold">
          Your Business <span className="text-[#5B55EB]">Needs </span>
          Avowal
        </span>
        <p className="text-15px font-normal text-black">
          Effortless Feedback Collection: Easily create feedback request links
          by naming the link, choosing if responses should be public, and
          selecting the desired fields.
        </p>
        <div className="flex flex-col mt-7 gap-4">
          {features.map((el, i) => (
            <div className="flex gap-3 items-start" key={i}>
              <Image src={bullet.src} alt="" width={20} height={20} />
              <p className="text-15px">{el}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyAvowal;
