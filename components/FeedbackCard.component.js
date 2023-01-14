import FadeText from "../helpers/FadeText.js";
import { quotes } from "../public/assets/index.js"
import { m, LazyMotion, useWillChange } from "framer-motion";
import Image from "next/image";
import loadFeatures from "../helpers/MotionFeatures";

//const loadFeatures = () => import("../helpers/MotionFeatures").then(res => res.default)

const FeedbackCard = ({ name, title, content, img, delay, cardCtrl, inView }) => {
  const willChange = useWillChange();

  const animProps = {
    initial: { opacity: 0 },
    transition: { duration: 1.5, delay}
  };

  return (
    <LazyMotion features={loadFeatures}>
    <m.div
      className="flex justify-between flex-col px-6 sm:px-10 py-7 sm:py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 last:mr-0 bg-transparent cursor-default feedback-card"
      {...animProps}
      animate={ cardCtrl }
      style={{ willChange }}
    >
      <Image src={quotes} alt="double quotes" className="w-[42px] h-[27px] object-contain"/>
      <div className="font-poppins text-lg leading-8 text-white my-10">
        <FadeText begin={inView}>{content}</FadeText>
      </div>
      <div className="flex">
        <Image src={img} alt={name} className="w-12 h-12 rounded-full"/>
        <div className="flex flex-col ml-4 font-poppins capitalize">
          <h4 className="text-xl leading-8 text-white">{name}</h4>
          <p className="leading-6 text-white/70">{title}</p>
        </div>
      </div>
    </m.div>
    </LazyMotion>
  );
};

export default FeedbackCard;