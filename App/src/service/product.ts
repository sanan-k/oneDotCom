import axios, { parseError } from "./base";

const basePath = "/products";

export const getProducts = async () => {
  try {
    const { data } = await axios.get(basePath);
    return { data, err: "" };
  } catch (err) {
    return parseError(err);
  }
};

export const createProduct = async (product: object) => {
  try {
    const { data } = await axios.post(basePath, product);
    return { data, err: "" };
  } catch (err) {
    return parseError(err);
  }
};

export const updateProduct = async (product: object) => {
  try {
    const { data } = await axios.put(basePath, product);
    return { data, err: "" };
  } catch (err) {
    return parseError(err);
  }
};

export const deleteProduct = async (productId: number) => {
  try {
    const { data } = await axios.delete(basePath);
    return { data, err: "" };
  } catch (err) {
    return parseError(err);
  }
};
