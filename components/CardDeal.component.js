import FadeText from "../helpers/FadeText.js";
import { m, LazyMotion, useAnimationControls, useInView, useWillChange } from "framer-motion";
import { card } from "../public/assets/index.js";
import { useRef, useEffect } from "react";
import Image from "next/image";

const loadFeatures = () => import("../helpers/MotionFeatures").then(res => res.default)

const CardDeal = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true });
    const willChange = useWillChange();
  
    const secHeadCtrl = useAnimationControls();
    const imgCtrl = useAnimationControls();
    const btnCtrl = useAnimationControls();
    
    const animSeq = async () => {
      await secHeadCtrl.start({ opacity: 1, scale: [1.5, 1] })
      await imgCtrl.start({ opacity: 1, scale: 1 });
      btnCtrl.start({ opacity: 1, scale: [1.5, 1] });
    };
  
    useEffect(() => {
      if(isInView) animSeq();
    }, [isInView]);
  
    const animProps = {
      initial: { opacity: 0, scale: 0 },
      transition: { duration: 1 }
    };

   return (
    <section ref={ref} className="flex flex-col md:flex-row mb-32">
      <LazyMotion features={loadFeatures}>
      <div className="flex-1 flex flex-col justify-center">
        <m.h2
          className="font-poppins font-semibold text-[40px] sm:text-[48px] text-white leading-[66px] sm:leading-[76px] w-full"
          animate={secHeadCtrl}
          {...animProps}
          style={{ willChange }}
        >
          Find a better card deal <br className="hidden sm:block"/> in few easy step
        </m.h2>
        <div className="font-poppins text-white/70 text-lg leading-[30px] max-w-[470px] mt-5">
          <FadeText begin={isInView}>
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </FadeText>
        </div>
        <m.div
          animate={btnCtrl}
          {...animProps}
          style={{ willChange }}
        >
          <button className="font-poppins font-medium text-lg text-[#00040f] mt-10 py-4 px-6 rounded-[10px] capitalize bg-blue-gradient hover:brightness-75 ease-in duration-150">get started</button>
        </m.div>
      </div>
      <div className="flex-1 relative flex justify-center items-center ml-0 mt-10 md:ml-10 md:mt-0">
        <m.div
          className="w-full h-full"
          animate={imgCtrl}
          {...animProps}
          style={{ willChange }}
        >
            <Image src={card} alt="card" className="w-full h-full object-contain" width={620} height="auto"/>
        </m.div>
      </div>
      </LazyMotion>
    </section>
  );
};

export default CardDeal;