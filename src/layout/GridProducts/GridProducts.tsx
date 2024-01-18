import ProductCard from "@/components/ProductCard/ProductCard";
import useData from "@/hooks/useData";
import { DocumentData } from "firebase/firestore";

type Product = {
  uid: string;
  title: string;
  image: string;
  brand: string;
  instock: boolean;
  reviews: number;
  stars: number;
  currentPrice: number;
  previousPrice: number;
  productId: string;
};

type FuncProps = {
  func: {
    products: DocumentData[] | Product[];
    isLoading: boolean;
  };
};

const GridProducts = ({ func }: FuncProps) => {
  const { products } = func;
  const { DBproducts } = useData();

  const isSearched = DBproducts.length > 0 ? DBproducts : products;

  return (
    <div className="grid-products">
      {isSearched &&
        isSearched.map((product) => (
          <ProductCard
            title={product.title}
            image={product.image}
            brand={product.brand}
            instock={product.instock}
            reviews={product.reviews}
            stars={product.stars}
            currentPrice={product.currentPrice}
            previousPrice={product.previousPrice}
            productId={product.productId}
            key={product.uid}
          />
        ))}
    </div>
  );
};

export default GridProducts;
