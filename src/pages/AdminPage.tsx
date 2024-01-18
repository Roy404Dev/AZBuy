import { db, storage } from "../config/firebase";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable } from "firebase/storage";
import React, { useState } from "react";
import "./style/AdminPage.scss";
import { v4 } from "uuid";
import SelectBox from "@/components/Shadcn/SelectBox";
import { categoriesValues } from "../lib/selectValues";
import ReactSpringComponent from "@/components/ReactSpring/ReactSpringComponent";
type valueTypes = {
  progresspercent: number;
  selectedFile: File | undefined;
  title: string;
  brand: string;
  imgUrl: string;
  instock: boolean;
  reviews: number;
  stars: number;
  currentPrice: number;
  previousPrice: number;
  productId: string;
  category: string;
};

const AdminPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [values, setValues] = useState<valueTypes>({
    progresspercent: 0,
    selectedFile: undefined,
    title: "",
    brand: "",
    imgUrl: "",
    instock: false,
    reviews: 0,
    stars: 0,
    currentPrice: 0,
    previousPrice: 0,
    productId: "",
    category: "",
  });

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    setValues({ ...values, [e.target.name]: file });
  };

  const onButtonClick = async () => {
    if (values.selectedFile) {
      const storageRef = ref(
        storage,
        `products/images/${values.selectedFile!.name}`
      );
      const uploadTask = uploadBytesResumable(storageRef, values.selectedFile!);
      setValues({
        ...values,
        imgUrl: `products/images/${values.selectedFile!.name}`,
      });
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setValues({ ...values, progresspercent: progress });
        },
        (error) => {
          alert(error);
        }
      );
      await setDoc(doc(db, "products", `product${v4()}`), {
        title: values.title,
        image: `products/images/${values.selectedFile!.name}`,
        brand: values.brand,
        instock: values.instock,
        reviews: values.reviews,
        stars: values.stars,
        currentPrice: values.currentPrice,
        previousPrice: values.previousPrice,
        category: selectedCategory,
        productId: v4()
      });
    } else {
      alert("Please select a file before clicking the button.");
    }
  };

  return (
    <div className="wrapper">
      <form className="uploadProduct">
        <input
          type="text"
          className="product-input"
          placeholder="title"
          name="title"
          onChange={(e) =>
            setValues({ ...values, [e.target.name]: e.target.value })
          }
        />
        <input
          type="file"
          placeholder="image"
          className="product-input"
          name="selectedFile"
          onChange={(e) => onFileChange(e)}
        />
        <input
          type="text"
          className="product-input"
          placeholder="brand"
          name="brand"
          onChange={(e) =>
            setValues({ ...values, [e.target.name]: e.target.value })
          }
        />
        <input
          type="checkbox"
          className="product-input"
          placeholder="instock"
          name="instock"
          onChange={(e) =>
            setValues({ ...values, [e.target.name]: e.target.value })
          }
        />
        <input
          type="number"
          className="product-input"
          placeholder="reviews"
          name="reviews"
          onChange={(e) =>
            setValues({ ...values, [e.target.name]: Number(e.target.value) })
          }
        />
        <input
          type="number"
          className="product-input"
          placeholder="stars"
          name="stars"
          onChange={(e) =>
            setValues({ ...values, [e.target.name]: Number(e.target.value) })
          }
        />
        <input
          type="number"
          className="product-input"
          placeholder="currentPrice"
          name="currentPrice"
          onChange={(e) =>
            setValues({ ...values, [e.target.name]: Number(e.target.value) })
          }
        />
        <input
          type="number"
          className="product-input"
          placeholder="previousPrice"
          name="previousPrice"
          onChange={(e) =>
            setValues({ ...values, [e.target.name]: Number(e.target.value) })
          }
        />
        <SelectBox
          values={categoriesValues}
          setValues={setSelectedCategory}
          placeholder="Select Categories"
        />
      </form>

      <button className="send-btn" onClick={onButtonClick}>
        send
      </button>
      <ReactSpringComponent />
    </div>
  );
};

export default AdminPage;
