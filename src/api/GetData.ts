import { db } from "@/config/firebase";
import { DocumentData, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const GetData = (category: string) => {
  const [data, setData] = useState<DocumentData[]>();
  let isMounted = true;

  useEffect(() => {
    console.log('call');
    const fetchData = async () => {
      if (isMounted) {
        const querySnapshot = await getDocs(collection(db, category));
        const serverData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          uid: doc.id,
        }));
        setData(serverData);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return { data };
};

export default GetData;
