import { m, LazyMotion, useWillChange } from "framer-motion"
import Image from "next/image"

const loadFeatures = () => import("../helpers/MotionFeatures").then(res => res.default)

const Feature = ({ icon, title, content, delay, featureCtrl }) => {
  const willChange = useWillChange();
  return (
  <LazyMotion features={loadFeatures}>
  <m.div
    className="flex flex-col justify-center items-center sm:flex-row sm:justify-start sm:items-start p-6 rounded-[20px] mb-6 last:mb-0 cursor-default feature"
    initial={{ x: 800, opacity: 0 }}
    animate={ featureCtrl }
    transition={{ duration: 1.2, delay }}
    style={{ willChange }}
  >
    <div className="flex justify-center items-center w-16 h-16 rounded-full bg-[#09977c]/10 mb-4 sm:mb-0">
      <Image src={icon} alt="icon" width="50%" height="50%" />
    </div>
    <div className="flex-1 flex flex-col justify-center items-center sm:justify-start sm:items-start ml-3">
      <h4 className="font-poppins font-semibold text-white text-lg leading-6 mb-1 capitalize">{title}</h4>
      <p className="font-poppins text-white/70 leading-6 mb-1 text-center sm:text-left">{content}</p>
    </div>
  </m.div>
  </LazyMotion>
  )
}

export default Feature;