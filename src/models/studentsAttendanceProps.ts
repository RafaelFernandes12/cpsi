import { attendanceSheetProps } from "./attendanceSheetProps";
import { studentProps } from "./studentProps";

export type studentAttendanceProps = {
  id: number;
  student: studentProps;
  attendance: number;
  attendanceSheet: attendanceSheetProps;
};
