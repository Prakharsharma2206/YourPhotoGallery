import { useState, useEffect } from "react";
import { projectStorage, projectFirestore , timestamp} from "../firebase/config";

const useStorage = ({file , mail}) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = projectStorage.ref(file.name);
    const db = projectFirestore.collection(`${mail}`);

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (error) => {
        setError(error);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        const name = file.name;
        const type = file.type;
        const modified = file.lastModifiedDate;
        const size =file.size;
        db.add({url , createdAt , name , size , modified})
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, error, url };
};

export default useStorage;
