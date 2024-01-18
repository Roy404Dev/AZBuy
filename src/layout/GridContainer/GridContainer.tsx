import ShopActions from "../../components/ShopActions/ShopActions";
import "./GridContainer.scss";
import SideBarFilter from "../SideBarFilter/SideBarFilter";
import useCollections from "../../hooks/useCollections";
import useData from "@/hooks/useData";
import SelectBox from "@/components/Shadcn/SelectBox";
import { sortValues } from "../../lib/selectValues";
import { useParams } from "react-router-dom";
import useGetFromCategory from "@/hooks/useGetFromCategory";
import GridProducts from "../GridProducts/GridProducts";
import PaginationCustom from "@/components/Shadcn/Pagination/PaginationCustom";
import { useState } from "react";
const GridContainer = () => {
  let { category } = useParams();
  const [_sortby, setSortby] = useState("");
  const { priceRange } = useData();
  const queryFunc =
    category !== undefined
      ? useGetFromCategory("products", category, priceRange)
      : useCollections("products", priceRange || [0, 99999]);

  return (
    <div className="grid-container">
      <ShopActions />
      <div className="grid-container-row">
        <div className="grid-container-main-col">
          <div className="shopListActions-big-screen">
            <span>Sort items by:</span>
            <SelectBox
              values={sortValues}
              setValues={setSortby}
              placeholder="Recommended"
            />
          </div>
          <GridProducts func={queryFunc} />
          <PaginationCustom />
        </div>
        <SideBarFilter />
      </div>
    </div>
  );
};

export default GridContainer;
