import searchIcon from "../../ui/icons/searchIcon.svg";
import "./SearchInput.scss";
import useData from "@/hooks/useData";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/config/firebase";
import chevronRight from "../../ui/icons/arrows/chevron-right.svg";
const SearchInput = () => {
  const { priceRange } = useData();

  const { setDBProducts, search, setSearch } = useData();
  const q = query(
    collection(db, "products"),
    where("currentPrice", ">", priceRange[0]),
    where("currentPrice", "<", priceRange[1]),
    where("title", ">=", search),
    where("title", "<=", search + "\uf8ff")
  );
  const onSearch = async () => {
    try {
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        uid: doc.id,
      }));
      setDBProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="search-input">
      <div className="search-input-wrapper" tabIndex={0}>
        <img id="search-icon-img" src={searchIcon} alt="search icon" />
        <input
          type="text"
          value={search}
          placeholder="Search. Explore. Discover"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => onSearch()}><img className="submitArrowBtn" src={chevronRight}/></button>
      </div>
    </div>
  );
};

export default SearchInput;
