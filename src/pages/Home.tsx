import { Button } from "../components/Button";
import { SearchBar } from "../components/SearchBar";
import { ThreeDots } from "../components/ThreeDots";
import { courseProps } from "../models/coursesProps";
import { deleteCourse, getAllCourses } from "../operations/courseOperations";
import AddIcon from "@mui/icons-material/Add";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { ToastError, ToastSuccess } from "../utils/Toast";

export default function Home() {
  const [searchParams, _] = useSearchParams();
  const courseName = searchParams.get("name") || "";
  const { data: courses } = useQuery<courseProps[]>({
    queryKey: ["course", courseName],
    queryFn: () => getAllCourses(courseName),
  });
  async function handleDeleteCourse(id:number) {
    await deleteCourse(id).then(() => {
      ToastSuccess({ message: "Curso deletado com sucesso!" });
    }).catch((e) => {
      ToastError(e.response.message);
    })
  }
  return (
    <div>
      <SearchBar />
      <div className="border-2 border-black rounded-lg p-4">
        <div className="flex justify-between mx-6 mb-10 mt-4">
          <ul className="inline-flex gap-3">
            <a href="/course">
              <li className="font-regular text-lg max-sm:text-sm border-b-[3px] border-darkBlue">
                Extensão
              </li>
            </a>
            <a href="/ensino">
              <li className="font-regular text-lg max-sm:text-sm">Ensino</li>
            </a>
          </ul>

          <Button>
            <a href="createCourse" className="flex items-center justify-center">
              <p className="max-sm:hidden text-white">Criar curso</p>
              <AddIcon />
            </a>
          </Button>
        </div>

        <div className="grid 2xl:grid-cols-4 m-0 lg:grid-cols-3 md:grid-cols-2">
          {(courses || []).map((response) => {
            return (
              <div
                key={response.id}
                className="w-52 h-52 flex items-center flex-col m-auto mb-14"
              >
                <a
                  href={`course/${response.id}/dadosGerais`}
                  className="bg-darkBlue/50 p-4 rounded-lg m-auto w-full h-full"
                >
                  <img
                    src={String(response.img)}
                    alt=""
                    className={`object-cover w-full h-full 
                      ${response.img ? "" : "hidden"}`}
                  />
                  <div
                    className={`flex items-center justify-center h-full w-full
                      ${response.img ? "hidden" : ""}`}
                  >
                    <span
                      className={`text-center rotate-[315deg] w-full  
                      `}
                    >
                      Adicionar Foto do curso
                    </span>
                  </div>
                </a>
                <div className="flex  items-center justify-between w-full">
                  <span className="w-full truncate">{response.name}</span>
                  <ThreeDots>
                    <li className="hover:bg-gray-300">
                      <a href="editCourse">Editar</a>
                    </li>
                    <li className="hover:bg-gray-300">
                      <button onClick={() => handleDeleteCourse(response.id)}>
                        Excluir
                      </button>
                    </li>
                  </ThreeDots>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
