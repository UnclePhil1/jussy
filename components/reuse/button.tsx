import React from 'react';

interface CustomButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, onClick, className = '', disabled = false }) => {
  return (
    <button
      onClick={onClick}
      className={`px-14 py-2 rounded-full cursor-pointer z-30 bg-primary ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default CustomButton;