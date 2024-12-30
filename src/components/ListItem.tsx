import { motion } from "framer-motion";

interface listItemProps {
  path: string;
  children: React.ReactNode;
}

export function ListItem({ path, children }: listItemProps) {
  const pathname = window.location.pathname.toLocaleLowerCase();
  const isActive = pathname.includes(path.toLocaleLowerCase());

  const listItemClasses = "my-4 flex items-center rounded-full max-sm:w-3/4";
  const linkClasses = "rounded-full py-1 px-2";

  return (
    <li
      className={
        isActive ? `${listItemClasses} bg-darkBlue/20` : listItemClasses
      }
    >
      <motion.a
        href={path}
        className={linkClasses}
        initial={!isActive ? { width: 0, display: "flex" } : undefined}
        whileHover={
          !isActive
            ? { width: "calc(100%)", backgroundColor: "rgb(22 18 80 / 0.2)" }
            : undefined
        }
        transition={!isActive ? { duration: 0.3 } : undefined}
      >
        {children}
      </motion.a>
    </li>
  );
}
