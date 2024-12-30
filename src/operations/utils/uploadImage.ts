import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { imgType } from "../../models/imgType";
import { storage } from "../../config/firestore";

export const uploadImage = async (path: string, file: imgType) => {
  if (!file || (file instanceof FileList && file.length === 0)) return null;
  const snapshot = await uploadBytes(ref(storage, path), file);
  return getDownloadURL(snapshot.ref);
};
