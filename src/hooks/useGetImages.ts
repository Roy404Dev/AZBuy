import { storage } from "@/config/firebase";
import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";

const useGetImages = (image: string) => {
  const [downloadedImg, setDownloadedImg] = useState<string | null>(null);

  useEffect(() => {
    const getImageUrl = async () => {
      try {
        const imageRef = ref(storage, image);
        const url = await getDownloadURL(imageRef);
        setDownloadedImg(url);
      } catch (error) {
        console.error("Error getting download URL: ", error);
        setDownloadedImg(null); // Set to null in case of an error
      }
    };

    getImageUrl();
  }, [image]);

  return downloadedImg;
};
export default useGetImages;
