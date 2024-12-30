import { docsProps } from "./docsProps";
import { courseProps } from "./coursesProps";
import { personResponsibleProps } from "./personResponsibleProps";
import { imgType } from "./imgType";

export type studentProps = {
  id: number;
  name: string;
  cpf: string;
  birth: Date;
  phone: string;
  img: imgType;
  personResponsible: personResponsibleProps;
  docs: docsProps;
  courses: courseProps[];
};

