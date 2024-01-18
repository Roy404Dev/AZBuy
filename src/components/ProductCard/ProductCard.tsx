type productProps = {
  title: string;
  image: string;
  brand: string;
  instock: boolean;
  reviews: number;
  stars: number;
  currentPrice: number;
  previousPrice?: number;
  productId: string;
};

import "./ProductCard.scss";
import useGetImages from "@/hooks/useGetImages";
import { useAuth0 } from "@auth0/auth0-react";
import AddItem from "@/api/AddItem";

const ProductCard = ({
  title,
  image,
  brand,
  instock,
  // reviews,
  stars,
  currentPrice,
  previousPrice,
  productId,
}: productProps) => {
  const downloadedImg = useGetImages(image);
  const starCount = 5;
  const { user } = useAuth0();
  const addProductToCart = () => {
    AddItem("cart", { productId: productId, userId: user?.sub });
  };
  return (
    <div className="product-card">
      <div className="product-card-wrapper">
        <div className="product-card__top">
          {downloadedImg && <img src={downloadedImg} alt="product image" />}
          <button className="add-to-cart-btn" onClick={addProductToCart}>
            ADD TO CART
          </button>
        </div>
        <div className="product-card__bottom">
          <div className="product-card__bottom--top">
            <span className="product-card-name">{title}</span>
            <span className="product-card-company-name">{brand}</span>
            {instock ? <div className="inStockBadge">In-Stock</div> : null}
          </div>
          <div className="product-card__bottom--bottom">
            <div className="product-card-rating">
              {Array.from({ length: starCount }, (_, index) => (
                <div className="product-card-rating__stars" key={index}>
                  <img
                    style={{ height: "1em" }}
                    src={`src/ui/icons/${
                      index < stars ? "rateStarBlackIcon" : "rateStarGreyIcon"
                    }.svg`}
                    alt=""
                  />
                </div>
              ))}
            </div>
            <div className="product-card-price-row">
              <span className={`product-card-price product-card-price--red`}>
                ${currentPrice}
              </span>
              {previousPrice && (
                <span
                  className={`product-card-price ${
                    previousPrice && "product-card-price-previous"
                  }`}
                >
                  ${previousPrice}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
