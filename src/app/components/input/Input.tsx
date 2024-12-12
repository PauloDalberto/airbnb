import { forwardRef, InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;

interface InputProps extends Props {
  Icon: React.ElementType;
  helperText?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, name, Icon, helperText, ...props }, ref) => {
    return (
      <div className="relative h-fit">
        <label>
          <Icon 
            className="absolute right-2 top-1 text-highlight cursor-pointer" 
            width={40} 
            height={40} 
          />
        </label>
        <input
          type={type}
          name={name}
          ref={ref}
          className={`bg-gray2 placeholder:text-gray12 py-3 pl-4 pr-14  w-96 rounded-3xl border border-gray4`}
          {...props}
        />
         <div className="mt-1 text-red-600">{helperText}</div>
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
