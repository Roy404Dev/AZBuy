import useGetImages from "@/hooks/useGetImages";
import "./CartItem.scss";
import removeItem from "@/api/RemoveItem";
import { useEffect, useState } from "react";

type CartItemProps = {
  image: string;
  title: string;
  quantity: number;
  previousPrice: number;
  currentPrice: number;
  uid: string;
};

const CartItem = ({
  image,
  title,
  quantity,
  previousPrice,
  currentPrice,
  uid,
}: CartItemProps) => {
  const [customQuantity, setCustomQuantity] = useState(1);

  useEffect(() => {
    setCustomQuantity(quantity);
  }, [quantity]);
  
  const downloadedImg = useGetImages(image);
  return (
    <div className="cartItem">
      <div className="cartItem-wrapper">
        <div className="cartItem-image-wrapper">
          {downloadedImg && (
            <img
              src={downloadedImg}
              className="cartItem-image"
              alt="cart item image"
            />
          )}
        </div>
        <article className="cartItem-description">
          <span className="cartItem-title">{title}</span>
          <div className="cartItem-description__details__modifier">
            <input
              type="number"
              value={customQuantity}
              onChange={(e) => setCustomQuantity(Number(e.target.value))}
            />
            <button
              className="removeCartItemBtn"
              onClick={() => removeItem(uid)}
            >
              Remove
            </button>
          </div>
        </article>
        <article className="cartItem-callouts">
          <span className="cartItem-status-stock">In Stock</span>
          <span className="cartItem-status-shipping">Ready to ship</span>
        </article>
        <article className="cartItem-pricing">
          <span className="elPreviousPrice">${previousPrice}</span>
          <span className="elCurrentPrice">${currentPrice}</span>
        </article>
      </div>
    </div>
  );
};

export default CartItem;
