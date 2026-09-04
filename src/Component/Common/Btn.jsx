import React from 'react'

const Btn = ({ children ,className = "", onClick}) => {
  return (
    <div>
      <button
      onClick={onClick}
        className={` py-4 px-12 bg-primary cursor-pointer rounded-sm font-medium text-[#FAFAFA] ${className}`}
      >
  
        {children}
      </button>
    </div>
  );
};

export default Btn
