import filterIcon from "../../ui/icons/filterIcon.svg";
import downChevron from "../../ui/icons/arrows/chevron-down.svg";
import upChevron from "../../ui/icons/arrows/chevron-up.svg";
import "./ShopActions.scss";
import useData from "@/hooks/useData";
import { sortValues } from "@/lib/selectValues";
import SelectBox from "../Shadcn/SelectBox";
import { useState } from "react";

const ShopActions = () => {
  const { filterToggle, setFilterToggle } = useData();
  const [_value, setValue] = useState("");
  return (
    <div className="Shop-actions">
      <div className="shopListActions">
        <div className="shopListActions__toggle">
          <button
            className="toggle-filter"
            onClick={() => setFilterToggle(!filterToggle)}
          >
            <img src={filterIcon} alt="filter action" />
            <span>Filter</span>
            {filterToggle ? (
              <img src={upChevron} alt="arrow up" />
            ) : (
              <img src={downChevron} alt="arrow down" />
            )}
          </button>
        </div>
        <div className="shop-actions-sort">
          <SelectBox values={sortValues} setValues={setValue} placeholder="Recommended" />
        </div>
      </div>
    </div>
  );
};

export default ShopActions;
