import { NavLink } from "react-router-dom";

interface ActiveRoutesProps {
  children: React.ReactNode;
  to: string;
  className?: string;
  onClick?: () => void;
}

const ActiveRoutes: React.FC<ActiveRoutesProps> = ({
  children,
  to,
  onClick,
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "block py-2 px-3 text-lemon-10 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-lemon-10 md:p-0  dark:hover:bg-gray-700 dark:hover:text-bgColor-10 md:dark:hover:bg-transparent activeNavLink"
          : "block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-lemon-10 md:p-0 md:dark:hover:text-lemon-10 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
      }
      onClick={onClick}
    >
      {children}
    </NavLink>
  );
};

export default ActiveRoutes;
