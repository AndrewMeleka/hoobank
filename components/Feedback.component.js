// import FadeText from "../helpers/FadeText.js";
import FeedbackCard from "./FeedbackCard.component.js";
import { m, LazyMotion } from "framer-motion";
import { useRef } from "react";
import { feedback } from "../data/feedback.data.js";
import loadFeatures from "../helpers/MotionFeatures";

//const loadFeatures = () => import("../helpers/MotionFeatures").then(res => res.default)

const Feedback = () => {
  const feedbackRef = useRef(null);


  return (
    <section ref={feedbackRef} id="clients" className="relative flex flex-col justify-center items-center mb-12 py-10">
      <span className="absolute z-0 w-3/5 h-3/5 -right-1/2 rounded-full blue-gradient-blur"/>
      <div className="relative z-10 w-full flex justify-between items-center gap-6 flex-col md:flex-row mb-6 sm:mb-16">
        <LazyMotion features={loadFeatures}>
        <m.h1
          className="font-poppins font-semibold text-[40px] sm:text-[48px] text-white leading-[66px] sm:leading-[76px] w-full text-center"
        >
          What people are <br className="hidden sm:block" /> saying about us
        </m.h1>
        </LazyMotion>
        <div className="w-full">
          <div className="font-poppins text-white/70 text-lg leading-[30px] text-center mx-auto max-w-[450px]">
            {/* <FadeText begin={isInView}>
              Everything you need to accept card payments and grow your business
              anywhere on the planet.
            </FadeText> */}
          </div>
        </div>
      </div>
      <div className="relative z-10 flex flex-wrap justify-around">
        { feedback.map(({id, ...rest}, idx) => (
          <FeedbackCard
            key={id}
            {...rest}
            delay={idx}
            /*cardCtrl={cardCtrl}*/
          />
        ))}
      </div>
    </section>
  );
};

export default Feedback;