import { FunctionComponent, InputHTMLAttributes } from "react";
import { classNames } from "../utils";

type Props = InputHTMLAttributes<HTMLInputElement>;

const Input: FunctionComponent<Props> = ({ children, className, ...props }) => (
  <input
    {...props}
    className={classNames(
      "block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",
      className
    )}
  />
);

export default Input;
