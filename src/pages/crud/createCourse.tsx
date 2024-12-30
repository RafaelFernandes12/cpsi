import { Input } from "./components/Input";
import { createCourse } from "../../operations/courseOperations";
import { courseProps } from "../../models/coursesProps";
import { ToastSuccess } from "../../utils/Toast";
import { SubmitHandler, useForm } from "react-hook-form";
import { Select } from "./components/Select.tsx";
import { useState } from "react";
import { Button } from "../../components/Button.tsx";
import { useQuery } from "react-query";
import { studentProps } from "../../models/studentProps.ts";
import { getAllStudents } from "../../operations/studentsOperations.ts";
import { teacherProps } from "../../models/teacherProps.ts";
import { getAllTeachers } from "../../operations/teacherOperations.ts";
import { localProps } from "../../models/localProps.ts";
import {
  daysOfWeek,
  hoursOfClass,
  maxClasses,
} from "../../utils/enums/daysOfWeek.ts";

export default function CreateCourse() {
  const { register, handleSubmit } = useForm<courseProps>();
  const [errors, setErrors] = useState<courseProps>();
  const [locals, setLocals] = useState<Array<localProps>>([]);

  const { data: students } = useQuery<studentProps[]>({
    queryKey: ["student"],
    queryFn: () => getAllStudents(""),
  });
  const { data: teachers } = useQuery<teacherProps[]>({
    queryKey: ["teacher"],
    queryFn: () => getAllTeachers(),
  });
  const onSubmit: SubmitHandler<courseProps> = async (data) => {
    await createCourse({
      ...data,
      local: locals,
      students: [],
    })
      .then(() => {
        ToastSuccess({ message: "Estudante criado com sucesso!" });
      })
      .catch((error) => {
        const e = error.response.data.errors;
        setErrors({
          ...e,
        });
      });
  };
  function handleCreateNewLocal() {
    setLocals((preLocal) => [
      ...preLocal,
      { day: null, hour: null, place: null },
    ]);
  }
  function handleLocalChange(
    index: number,
    field: keyof localProps,
    value: string,
  ) {
    setLocals((prevLocals) => {
      const updatedLocals = [...prevLocals];
      updatedLocals[index] = { ...updatedLocals[index], [field]: value };
      return updatedLocals;
    });
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="font-semibold text-2xl my-7">Criar curso</h1>
      <div className="flex flex-col gap-4 mb-4">
        <div className="flex items-center gap-6 max-sm:flex-col">
          <Input
            {...register("name")}
            maxLength={200}
            placeholder="Nome"
            error={errors?.name}
          />

          <div className="w-full justify-center flex flex-col">
            <label>Foto do estudante: </label>
            <Input
              className="w-fit h-fit bg-white border-0"
              type="file"
              {...register("img")}
              error={errors?.img?.toString()}
            />
          </div>
        </div>
        <div className="flex gap-4">
          <Select {...register("students")}>
            <option value={""}>Selecione os estudantes</option>
            {(students || []).map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </Select>
          <Select {...register("type")}>
            <option value={"EXTENSAO"}>Extensão</option>
            <option value={"ENSINO"}>Ensino</option>
          </Select>
          <Select {...register("teacher")}>
            <option value={""}>Selecione um professor</option>
            {(teachers || []).map((t) => (
              <option key={t.id} value={t.id}>
                {t.name}
              </option>
            ))}
          </Select>
          <Select {...register("maxClasses")}>
            <option value={""}>Selecione um horario</option>
            {(maxClasses || []).map((mc) => (
              <option key={mc.value} value={mc.value}>
                {mc.field}h
              </option>
            ))}
          </Select>
        </div>
        <div className="flex gap-4 items-center my-4 max-md:flex-col">
          {locals.map((l, i) => {
            return (
              <div className="flex flex-col gap-4">
                <Select
                  value={l.day || ""}
                  onChange={(e) => handleLocalChange(i, "day", e.target.value)}
                >
                  {daysOfWeek.map((d) => (
                    <option key={d.value} value={d.value}>
                      {d.field}
                    </option>
                  ))}
                </Select>
                <Select
                  value={l.hour || ""}
                  onChange={(e) => handleLocalChange(i, "hour", e.target.value)}
                >
                  {hoursOfClass.map((h) => (
                    <option key={h.value} value={h.value}>
                      {h.field}
                    </option>
                  ))}
                </Select>
                <Input
                  value={l.place || ""}
                  maxLength={200}
                  onChange={(e) =>
                    handleLocalChange(i, "place", e.target.value)
                  }
                  placeholder="Nome"
                  error={errors?.name}
                />
              </div>
            );
          })}
        </div>
        <Button onClick={handleCreateNewLocal}>Criar local</Button>
      </div>

      <Button type="submit">Criar Estudante</Button>
    </form>
  );
}
