import { useState, useEffect, useRef } from "react"
import { navLinks } from "../data/navLinks.data.js"
import { burger, close, logo } from "../public/assets/index.js"
import Image from "next/image"
import useWindowSize from "../hooks/useWindowSize.js"

const Navbar = () => {
  const [active, setActive] = useState(0);
  const [isModal, setIsModal] = useState(false);
  const windowSize = useWindowSize();
  const iconPrior = useRef(true);

  useEffect(() => {
    if(windowSize !== 'xs'){
      setIsModal(false);
      iconPrior.current = false;
    }
  }, [windowSize]);


  return (
    <nav className="w-full flex justify-between items-center py-7">
      <Image src={logo} alt="Logo" height={32} width="auto" priority={true}/>
      <div>
        <ul className="hidden sm:flex justify-end items-center">
            { navLinks.map(({id, title}, idx) => 
              <li key={id} className={`font-poppins cursor-pointer mr-14 last:mr-0 ${active === idx ? 'text-white' : 'text-white/60 hover:text-white/80'}`}>
                <a href={`#${id}`} onClick={() => setActive(idx)}>{title}</a>
              </li>
            )}
        </ul>
        <Image src={isModal ? close : burger} alt={isModal ? 'close' : 'menu'} priority={iconPrior.current} className="sm:hidden w-6 h-6 cursor-pointer" onClick={() => setIsModal(prevState => !prevState)}/>
      </div>
      <div className={`${isModal ? "flex" : "hidden"} p-6 absolute top-[90px] right-6 min-w-[140px] rounded-xl bg-black-gradient menu`}>
        <ul className="flex flex-col items-center mx-auto">
            { navLinks.map(({id, title}, idx) => 
              <li key={id} className={`font-poppins cursor-pointer mb-4 last:mb-0 ${active === idx ? 'text-white' : 'text-white/60 hover:text-white/80'}`}>
                <a href={`#${id}`} onClick={() => { setActive(idx); setIsModal(false) }}>{title}</a>
              </li>
            )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;