import { useRef, useEffect } from "react";
import { clients } from "../data/clients.data.js";
import { m, LazyMotion, useAnimationControls, useInView, useWillChange } from "framer-motion";
import Image from "next/image";
import loadFeatures from "../helpers/MotionFeatures";

//const loadFeatures = () => import("../helpers/MotionFeatures").then(res => res.default)

const Clients = () => {
  const clientsRef = useRef(null)
  const isInView = useInView(clientsRef, { once: true });
  const willChange = useWillChange();

  const ctrl = useAnimationControls();

  useEffect(() => {
    if(isInView) ctrl.start({ opacity: 1, scale: [1.5, 1] });
  }, [isInView, ctrl]);

  return (
    <section ref={clientsRef} className="flex justify-center items-center mb-8 py-6">
      <div className="flex justify-center items-center gap-8 flex-wrap w-full">
        { clients.map(({id, logo}, idx) => (
          <div key={id} className="flex-1 flex justify-center items-center min-w-[150px] sm:min-w-[192px]">
            <LazyMotion features={loadFeatures}>
            <m.div
              className="sm:w-[192px] w-[150px]"
              initial={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.7 }}
              animate={ctrl}
              style={{ willChange }}
            >
                <Image src={logo} alt={`client-${idx}`} className="w-full object-contain"/>
            </m.div>
            </LazyMotion>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;