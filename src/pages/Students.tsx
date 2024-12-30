import { Person } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import ErrorIcon from "@mui/icons-material/Error";
import { SearchBar } from "../components/SearchBar";
import { useQuery } from "react-query";
import { studentProps } from "../models/studentProps";
import {
  deleteStudents,
  getAllStudents,
} from "../operations/studentsOperations";
import { useSearchParams } from "react-router-dom";
import { Button } from "../components/Button";
import { ThreeDots } from "../components/ThreeDots";

export default function Students() {
  const [searchParams, _] = useSearchParams();
  const studentName = searchParams.get("name") || "";
  const { data: students } = useQuery<studentProps[]>({
    queryKey: ["student", studentName],
    queryFn: () => getAllStudents(studentName),
  });
  function errorResponse(response: studentProps) {
    if (
      response.img &&
      response.docs.dermaImg &&
      response.docs.cardioImg &&
      response.docs.rgBackImg &&
      response.docs.rgFrontImg &&
      response.docs.vaccineImg &&
      response.docs.residenceImg
    )
      return true;
    return false;
  }
  return (
    <div>
      <SearchBar />
      <div className="flex justify-end">
        <Button>
          <a href="createStudent" className="flex items-center justify-center">
            <p className="max-sm:hidden text-white">Criar estudante</p>
            <AddIcon />
          </a>
        </Button>
      </div>
      {(students || []).map((response) => (
        <div
          key={response.id}
          className="flex items-center justify-between border-1 border-gray-500 rounded-3xl p-4 my-6 "
        >
          <a href={`/student/${response.id}`} className="">
            <ErrorIcon
              className={`text-red-500 ${
                errorResponse(response) ? "hidden" : ""
              }`}
            />
            <div className="flex gap-4 items-center">
              <img
                src={String(response.img)}
                alt=""
                className={`w-32 h-32 rounded-full bg-contain max-sm:w-20 max-sm:h-20 ${response.img ? "" : "hidden"}`}
              />
              <Person
                className={`w-32 h-32 rounded-full bg-contain max-sm:w-20 max-sm:h-20 ${response.img ? "hidden" : ""}`}
              />
              <div className="flex gap-2 flex-col ml-4 max-sm:text-xs">
                <p className="w-96 max-sm:w-36 break-words">{response.name}</p>
                <p>CPF: {response.cpf}</p>
              </div>
            </div>
          </a>

          <ThreeDots>
            <li className="hover:bg-gray-300">
              <a href="EditStudent">aousghdoauw</a>
            </li>
            <li className="hover:bg-gray-300">
              <button onClick={() => deleteStudents(response.id)}>
                Excluir
              </button>
            </li>
          </ThreeDots>
        </div>
      ))}
    </div>
  );
}
