import CartItem from "@/components/CartItem/CartItem";
import "./CartPage.scss";
import GetProductsArray from "@/api/GetProductsArray";

const CartPage = () => {
  const { data } = GetProductsArray("products", "productId");

  const sumWithInitial = data.reduce((acc, cur) => acc + cur.currentPrice, 0);
  return (
    <main id="content" role="main">
      <section className="cart-page">
        <div className="cart-page-layout">
          <div className="cart-page-layout-left">
            <div className="cart-page-product-arive-date">
              <span>ARRIVES IN 3-5 DAYS</span>
            </div>
            <section className="cart-page__main__summary">
              <div className="cart-summary-group">
                <ul>
                  {data &&
                    data.map((el, index) => (
                      <CartItem
                        key={index}
                        image={el.image}
                        title={el.title}
                        quantity={el.quantity}
                        previousPrice={el.previousPrice}
                        currentPrice={el.currentPrice}
                        uid={el.cartuid}
                      />
                    ))}
                </ul>
              </div>
            </section>
          </div>
          <article className="cart-page-summary">
            <span className="cart-page-title">Summary</span>
            <div className="cart-page-summary-variables-row">
              <span>Item(s)</span>
              <span className="cart-page-price-text">${sumWithInitial}</span>
            </div>
            <div className="cart-page-summary-variables-row">
              <span>Est. Delivery: </span>
              <span className="cart-page-price-text">$0.00</span>
            </div>
            <div className="cart-page-summary-total-row">
              <span>Est.Total: </span>
              <span className="cart-page-price-text">${sumWithInitial}</span>
            </div>
            <button className="checkout-btn">CHECKOUT</button>
          </article>
        </div>
      </section>
    </main>
  );
};

export default CartPage;
