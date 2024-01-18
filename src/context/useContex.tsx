import { DocumentData } from "firebase/firestore";
import React, { createContext, useState, ReactNode } from "react";

type ContextProviderProps = {
  children: ReactNode;
};

interface ValueTypes {
  filterToggle: boolean;
  setFilterToggle: React.Dispatch<React.SetStateAction<boolean>>;
  priceRange: number[];
  setPriceRange: React.Dispatch<React.SetStateAction<number[]>>;
  selectedFilter: string;
  setSelectedFilter: React.Dispatch<React.SetStateAction<string>>;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  toggleMenu: boolean;
  setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>;

  cartProducts: {
    imageUrl: string;
    title: string;
    brand: string;
    previousPrice: number;
    currentPrice: number;
    quantity: number;
  }[];
  setCartProducts: React.Dispatch<
    React.SetStateAction<
      {
        imageUrl: string;
        title: string;
        brand: string;
        previousPrice: number;
        currentPrice: number;
        quantity: number;
      }[]
    >
  >;
  DBproducts: DocumentData[];
  setDBProducts: React.Dispatch<React.SetStateAction<DocumentData[]>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const DataContext = createContext<ValueTypes | undefined>(undefined);

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [DBproducts, setDBProducts] = useState<DocumentData[]>([]);
  const [search, setSearch] = useState("");
  const [filterToggle, setFilterToggle] = useState<boolean>(false);
  const [priceRange, setPriceRange] = useState<number[]>([0, 99999]);
  const [selectedFilter, setSelectedFilter] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [cartProducts, setCartProducts] = useState<
    {
      imageUrl: string;
      title: string;
      brand: string;
      previousPrice: number;
      currentPrice: number;
      quantity: number;
    }[]
  >([]);

  return (
    <DataContext.Provider
      value={{
        setFilterToggle,
        filterToggle,
        priceRange,
        setPriceRange,
        selectedCategory,
        setSelectedCategory,
        selectedFilter,
        setSelectedFilter,
        toggleMenu,
        setToggleMenu,
        cartProducts,
        setCartProducts,
        DBproducts,
        setDBProducts,
        search,
        setSearch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
