import { useRef, useEffect } from "react";

const UseIntersectionObserver = (callback, options) => {
  const targetRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
        observer.disconnect();
      }
    }, options);
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
    return () => observer.disconnect();
  }, [callback, options]);
  return targetRef;
};

export default UseIntersectionObserver;
