import axios from "axios";

export const ProductApi = {
  getProduct: async () => {
    try {
      const res = await axios.get(
        "https://1448458b07a71e46.mokky.dev/products"
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
};
