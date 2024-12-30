import ClassIcon from "@mui/icons-material/Class";
import GroupsIcon from "@mui/icons-material/Groups";
import { Drawer, List } from "@mui/material";
import { useCallback, useState } from "react";
import { ListItem } from "./ListItem";
import MenuIcon from "@mui/icons-material/Menu";

export function ResponsiveMenu() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = window.location.pathname;

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen((oldDrawerOpen) => !oldDrawerOpen);
  }, []);
  return (
    <>
      <button onClick={toggleDrawerOpen}>
        <MenuIcon />
      </button>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        variant="temporary"
        onClose={toggleDrawerOpen}
      >
        <div className="w-48 rounded-lg p-4">
          <List component="nav">
            <ul>
              <ListItem path="/">
                <ClassIcon
                  className={`mr-2 ${pathname === "/" ? "text-darkBlue" : ""}`}
                />
                <span className={`${pathname === "/" ? "text-darkBlue" : ""}`}>
                  Cursos
                </span>
              </ListItem>

              <ListItem path="/students">
                <GroupsIcon
                  className={`mr-2 ${
                    pathname.includes("student") ? "text-darkBlue" : ""
                  }`}
                />
                <span
                  className={`${
                    pathname.includes("student") ? "text-darkBlue" : ""
                  }`}
                >
                  Alunos
                </span>
              </ListItem>
            </ul>
          </List>
        </div>
      </Drawer>
    </>
  );
}
