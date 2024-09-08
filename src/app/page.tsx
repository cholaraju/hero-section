"use client";
import Header from "@/components/header";
import Spline from "@splinetool/react-spline";
import Section from "@/components/section";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="w-[70vw] text-[40px] leading-nones">
        explore our saas platform for the best....
      </div>

      <div className="w-[80vw] text-[80px] leading-none text-black px-8">
        ai services. <br />
      </div>
      <div className="h-[40vh]">
        <Spline scene="https://prod.spline.design/xIAfs6SL3nsZ31lz/scene.splinecode" />
      </div>
      <Section />
    </div>
  );
}
