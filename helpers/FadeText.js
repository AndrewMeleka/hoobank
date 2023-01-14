import { useEffect } from "react";
import { m, LazyMotion, useAnimationControls } from "framer-motion";
import loadFeatures from "../helpers/MotionFeatures";

//const loadFeatures = () => import("../helpers/MotionFeatures").then(res => res.default)

const FadeText = ({ children, begin }) => {
  //const ctrl = useAnimationControls();

  /*
  useEffect(() => {
    if(begin) ctrl.start("visible");
    if(!begin) ctrl.start("hidden");
  }, [begin]);
  */

  const paraAnim = {
    hidden: {},
    visible: {
      transition: {
        delay: 0.5,
        staggerChildren: 0.05
      }
    }
  };

  const charAnim = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    }
  };

  let finalArr = []
  const childsArr = children.split(' ');
  if(childsArr.length > 15){
    childsArr.forEach((w, i) => { 
      if((!i || i % 2 == 0) && i < childsArr.length - 1){
        if([w, childsArr[i+1]].join(' ').length <= 15){
          finalArr.push([w, childsArr[i+1]].join(' '));
        }
        else{
          finalArr.push(w);
          finalArr.push(childsArr[i+1]);
        }
      }
    })
  }
  else{
    finalArr = [...childsArr]
  }

  return (
    <LazyMotion features={loadFeatures}>
    <m.p /*animate={ctrl} initial='hidden'*/ variants={paraAnim}>
      { finalArr.map((word, idx) => {
        return(
        <m.span
          key={`word-${idx}`}
        >
          {word.split('').map((char, i) => (
            <m.span
            key={`char-${i}`}
            variants={charAnim}
          >
            {char}
          </m.span>
          ))}
          {' '}
        </m.span>
      )})}
    </m.p>
    </LazyMotion>
  );
}
export default FadeText;
