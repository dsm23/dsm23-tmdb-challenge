import { FunctionComponent } from "react";
import { NavLink as NavLinkReactRouter, NavLinkProps } from "react-router-dom";
import { classNames } from "../utils";

const NavLink: FunctionComponent<NavLinkProps> = ({
  children,
  className,
  to,
  ...props
}) => (
  <NavLinkReactRouter
    {...props}
    to={to}
    className={({ isActive }) =>
      classNames(
        isActive
          ? "border-indigo-500 text-gray-900"
          : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
        "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
      )
    }
  >
    {children}
  </NavLinkReactRouter>
);

export default NavLink;
