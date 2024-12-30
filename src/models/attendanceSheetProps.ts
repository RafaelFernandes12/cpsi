import { courseProps } from "./coursesProps"
import { studentAttendanceProps } from "./studentsAttendanceProps"

export type attendanceSheetProps = {
  day: Date
  course: courseProps
  studentsAttendance: studentAttendanceProps[]
}
