import { Person } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import ErrorIcon from "@mui/icons-material/Error";
import { SearchBar } from "../components/SearchBar";
import { useQuery } from "react-query";
import { Button } from "../components/Button";
import { ThreeDots } from "../components/ThreeDots";
import { teacherProps } from "../models/teacherProps";
import { deleteTeacher, getAllTeachers } from "../operations/teacherOperations";
import { ToastError, ToastSuccess } from "../utils/Toast";

export default function Teacher() {
  const { data: teachers } = useQuery<teacherProps[]>({
    queryKey: ["teacher"],
    queryFn: () => getAllTeachers(),
  });
  async function handleDeleteTeacher(id: number) {
    await deleteTeacher(id)
      .then(() => ToastSuccess({ message: "Professor deletado com sucesso!" }))
      .catch((e) => {
        console.log(e);
        ToastError({ message: e.response.message });
      });
  }

  return (
    <>
      <SearchBar />
      <div className="flex justify-end">
        <Button>
          <a href="createTeacher" className="flex items-center justify-center">
            <p className="max-sm:hidden text-white">Criar Professor</p>
            <AddIcon />
          </a>
        </Button>
      </div>
      {(teachers || []).map((response) => (
        <div
          key={response.id}
          className="flex items-center justify-between border-1 border-gray-500 rounded-3xl p-4 my-6 "
        >
          <a href={`/teacher/${response.id}`} className="">
            <ErrorIcon
              className={`text-red-500 ${response.img ? "hidden" : ""}`}
            />
            <div className="flex gap-4 items-center">
              <img
                src={String(response.img)}
                alt=""
                className={`w-32 h-32 rounded-full bg-contain max-sm:w-20 max-sm:h-20 
                    ${response.img ? "" : "hidden"}`}
              />
              <Person
                className={`w-32 h-32 rounded-full bg-contain max-sm:w-20 max-sm:h-20 
                    ${response.img ? "hidden" : ""}`}
              />
              <div className="flex gap-2 flex-col ml-4 max-sm:text-xs">
                <p className="w-96 max-sm:w-36 break-words">{response.name}</p>
              </div>
            </div>
          </a>
          <ThreeDots>
            <li className="hover:bg-gray-300 w-full">
              <a href={`editTeacher/${response.id}`}>Editar</a>
            </li>
            <li className="hover:bg-gray-300 w-full">
              <button onClick={() => handleDeleteTeacher(response.id)}>
                Excluir
              </button>
            </li>
          </ThreeDots>
        </div>
      ))}
    </>
  );
}