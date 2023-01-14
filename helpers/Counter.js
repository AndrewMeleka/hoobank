import { useState, useEffect, useRef } from "react";

const Counter = ({ start = 0, end = 500, duration = 2000 }) => {
    const [val, setVal] = useState(start);
    const stepTime = useRef(duration / (end - start));
    const step = useRef(1);
    const oneTime = useRef(true);

    useEffect(() => {
        if(stepTime.current < 10){
            const multiplier = 10 / stepTime.current;
            stepTime.current = Math.floor(stepTime.current * multiplier);
            step.current = Math.floor(multiplier);
        }
    }, [])

    useEffect(() => {
        if(val >= start && val < end){
            if(val + step.current >= end - 5 && oneTime.current && step.current > 4){
                step.current = end - val - 5;
                oneTime.current = false;
            }
            if(end - val == 5){ stepTime.current = 50; step.current = 1 }
            else if(end - val == 4){ stepTime.current = 100; step.current = 1 }
            else if(end - val == 3){ stepTime.current = 150; step.current = 1 }
            else if(end - val == 2){ stepTime.current = 200; step.current = 1 }
            else if(end - val == 1){ stepTime.current = 250; step.current = 1 }
            const interval = setInterval(() => {
                setVal(prevVal => prevVal + step.current)
            }, stepTime.current);
            return () => clearInterval(interval);
        }
    }, [val])
   
    return val;
}

export default Counter;