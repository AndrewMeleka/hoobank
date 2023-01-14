import { logo } from "../public/assets/index.js";
import { footer } from "../data/footer.data.js";
import { social } from "../data/social.data.js";
import Image from "next/image";

const Footer = () => {
  return (
    <section id="footer" className="flex flex-col justify-center items-center py-10 sm:py-16">
      <div className="flex flex-col lg:flex-row justify-center mb-8 w-full">
        <div className="flex-1 flex flex-col items-center lg:items-start lg:mr-10">
          <Image src={logo} alt="logo" height={72} width="auto"/>
          <p className="font-poppins text-white/70 text-lg leading-[30px] mt-4 max-w-[310px] text-center lg:text-left">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex-[1.5] w-full flex justify-around gap-6 flex-wrap mt-10 lg:mt-0">
          { footer.map(({ id, title, links }) => (
            <div key={id} className="flex flex-col items-center sm:items-start sm:my-0 my-4 min-w-[150px]">
              <h4 className="font-poppins font-medium text-lg leading-[27px] text-white capitalize mb-6">{title}</h4>
              <ul>
                { links.map(({ name }) => (
                  <li key={name} className="font-poppins leading-6 text-white/70 hover:text-[#00f6ff] ease-in duration-150 cursor-pointer text-center sm:text-left capitalize mb-4 last:mb-0">{name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between items-center pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-medium text-lg leading-[27px] text-white text-center">
          Copyright 2019 HooBank. <br className="block sm:hidden"/> All Rights Reserved.
        </p>
        <div className="flex mt-6 md:mt-0">
          { social.map(({ id, icon }) => (
            <Image key={id} src={icon} alt={id} className="w-[21px] h-[21px] object-contain cursor-pointer mr-6 last:mr-0"/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;