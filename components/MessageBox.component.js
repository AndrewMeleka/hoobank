import { useEffect, useRef } from "react";
import { m, LazyMotion, useAnimationControls, useInView, useWillChange } from "framer-motion";
import loadFeatures from "../helpers/MotionFeatures";
//const loadFeatures = await import("../helpers/MotionFeatures")

const MessageBox = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const willChange = useWillChange();

  const headCtrl = useAnimationControls();
  const paraCtrl = useAnimationControls();
  const btnCtrl = useAnimationControls();

  const animSeq = async () => {
    await headCtrl.start("start");
    await paraCtrl.start("start");
    btnCtrl.start("start");
  };

  useEffect(() => {
    if(isInView) animSeq();
  }, [isInView]);

  const variants = {
    start: {
      opacity: 1,
      scale: [1.5, 1],
      transition: { duration: 1 }
    }
  };

  return (
    <section ref={ref} className="flex flex-col sm:flex-row justify-center items-center my-6 sm:my-16 px-6 sm:px-16 py-8 sm:py-12 bg-black-gradient-2 rounded-[20px] box-shadow">
      <LazyMotion features={loadFeatures}>
      <div className="flex-1 flex flex-col">
        <m.h2
          className="font-poppins font-semibold text-[40px] sm:text-[48px] text-white leading-[66px] sm:leading-[76px] w-full"
          initial={{ opacity: 0, scale: 0 }}
          variants={variants}
          animate={headCtrl}
          style={{ willChange }}
        >
          {`Let's try our service now`}
        </m.h2>
        <m.p
          className="font-poppins text-white/70 text-lg leading-[30px] max-w-[470px] mt-5"
          initial={{ opacity: 0, scale: 0 }}
          variants={variants}
          animate={paraCtrl}
          style={{ willChange }}
        >
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </m.p>
      </div>
      <m.div
        className="flex justify-center items-center ml-0 sm:ml-10 mt-10 sm:mt-0"
        initial={{ opacity: 0, scale: 0 }}
        variants={variants}
        animate={btnCtrl}
        style={{ willChange }}
      >
        <button className="font-poppins font-medium text-lg text-[#00040f] py-4 px-6 rounded-[10px] capitalize bg-blue-gradient hover:brightness-75 ease-in duration-150">get started</button>
      </m.div>
      </LazyMotion>
    </section>
  );
};

export default MessageBox;