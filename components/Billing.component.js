// import FadeText from "../helpers/FadeText.js";
import { apple, bill, google } from "../public/assets/index.js"
import { m, LazyMotion, useInView, useWillChange } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";

const loadFeatures = () => import("../helpers/MotionFeatures").then(res => res.default)

const Billing = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true });
  const willChange = useWillChange();
  /*
  useEffect(() => {
    if(isInView) animSeq();
  }, [isInView]);
  */


  return (
    <section ref={ref} id="product" className= "flex flex-col-reverse md:flex-row mb-20 py-10">
      <LazyMotion features={loadFeatures}>
      <div className="flex-1 relative flex justify-center items-center mr-0 mt-10 md:mr-10 md:mt-0">
        <m.div
          className="w-full h-full relative z-50"
          style={{ willChange }}
        >
            <Image src={bill} alt="billing" className="w-full h-full object-contain" width={620} height="auto"/>
        </m.div>
        <span className="absolute z-0 bottom-0 -left-1/2 w-2/4 h-2/4 rounded-full pink-gradient-blur"/>
        <span className="absolute z-30 top-0 -left-1/2 w-2/4 h-2/4 rounded-full white-gradient-blur"/>
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <m.h2
          className="font-poppins font-semibold text-[40px] sm:text-[48px] text-white leading-[66px] sm:leading-[76px] w-full"
          style={{ willChange }}
        >
          Easily control your <br className="hidden sm:block"/> billing & invoicing
        </m.h2>
        <div className="font-poppins text-white/70 text-lg leading-[30px] max-w-[470px] mt-5">
          {/* <FadeText begin={isInView}>
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </FadeText> */}
        </div>
        <div className="flex flex-wrap gap-4 mt-6 sm:mt-10">
            <m.div
              className="w-[128px] h-[42px] cursor-pointer"
              style={{ willChange }}
            >
                <Image src={apple} alt="AppStore" className="w-full h-full object-contain"/>
            </m.div>
            <m.div
              className="w-[128px] h-[42px] cursor-pointer"
              style={{ willChange }}
            >
                <Image src={google} alt="PlayStore" className="w-full h-full object-contain"/>
            </m.div>
        </div>
      </div>
      </LazyMotion>
    </section>
  );
};

export default Billing;