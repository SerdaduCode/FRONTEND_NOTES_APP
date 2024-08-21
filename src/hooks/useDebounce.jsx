import { useRef } from "react";

const useDebounce = () => {
  const debounceTimeout = useRef(null);

  const debounce = (callback, time) => {
    return () => {
      if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
      debounceTimeout.current = setTimeout(() => {
        callback();
        debounceTimeout.current = null;
      }, time);
    };
  };
  return { debounce };
};

export default useDebounce;
