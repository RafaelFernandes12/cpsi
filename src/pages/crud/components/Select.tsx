import { forwardRef, Ref } from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
  error?: string;
}
export const Select = forwardRef(
  (props: SelectProps, ref: Ref<HTMLSelectElement>) => {
    const { error, children, ...rest } = props;
    return (
      <div>
        <select
          className="select select-bordered w-full bg-white border-[1px] border-black"
          ref={ref}
          {...rest}
        >
          {children}
        </select>
        <p className="pl-2">
          {props.error && <span className="text-red-600">{props.error}</span>}
        </p>
      </div>
    );
  },
);
