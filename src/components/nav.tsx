import { FunctionComponent, HTMLAttributes } from "react";
import NavLink from "./nav-link";

type Props = HTMLAttributes<HTMLElement>;

const Nav: FunctionComponent<Props> = (props) => (
  <nav className="shadow" {...props}>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 justify-between">
        <div className="flex">
          <div className="flex flex-shrink-0 items-center"></div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/search">Search</NavLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Nav;
