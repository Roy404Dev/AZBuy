import { db } from "@/config/firebase";
import {
  collection,
  getDocs,
  DocumentData,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";

const useGetFromCategory = (
  DBcollection: string,
  category: string,
  priceRange?: number[],
) => {
  const [products, setProducts] = useState<DocumentData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    const q = query(
      collection(db, DBcollection),
      where("category", "==", category),
      where("currentPrice", ">", priceRange ? priceRange[0] : 0),
      where("currentPrice", "<", priceRange ? priceRange[1] : 99999)
    );
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          uid: doc.id,
        }));
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [category, priceRange]);
  return { products, isLoading };
};

export default useGetFromCategory;
