import { createStudent } from "../../operations/studentsOperations";
import { studentProps } from "../../models/studentProps";
import { ToastSuccess } from "../../utils/Toast";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "./components/Input.tsx";
import { Select } from "./components/Select.tsx";
import { useState } from "react";
import { Button } from "../../components/Button.tsx";

export default function CreateStudent() {
  const { register, handleSubmit } = useForm<studentProps>();

  const [errors, setErrors] = useState<studentProps>();

  const onSubmit: SubmitHandler<studentProps> = async (data) => {
    const newBirth = new Date(data.birth);
    await createStudent({
      ...data,
      courses: [],
      birth: newBirth,
    })
      .then(() => {
        ToastSuccess({ message: "Estudante criado com sucesso!" });
      })
      .catch((error) => {
        const e = error.response.data.errors;
        setErrors({
          ...e,
          personResponsible: {
            phone: [e.phone],
            name: [e.name],
          },
          docs: {
            rgBackImg: [e["docs.rgBackImg"]],
            rgFrontImg: [e["docs.rgFrontImg"]],
            residenceImg: [e["docs.residenceImg"]],
            cardioImg: [e["docs.cardioImg"]],
            dermaImg: [e["docs.dermaImg"]],
            vaccineImg: [e["docs.vaccineImg"]],
          },
        });
      });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center"
    >
      <h1 className="font-semibold text-2xl my-7">Adicionar Estudante</h1>
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
        <Select {...register("courses")}>
          <option value="1">Curso 1</option>
          <option value="2">Curso 2</option>
          <option value="3">Curso 3</option>
        </Select>
        <Input
          maxLength={11}
          placeholder="CPF"
          {...register("cpf")}
          error={errors?.cpf}
        />
        <Input
          maxLength={11}
          type="date"
          placeholder="Data de Nascimento"
          {...register("birth")}
          error={errors?.birth?.toString()}
        />
        <Input
          maxLength={11}
          placeholder="Telefone"
          type="tel"
          {...register("phone")}
          error={errors?.phone}
        />
        <Input
          maxLength={11}
          placeholder="Responsável"
          {...register("personResponsible.name")}
          error={errors?.personResponsible?.name}
        />
        <Input
          maxLength={11}
          placeholder="Telefone do Responsável"
          {...register("personResponsible.phone")}
          error={errors?.personResponsible?.phone}
        />

        <Input
          label="Foto do rg(verso):"
          type="file"
          className="w-fit h-fit bg-white border-0"
          {...register("docs.rgBackImg")}
          error={errors?.docs?.rgBackImg?.toString()}
        />
        <Input
          label="Foto do rg(frente):"
          type="file"
          className="w-fit h-fit bg-white border-0"
          {...register("docs.rgFrontImg")}
          error={errors?.docs?.rgFrontImg?.toString()}
        />
        <Input
          label="Foto do comprovante de residencia:"
          type="file"
          className="w-fit h-fit bg-white border-0"
          {...register("docs.residenceImg")}
          error={errors?.docs?.residenceImg?.toString()}
        />
        <Input
          label="Foto do cardiologista:"
          type="file"
          className="w-fit h-fit bg-white border-0"
          {...register("docs.cardioImg")}
          error={errors?.docs?.cardioImg?.toString()}
        />
        <Input
          label="Foto do dermatologista:"
          type="file"
          className="w-fit h-fit bg-white border-0"
          {...register("docs.dermaImg")}
          error={errors?.docs?.dermaImg?.toString()}
        />
        <Input
          label="Foto do passporte de vacinação:"
          type="file"
          className="w-fit h-fit bg-white border-0"
          {...register("docs.vaccineImg")}
          error={errors?.docs?.vaccineImg?.toString()}
        />
      </div>
      <Button type="submit">Criar Estudante</Button>
    </form>
  );
}
