import Feature from "./Feature.component.js";
import { features } from "../data/features.data.js";
import { m, LazyMotion } from "framer-motion";
import { useRef } from "react";

const loadFeatures = () => import("../helpers/MotionFeatures").then(res => res.default)

const Business = () => {
  const businessRef = useRef(null);

  return (
    <section id="features" ref={businessRef} className="flex flex-col gap-10 md:gap-6 md:flex-row mb-20 py-10">
      <LazyMotion features={loadFeatures}>
      <m.div className="flex-1 flex flex-col justify-center">
        <m.h2
          className="font-poppins font-semibold text-[40px] sm:text-[48px] text-white leading-[66.8px] sm:leading-[76.8px] w-full"
        >
          You do the business, <br className="hidden sm:block"/>
          we will handle the money.
        </m.h2>
        <m.p
          className="font-poppins text-white/70 text-lg leading-[30.8px] max-w-[470px] mt-5"
        >
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </m.p>
        <m.div
        >
          <button className="font-poppins font-medium text-lg text-[#00040f] mt-10 py-4 px-6 rounded-[10px] capitalize bg-blue-gradient hover:brightness-75 ease-in duration-150">get started</button>
        </m.div>
      </m.div>
      <div className="flex-1 relative flex flex-col justify-center items-center">
        { features.map(({ id, ...rest }, idx) => (
          <Feature
            key={id}
            delay={0.5 + (idx * 2) / 10}
            {...rest}
          />
        ))}
      </div>
      </LazyMotion>
    </section>
  );
};

export default Business;