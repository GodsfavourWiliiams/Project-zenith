// import React, { useState } from "react";

interface FormInputProps {
  label?: string;
  placeholder: string;
  type: string;
  value: string;
  className?: string;
  required?: boolean;
  maxLength?: number;
  iconClass?: string;
  placeHolderClass?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  rightIcon?: React.ReactNode | undefined;
  leftIcon?: React.ReactNode | undefined;
}
const FormInput = ({
  label,
  placeholder,
  placeHolderClass,
  type,
  value,
  onChange,
  rightIcon,
  leftIcon,
  className,
  required,
  maxLength,
  iconClass,
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
            : ` ${placeHolderClass} mt-2 w-full rounded-md border bg-gray-100 py-4 pl-3 text-base font-medium leading-none text-gray-800 focus:outline-none`
        }
        // value={valueState}
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
