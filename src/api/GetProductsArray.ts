import { db } from "@/config/firebase";
import { useAuth0 } from "@auth0/auth0-react";
import {
  collection,
  getDocs,
  DocumentData,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";

interface FetchResult {
  data: DocumentData[];
  isLoading: boolean;
}

const GetProductsArray = (
  DBcollection: string,
  field: string
): FetchResult => {
  const [data, setData] = useState<DocumentData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { user } = useAuth0();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const querys = query(
          collection(db, "cart"),
          where("userId", "==", user?.sub)
        );

        const querySnapshot2 = await getDocs(querys);
        const cartData = querySnapshot2.docs.map((doc) => ({
          ...doc.data(),
          uid: doc.id,
          productId: doc.data().productId, // Add this line
          quantity: doc.data().quantity,   // Add this line
        }));
        const q = query(
          collection(db, DBcollection),
          where(field, "in", cartData.map(a => a.productId))
        );
        const querySnapshot = await getDocs(q);
        const newData = querySnapshot.docs.map((doc, index) => ({
          ...doc.data(),
          uid: doc.id,
          cartuid: cartData[index].uid,
          quantity: cartData[index].quantity,
        }));
        setData(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [user]);

  return { data, isLoading };
};

export default GetProductsArray;
