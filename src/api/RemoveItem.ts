import { db } from "@/config/firebase";
import { deleteDoc, doc } from "firebase/firestore";

const removeItem = async (uid: string) => {
  const cityRef = doc(db, "cart", uid);
  try {
    await deleteDoc(cityRef);
  } catch (error) {
    console.error(error);
  }
};

export default removeItem;
