import {  useState } from "react";
import { cartData } from "../constants/cartData";

export const ShoppingCart = () => {
  const [productData, setProductData] = useState(cartData);
  const handleclick = (increment, id) => {
    if (increment) {
      const updatedProductData = productData?.map((ele) =>
        ele?.id == id ? { ...ele, quantity: +ele?.quantity + 1 } : ele
      );
      setProductData(updatedProductData);
    } else {
      const updatedProductData = productData?.map((ele) =>
        ele?.id == id ? { ...ele, quantity: +ele?.quantity - 1 } : ele
      );
      setProductData(updatedProductData);
    }
  };
  const removeProduct = (id) => {
    setProductData(productData?.filter((ele) => ele?.id != id));
  };
  const total = productData?.reduce(
    (acc, ele) => acc + ele?.productPrice * ele?.quantity,
    0
  );
  return (
    <>
      <div>
        <h1>Shopping Cart</h1>
        <div className="flex flex-col gap-3">
          {productData?.map((ele, ind) => (
            <ShoppingCard
              key={ind}
              {...ele}
              handleclick={handleclick}
              handleRemove={removeProduct}
            />
          ))}
        </div>
        <h3>Total Amount: {total}</h3>
      </div>
    </>
  );
};
const ShoppingCard = ({
  productTitle = "",
  productPrice = 0,
  quantity = 1,
  handleclick,
  id,
  handleRemove,
}) => {
  return (
    <>
      <div className="border p-2 flex flex-col gap-1">
        <p>{productTitle}</p>
        <p>Rs. {productPrice}</p>
        <div>
          <button onClick={() => handleclick(true, id)} className="border p-2">
            +
          </button>
          <span>{quantity}</span>
          <button onClick={() => handleclick(false, id)} className="border p-2">
            -
          </button>
        </div>
        <div>
          <button onClick={() => handleRemove(id)} className="border p-1">
            Remove
          </button>
        </div>
      </div>
    </>
  );
};
