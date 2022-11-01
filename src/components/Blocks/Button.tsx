import { ButtonHTMLAttributes, FC } from "react";
import Loader from "./Loader";

const Button: FC<Props> = ({
  children,
  isLoading,
  Icon,
  disabled,
  variant = "primary",
  iconPosition = "back",
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={`flex cursor-pointer items-center justify-center rounded-md border px-2  py-2 text-white shadow-lg focus:outline-none focus:outline-2 focus:outline-primary-500 focus:ring-offset-2 md:px-4 md:text-lg  ${
        disabled
          ? "!cursor-not-allowed !bg-gray-400"
          : variant === "primary"
          ? `!hover:bg-primary-700 border-transparent bg-primary-500`
          : `border-primary-500 !bg-white !text-primary-500 hover:bg-gray-100`
      }  ${props?.className}`}
    >
      {!isLoading ? (
        <>
          {Icon && iconPosition === "front" && (
            <div className="mr-2 flex items-center">{Icon}</div>
          )}
          {children}
          {Icon && iconPosition === "back" && (
            <div className="ml-2 flex items-center">{Icon}</div>
          )}
        </>
      ) : (
        <Loader className="my-1 !text-white" />
      )}
    </button>
  );
};

export default Button;

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  Icon?: any;
  variant?: "primary" | "secondary";
  iconPosition?: "front" | "back";
}
