import axios from "../config/axios";
import { studentProps } from "../models/studentProps";
import uniqid from "uniqid";
import { uploadImage } from "./utils/uploadImage";

export async function createStudent(props: studentProps) {
  try {
    const uploadPaths = [
      { file: props.img, path: `studentImgs/${props.name}/${uniqid()}` },
      {
        file: props.docs.rgFrontImg,
        path: `studentImgs/${props.name}/${uniqid()}`,
      },
      {
        file: props.docs.rgBackImg,
        path: `studentImgs/${props.name}/${uniqid()}`,
      },
      {
        file: props.docs.residenceImg,
        path: `studentImgs/${props.name}/${uniqid()}`,
      },
      {
        file: props.docs.cardioImg,
        path: `studentImgs/${props.name}/${uniqid()}`,
      },
      {
        file: props.docs.dermaImg,
        path: `studentImgs/${props.name}/${uniqid()}`,
      },
      {
        file: props.docs.vaccineImg,
        path: `studentImgs/${props.name}/${uniqid()}`,
      },
    ];

    const uploadResults = await Promise.all(
      uploadPaths.map(({ file, path }) => uploadImage(path, file)),
    );

    const [
      imgURL,
      rgFrontImgURL,
      rgBackImgURL,
      residenceImgURL,
      cardioImgURL,
      dermaImgURL,
      vaccineImgURL,
    ] = uploadResults;

    const student = {
      ...props,
      img: imgURL,
      docs: {
        rgFrontImg: rgFrontImgURL,
        rgBackImg: rgBackImgURL,
        residenceImg: residenceImgURL,
        cardioImg: cardioImgURL,
        dermaImg: dermaImgURL,
        vaccineImg: vaccineImgURL,
      },
    };

    return (await axios.post("/student", student)).data;
  } catch (error) {
    throw error;
  }
}

export async function getAllStudents(name: string) {
  try {
    return (await axios.get(`/student/searchByName?name=${name}`)).data;
  } catch (e) {
    throw e;
  }
}
export async function getOneStudent(id: number) {
  try {
    return (await axios.get(`/student/${id}`)).data;
  } catch (e) {
    throw e;
  }
}
export async function updateStudents(id: number, props: studentProps) {
  try {
    return (await axios.put(`/student/${id}`, props)).data;
  } catch (e) {
    throw e;
  }
}
export async function deleteStudents(id: number) {
  try {
    return (await axios.delete(`/student/${id}`)).data;
  } catch (e) {
    throw e;
  }
}
