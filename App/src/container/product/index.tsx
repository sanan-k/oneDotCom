import React, { useState } from "react";
import Button from "../../components/button";
import ProductActionCard from "./actionCard";
import { getProducts } from "../../service/product";
import LabeledInput from "../../components/labeledInput";

const productsCntnrStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  padding: 10,
  width: "100%",
  height: "100%",
};

const productDetailCntnrStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  flexDirection: "column",

  width: "60%",
  height: "100%",
};

const Products = () => {
  const [product, setProduct] = useState("");
  const [productId, setProdcutId] = useState(null);

  const handleFetchProducts = async () => {
    const { err, data } = await getProducts();
    if (err) {
      alert(err);
    } else {
      setProduct(data);
    }
  };

  return (
    <div style={productsCntnrStyle}>
      <div style={productDetailCntnrStyle}>
        <h3>Product Details</h3>
        <div style={{ overflow: "hidden", overflowY: "auto" }}>
          {product && (
            <div>
              <LabeledInput
                name="select-product"
                label="Select"
                type="checkbox"
                value={productId}
                onChange={(e) => {
                  if (e.target.checked) {
                    setProdcutId(1);
                  } else {
                    setProdcutId(null);
                  }
                }}
              />
              {product}
            </div>
          )}
        </div>
        <hr />
        <Button onClick={handleFetchProducts}>Reterieve Products</Button>
      </div>
      <ProductActionCard productId={productId} />
    </div>
  );
};

export default Products;
