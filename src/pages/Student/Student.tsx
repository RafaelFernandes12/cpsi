import { useQuery } from "react-query";
import { studentProps } from "../../models/studentProps";
import { getOneStudent } from "../../operations/studentsOperations";
import { useNavigate, useParams } from "react-router-dom";
import { Person } from "@mui/icons-material";
import { ContentBox } from "./ContextBox";

export default function Student() {
  const { id } = useParams();
  const navigate = useNavigate();
  const urlId = Number(id);
  const { data: student } = useQuery<studentProps>({
    queryKey: ["student", urlId],
    queryFn: () => getOneStudent(urlId).catch(() => navigate("/notFound")),
  });
  if (!student) return <div>Carregando...</div>;
  return (
    <div>
      //{" "}
      <div className="flex flex-col gap-10">
        {
          //        <ContentBox title="Dados pessoais">
          //          <div className="flex items-center gap-4 p-4">
          //            <img
          //              src={String(student.img)}
          //              alt=""
          //              className={`w-40 h-40 rounded-full max-sm:w-20 max-sm:h-20
          //${student.img ? "" : "hidden"}`}
          //            />
          //            <Person
          //              className={`w-40 h-40 rounded-full max-sm:w-20 max-sm:h-20
          //${student.img ? "hidden" : ""}`}
          //            />
          //            <p>{student.name}</p>
          //            <DialogButton>
          //              <ClassTime id={id} />
          //            </DialogButton>
          //          </div>
          //          <hr className="border-black" />
          //          <div className="p-4 flex flex-col gap-3">
          //            <p>CPF : {student.cpf}</p>
          //            <p>Data de nascimento : {student.birth.toString()}</p>
          //            <p>Tel. Contato : {student.telefoneContato}</p>
          //          </div>
          //          <hr className="border-black" />
          //          <div className="p-4 flex flex-col gap-3">
          //            <h2 className="font-semibold">Contato Emergência</h2>
          //            <p>Nome : {student.responsavelNome}</p>
          //            <p>Vínculo : {student.responsavelVinculo}</p>
          //            <p>Tel. Emergência : {student.telefoneEmergencia}</p>
          //          </div>
          //        </ContentBox>
          //
          //          <ContentBox title="Atividade">
          //            <ClassTime id={id} />
          //              </ContentBox>
          //              <ContentBox title="Documentação">
          //                <table className="mb-10 m-auto w-11/12 mt-8">
          //                  <tbody>
          //                    <TableRow
          //                      idHtml="file1"
          //                      id={id}
          //                      name="img"
          //                      title="FOTO 3X4"
          //                      data={student.img}
          //                    />
          //                    <TableRow
          //                      idHtml="file2"
          //                      id={id}
          //                      name="rg_frente"
          //                      title="CÓPIA DO RG (FRENTE)"
          //                      data={student.docs.rgFrontImg}
          //                    />
          //                    <TableRow
          //                      idHtml="file3"
          //                      id={id}
          //                      name="rg_verso"
          //                      title="CÓPIA DO RG (VERSO)"
          //                      data={student.docs.rgBackImg}
          //                    />
          //                    <TableRow
          //                      idHtml="file4"
          //                      id={id}
          //                      name="residencia"
          //                      title="COMPROVANTE DE RESIDÊNCIA"
          //                      data={student.docs.residenceImg}
          //                    />
          //                    <TableRow
          //                      idHtml="file5"
          //                      id={id}
          //                      name="docs.vaccineImg"
          //                      title="PASSAPORTE VACINAL"
          //                      data={student.docs.vaccineImg}
          //                    />
          //                    <TableRow
          //                      idHtml="file6"
          //                      id={id}
          //                      name="cardiologista"
          //                      title="ATESTADO CARDIOLOGISTA"
          //                      data={student.docs.cardioImg}
          //                    />
          //                    <TableRow
          //                      idHtml="file7"
          //                      id={id}
          //                      name="dermatologista"
          //                      title="ATESTADO DERMATOLOGISTA"
          //                      data={student.docs.dermaImg}
          //                    />
          //                  </tbody>
          //                </table>
          //              </ContentBox>
        }
      </div>
    </div>
  );
}
