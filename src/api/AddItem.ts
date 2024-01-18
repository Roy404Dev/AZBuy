import { db } from "@/config/firebase";
import { setDoc, doc } from "firebase/firestore";
import { v4 } from "uuid";

const AddItem = async (DBcollection: string, data: unknown) => {
  try {
    setDoc(doc(db, DBcollection, v4()), data);
  } catch (error) {
    console.error("Error Upload data:", error);
  }
};

export default AddItem;
