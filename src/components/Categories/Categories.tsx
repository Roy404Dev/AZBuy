import "./Categories.scss";
import { Link } from "react-router-dom";
import useData from "@/hooks/useData";
import GetData from "@/api/GetData";
const Categories = () => {
  const { toggleMenu, setToggleMenu } = useData();
  const {data} = GetData("categories");
  return (
    <ul className="header-categories">
      {data &&
        data.map((category, index) => (
          <li
            className="header-category-element"
            value={category.value}
            key={index}
            style={{ color: "black" }}
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <Link to={`categories/${category.category}`}>{category.title}</Link>
          </li>
        ))}
    </ul>
  );
};

export default Categories;
