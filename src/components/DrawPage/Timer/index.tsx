import React, { useState, useEffect, useRef } from 'react';
import { TimerProps } from '@/types/components/TimerProps'

const Timer: React.FC<TimerProps> = ({ initialTime, onTimeout }) => {
  const [seconds, setSeconds] = useState<number>(initialTime);
  const requestRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const animate = (time: number) => {
    if (startTimeRef.current === 0) {
      startTimeRef.current = time;
    }
    const elapsedTime = time - startTimeRef.current;
    const remainingTime = Math.max(0, initialTime - Math.floor(elapsedTime / 1000));
    setSeconds(remainingTime);

    if (remainingTime > 0) {
      requestRef.current = requestAnimationFrame(animate);
    } else {    
      onTimeout();
    }
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [initialTime, onTimeout]);

  return <div>남은 시간: {seconds} 초</div>;
};


export default Timer;