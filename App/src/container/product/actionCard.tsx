import React, { useState } from "react";
import Button from "../../components/button";
import Card from "../../components/card";
import LabeledInput from "../../components/labeledInput";
import {
  createProduct,
  updateProduct,
  deleteProduct,
} from "../../service/product";

interface IProps {
  productId: number | null;
}

const ProductActionCard = ({ productId }: IProps) => {
  const [productName, setProductName] = useState("");
  const [actionError, setActionError] = useState("");

  const handleCreateProduct = async () => {
    const { data, err } = await createProduct({ productName });
    if (!err) {
      alert(data);
    }
    setActionError(err);
  };

  const handleUpdateProduct = async () => {
    const { data, err } = await updateProduct({ productName, productId });
    if (!err) {
      alert(data);
    }
    setActionError(err);
  };

  const handleDeleteProduct = async () => {
    const { data, err } = await deleteProduct(productId);
    if (!err) {
      alert(data);
    }
    setActionError(err);
  };

  return (
    <Card title="Prodcut Action Card" style={{ width: 400 }}>
      <LabeledInput
        name="product-name"
        label="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <div>
        <Button disabled={!!productId} onClick={handleCreateProduct}>
          Create
        </Button>
        <Button disabled={!productId} onClick={handleUpdateProduct}>
          Update
        </Button>
        <Button disabled={!productId} onClick={handleDeleteProduct}>
          Delete
        </Button>
      </div>
      {actionError && <div style={{ color: "orangered" }}>{actionError}</div>}
    </Card>
  );
};

export default ProductActionCard;
