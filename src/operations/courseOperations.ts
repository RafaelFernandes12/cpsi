import axios from "../config/axios";
import uniqid from "uniqid";
import { courseProps } from "../models/coursesProps";
import { uploadImage } from "./utils/uploadImage";

export async function createCourse(props: courseProps) {
  try {
    const img = await uploadImage(
      `courseImgs/${props.name}/${uniqid()}`,
      props.img,
    );
    return (await axios.post("/course", { ...props, img })).data;
  } catch (e) {
    throw e;
  }
}
export async function getAllCourses(name: string) {
  try {
    return (await axios.get(`/course/search?name=${name}`)).data;
  } catch (e) {
    throw e;
  }
}
export async function getOneCourse(id: number) {
  try {
    return (await axios.get(`/course/${id}`)).data;
  } catch (e) {
    throw e;
  }
}
export async function deleteCourse(id: number) {
  try {
    return (await axios.delete(`/course/${id}`)).data;
  } catch (e) {
    throw e;
  }
}
