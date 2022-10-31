import { ButtonHTMLAttributes, FunctionComponent } from "react";
import { classNames } from "../utils";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FunctionComponent<Props> = ({
  children,
  className,
  ...props
}) => (
  <button
    {...props}
    className={classNames(
      "flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
      className
    )}
  >
    {children}
  </button>
);

export default Button;
