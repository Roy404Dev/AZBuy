import { db } from "@/config/firebase";
import {
  collection,
  getDocs,
  DocumentData,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";

interface GetDataResult {
  data: DocumentData[];
  isLoading: boolean;
}

const useGetData = (
  DBcollection: string,
  field: string,
  value: unknown,
): GetDataResult => {
  const [data, setData] = useState<DocumentData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        if(value) {
          const q = query(
            collection(db, DBcollection),
            where(field, "==", value)
          );
          const querySnapshot = await getDocs(q);
          const newData = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            uid: doc.id,
          }));
          setData(newData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [DBcollection, field, value]);

  return { data, isLoading };
};

export default useGetData;
