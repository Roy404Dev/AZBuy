import { useState } from "react";
import "./SideBarFilter.scss";
import HolidayDeals from "@/components/HolidayDeals/HolidayDeals";
import useData from "@/hooks/useData";
import filterIcon from "../../ui/icons/filterIcon.svg";
import closeIcon from "../../ui/icons/interface/closeIcon.svg";
const SideBarFilter = () => {
  const [showApply, setShowApply] = useState(false);
  const { filterToggle, setFilterToggle } = useData();
  const { setPriceRange } = useData();

  const [customRange, setCustomRange] = useState({
    min: 0,
    max: 0,
  });

  const handleRangeValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value.length > 0 ? setShowApply(true) : setShowApply(false);
    setCustomRange({
      ...customRange,
      [e.target.name]: Number(e.target.value),
    });
  };

  const handleApplyClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setPriceRange([customRange.min, customRange.max]);
  };
  //TODO create filter custom component
  return (
    <aside
      className={`${filterToggle ? "sideBar-filter active" : "sideBar-filter"}`}
    >
      <div className="sideBar-filter-header">
        <span className="sideBar-filter-header-action-name">
          <img src={filterIcon} alt="filterIcon" />
          Filter
        </span>
        <button
          className="sideBar-filter-closeButton"
          onClick={() => setFilterToggle(false)}
        >
          <img src={closeIcon} alt="close icon" />
        </button>
      </div>
      <div className="sideBar-wrapper">
        <div className="sideBar-holiday-deals filter-element">
          <span className="filter-name">HOLIDAY DEALS</span>
          <HolidayDeals />
        </div>
        <div className="filter-price filter-element">
          <form className="filter-price-form">
            <span className="filter-name">PRICE</span>
            <div className="m-radio">
              <input
                type="radio"
                name="price-filter"
                id="under-25"
                onChange={() => setPriceRange([0, 25])}
              />
              <label htmlFor="under-25">Under $25</label>
            </div>
            <div className="m-radio">
              <input
                type="radio"
                name="price-filter"
                id="25-100"
                onChange={() => setPriceRange([25, 100])}
              />
              <label htmlFor="25-100">$25 - $100</label>
            </div>
            <div className="m-radio">
              <input
                type="radio"
                name="price-filter"
                id="100-500"
                onChange={() => setPriceRange([100, 500])}
              />
              <label htmlFor="100-500">$100 - $500</label>
            </div>
            <div className="m-radio">
              <input
                type="radio"
                name="price-filter"
                id="500-1000"
                onChange={() => setPriceRange([500, 1000])}
              />
              <label htmlFor="500-1000">$500 - $1000</label>
            </div>
            <div className="m-radio">
              <input
                type="radio"
                name="price-filter"
                id="over1000"
                onChange={() => setPriceRange([1000, 9999])}
              />
              <label htmlFor="over1000">Over $1000</label>
            </div>

            <div className="filter-price-range">
              <div className="filter-price-range--row">
                <input
                  type="number"
                  placeholder="min"
                  name="min"
                  min={0}
                  onChange={(e) => handleRangeValues(e)}
                />
                <span>to</span>
                <input
                  type="number"
                  placeholder="max"
                  name="max"
                  min={0}
                  onChange={(e) => handleRangeValues(e)}
                />
              </div>
              {showApply ? (
                <button
                  className={`filter-price-range-apply`}
                  onClick={(event) => handleApplyClick(event)}
                >
                  Apply Price Range
                </button>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </aside>
  );
};

export default SideBarFilter;
