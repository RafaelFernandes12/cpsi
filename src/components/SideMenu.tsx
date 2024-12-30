import { ListItem } from "./ListItem";
import ClassIcon from "@mui/icons-material/Class";
import GroupsIcon from "@mui/icons-material/Groups";
import SchoolIcon from "@mui/icons-material/School";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

export function SideMenu() {
  const student = "student";
  const course = "course";
  const teacher = "teacher";
  return (
    <div className="bg-white rounded-[10px] py-[20px] px-[40px] flex-auto w-72 font-bold max-lg:hidden ">
      <p className="text-darkBlue text-xl">
        <span className="font-medium">CPSI</span> Web
      </p>
      <hr />
      <ul>
        <ListItem path={`/${course}`}>
          <ClassIcon className="mr-2" />
          <span>Cursos</span>
        </ListItem>

        <ListItem path={`${student}`}>
          <GroupsIcon className="mr-2" />
          <span>Alunos</span>
        </ListItem>
        <ListItem path={teacher}>
          <SchoolIcon className="mr-2" />
          <span>Professores</span>
        </ListItem>
        <ListItem path="semester">
          <AccessTimeFilledIcon className="mr-2" />
          <span>Semester</span>
        </ListItem>
      </ul>
    </div>
  );
}
