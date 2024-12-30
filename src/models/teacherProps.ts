import { courseProps } from "./coursesProps";
import { imgType } from "./imgType";

export type teacherProps = {
  id: number;
  name: string;
  img: imgType;
  courses: courseProps[];
};
