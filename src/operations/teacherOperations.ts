import axios from "../config/axios";
import { teacherProps } from "../models/teacherProps";
import { uploadImage } from "./utils/uploadImage";
import uniqid from "uniqid";

export async function createTeacher(props: teacherProps) {
  try {
    const img = await uploadImage(
      `teacherImgs/${props.name}/${uniqid()}`,
      props.img,
    );
    return (await axios.post("/teacher", { ...props, img })).data;
  } catch (e) {}
}
export async function getAllTeachers() {
  try {
    return (await axios.get("/teacher")).data;
  } catch (e) {
    throw e;
  }
}
export async function getOneTeacher(id: number) {
  try {
    return (await axios.get(`/teacher/${id}`)).data;
  } catch (e) {
    throw e;
  }
}
export async function deleteTeacher(id: number) {
  try {
    return (await axios.delete(`/teacher/${id}`)).data;
  } catch (e) {
    throw e;
  }
}
