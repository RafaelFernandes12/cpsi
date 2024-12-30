
import { attendanceSheetProps } from "./attendanceSheetProps";
import { imgType } from "./imgType";
import { localProps } from "./localProps";
import { studentProps } from "./studentProps";
import { teacherProps } from "./teacherProps";

export type courseProps = {
  id: number;
  name: string;
  type: "EXTENSAO" | "ENSINO";
  img: imgType;
  isAvailable: boolean;
  maxStudents: number;
  maxClasses: number;
  local: localProps[];
  teacher: teacherProps;
  students: studentProps[];
  sheets: attendanceSheetProps[];
};
