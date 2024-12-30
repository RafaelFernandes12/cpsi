import { twMerge } from "tailwind-merge";
import React, { forwardRef, Ref } from "react";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef((props: TextFieldProps, ref: Ref<HTMLInputElement>) => {
  const { label, className, ...rest } = props;
  return (
    <div className="flex flex-col gap-2 w-full justify-center">
      {label && (
        <label className="text-sm font-medium ml-2 text-gray-700">{label}</label>
      )}
      <input
        className={twMerge(
          "input input-bordered bg-white border-[1px] border-black w-full",
          className,
        )}
        ref={ref}
        {...rest}
      />
      <p className="pl-2">
        {props.error && <span className="text-red-600">{props.error}</span>}
      </p>
    </div>
  );
})
