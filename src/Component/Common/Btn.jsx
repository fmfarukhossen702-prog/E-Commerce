import React from 'react'

const Btn = ({ children ,className}) => {
  return (
    <div>
      <button
        className={`${className} py-4 px-12 bg-primary rounded-sm font-medium text-[#FAFAFA] `}
      >
  
        {children}
      </button>
    </div>
  );
};

export default Btn
