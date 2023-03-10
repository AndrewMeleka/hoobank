import { useRef, useEffect } from "react";
import { arrow_up, discount, robot } from "../public/assets/index.js";
import { m, LazyMotion } from "framer-motion";
import Image from "next/image";
import useWindowSize from "../hooks/useWindowSize.js";
import loadFeatures from "../helpers/MotionFeatures";

const Intro = () => {
  const introRef = useRef(null);
  const windowSize = useWindowSize();
  const imagePrior = useRef(true);
  useEffect(() => {
    if(windowSize === 'xs' || windowSize === 'sm'){
      imagePrior.current = false;
    }
  }, []);

  return (
    <section ref={introRef} id="home" className="flex flex-col lg:flex-row pt-6">
    <LazyMotion features={loadFeatures}>
    <div className="flex-1 flex flex-col justify-center items-start px-6 sm:px-16 lg:px-0">
      <m.div
        className="flex items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 cursor-default"
        transition={{ duration: 0.5 }}
      >
        <Image src={discount} alt="discount" className="w-8 h-8"/>
        <p className="font-poppins text-white/70 text-lg leading-[30.8px] ml-2">
          <span className="text-white">20%</span>
          {` Discount For `}
          <span className="text-white">3 Months</span>
          {` Account`}
        </p>
      </m.div>
      <div className="flex justify-between items-center w-full">
        <div>
          <m.h1
            className="font-poppins font-semibold text-white capitalize text-[46px] sm:text-[72px] leading-[60px] sm:leading-[100px]"
          >
            {`the next `} 
            <br className="hidden sm:block" />
          </m.h1>
          <m.h1
            className="font-poppins font-semibold text-white capitalize text-[46px] sm:text-[72px] leading-[60px] sm:leading-[100px] text-blue-gradient"     
          >
            generation
          </m.h1>
        </div>
        <m.div
          className="hidden md:flex lg:mx-4"
        >
          <m.button
            className="flex justify-center items-center w-[140px] h-[140px] rounded-full bg-blue-gradient p-0.5 cursor-pointer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8, borderRadius: "100%"}}
          >
            <div className="flex flex-col justify-center items-center bg-[#00040f] w-full h-full rounded-full">
              <div className="flex items-center">
                <p className="font-poppins font-medium text-lg leading-6 text-blue-gradient capitalize">get</p>
                <Image src={arrow_up} alt="arrow"/>
              </div>
              <p className="font-poppins font-medium text-lg leading-6 text-blue-gradient capitalize">started</p>
            </div>
          </m.button>
        </m.div>
      </div>
      <m.h1
        className="font-poppins font-semibold text-white capitalize text-[46px] sm:text-[72px] leading-[60px] sm:leading-[100px] w-full"
      >
        Payment method.
      </m.h1>
      <m.p
        className="font-poppins text-white/70 text-lg leading-[30.8px] max-w-[470px] mt-5"
      >
        Our team of experts uses a methodology to identify the credit cards
        most likely to fit your needs. We examine annual percentage rates,
        annual fees.
      </m.p>
    </div>
    <div className="relative flex-1 flex justify-center items-center my-10 lg:my-0">
      <Image src={robot} alt="billing" className="w-full h-full md:w-[85%] md:h-[85%] md:ml-auto lg:w-full lg:h-full relative z-[20]" sizes='(min-width: 1024px) 50vw, (min-width: 768px) 85vw, 100vw' priority={imagePrior.current}/>
      <span className="absolute z-[0] w-[40%] h-[35%] top-0 pink-gradient-blur"/>
      <span className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue-gradient-blur"/>
      <span className="absolute z-[10] w-[80%] h-[80%] bottom-40 white-gradient-blur"/>
    </div>
    <div className="flex justify-center items-center md:hidden">
          <m.button
            className="flex justify-center items-center w-[140px] h-[140px] rounded-full bg-blue-gradient p-0.5 cursor-pointer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8, borderRadius: "100%"}}
          >
            <div className="flex flex-col justify-center items-center bg-[#00040f] w-full h-full rounded-full">
              <div className="flex items-center">
                <p className="font-poppins font-medium text-lg leading-6 text-blue-gradient capitalize">get</p>
                <Image src={arrow_up} alt="arrow"/>
              </div>
              <p className="font-poppins font-medium text-lg leading-6 text-blue-gradient capitalize">started</p>
            </div>
          </m.button>
    </div> 
    </LazyMotion>
  </section>
  );
};

export default Intro;