import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ children, onClose }) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        onClose();
      }
    };
    document.addEventListener(
      'mousedown',
      handleClickOutside,
    );
    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside,
      );
    };
  }, [onClose]);

  return (
    <div className="fixed top-0 z-50 flex items-center justify-center h-screen w-screen bg-black bg-opacity-50">
      <div
        ref={ref}
        className=" h-1/2 w-1/2 overflow-y-scroll rounded-md bg-white p-5 shadow-md transition-all sm:overflow-auto xl:w-[65w]"
      >
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: React.ReactNode,
  onClose: PropTypes.func,
};

export default Modal;
