// import React, { useState } from "react";

interface FormInputProps {
  label?: string;
  placeholder: string;
  type: string;
  value: string;
  name: string;
  className?: string;
  required?: boolean;
  maxLength?: number;
  iconClass?: string;
  placeHolderClass?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  rightIcon?: React.ReactNode | undefined;
  leftIcon?: React.ReactNode | undefined;
  error?: boolean;
}
const FormInput = ({
  label,
  placeholder,
  placeHolderClass,
  type,
  name,
  value,
  onChange,
  rightIcon,
  leftIcon,
  className,
  required,
  maxLength,
  iconClass,
  error,
}: FormInputProps) => {
  // const [valueState, setValue] = useState(value);

  return (
    <div className='relative flex w-full'>
      {leftIcon && (
        <div className='absolute left-0 ml-5 mt-[14px]'>{leftIcon}</div>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={
          className
            ? className
            : ` ${placeHolderClass}  ${
              error ? "border-red-400 border-2" : "border"
            } mt-2 w-full rounded-md py-4 pl-3 text-base font-normal leading-none text-gray-800 focus:outline-none`
        }
        name={name}
        value={value}
        required={required}
        maxLength={maxLength}
        onChange={onChange}
      />
      {rightIcon && (
        <div className={`absolute right-0 mr-5 ${iconClass} cursor-pointer`}>
          {rightIcon}
        </div>
      )}
    </div>
  );
};

export default FormInput;
