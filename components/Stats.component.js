import Counter from "../helpers/Counter.js"; 
import { stats } from "../data/stats.data.js";
import { useRef } from "react";

const Stats = () => {
  const StatsRef = useRef(null);

  const styles = ['w-[76px] sm:w-[102px]', 'w-[55px] sm:w-[73px]', 'w-[55px] sm:w-[73px]']

  return (
    <section ref={StatsRef} className="flex justify-around items-center gap-5 flex-wrap mt-10 sm:mt-20 mb-32">
      { stats.map(({ id, title, pre, value, post }, i) => (
        <div key={id} className="flex justify-center sm:justify-start items-center">
          <h4 className='font-poppins font-semibold text-3xl sm:text-[40px] leading-[38px] sm:leading-[53px] text-white'>
            { pre || '' }
            <span className={`inline-block text-center ${styles[i]}`}>{ true ? <Counter end={value}/> : 0 }</span>
            { post || '' }
          </h4>
          <p className="font-poppins sm:text-xl sm:leading-[26px] leading-[18px] text-blue-gradient uppercase ml-3 whitespace-nowrap">{title}</p>
        </div>
      ))}
    </section>
  );
};

export default Stats;