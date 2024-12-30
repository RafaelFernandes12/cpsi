import { Button } from "../../components/Button";
import { Input } from "./components/Input";
import { ToastSuccess } from "../../utils/Toast";
import { SubmitHandler, useForm } from "react-hook-form";
import { Select } from "./components/Select.tsx";
import { useState } from "react";
import { teacherProps } from "../../models/teacherProps.ts";
import { createTeacher } from "../../operations/teacherOperations.ts";

export default function CreateTeacher() {
  const { register, handleSubmit } = useForm<teacherProps>();

  const [errors, setErrors] = useState<teacherProps>();

  const onSubmit: SubmitHandler<teacherProps> = async (data) => {
    await createTeacher({
      ...data,
      courses: [],
    })
      .then(() => {
        ToastSuccess({ message: "Professor criado com sucesso!" });
      })
      .catch((error) => {
        const e = error.response.data.errors;
        setErrors({ ...e });
      });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center"
    >
      <h1 className="font-semibold text-2xl my-7">Adicionar Professor</h1>
      <div className="flex flex-col gap-4 mb-4">
        <Input
          {...register("name")}
          maxLength={200}
          placeholder="Nome"
          error={errors?.name}
        />
      </div>
      <Select {...register("courses")}>
        <option value="1">Curso 1</option>
        <option value="2">Curso 2</option>
        <option value="3">Curso 3</option>
      </Select>
      <div className="w-full justify-center flex flex-col m-2">
        <label>Foto do professor: </label>
        <Input
          className="w-fit h-fit bg-white border-0"
          type="file"
          {...register("img")}
          error={errors?.img?.toString()}
        />
      </div>
      <Button type="submit">Criar Professor</Button>
    </form>
  );
}
