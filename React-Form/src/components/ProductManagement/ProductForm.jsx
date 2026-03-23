import React from "react";

const ProductForm = ({handleAddProduct}) => {
  const handleProductSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;

    const newProduct = {
      name,
      price,
      quantity,
    };

    handleAddProduct(newProduct)
  };
  return (
    <div>
      <h3>Add a product</h3>
      <form onSubmit={handleProductSubmit}>
        <input type="text" name="name" placeholder="Product name" />
        <br />
        <input type="text" name="price" placeholder="Product price" />
        <br />
        <input type="text" name="quantity" placeholder="product quantity" />

        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ProductForm;
