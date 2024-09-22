import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "./Main.css";

function Product() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Apple iMac 27"',
      category: "Desktop PC",
      stock: 95,
      salesDay: 1.47,
      salesMonth: 0.47,
      rating: 5,
      sales: "1.6M",
      revenue: "$3.2M",
      lastUpdate: "Today",
      photo: null,
    },
    {
      id: 2,
      name: 'Apple iMac 20"',
      category: "Desktop PC",
      stock: 108,
      salesDay: 1.15,
      salesMonth: 0.32,
      rating: 5,
      sales: "6M",
      revenue: "$785K",
      lastUpdate: "Today",
      photo: null,
    },
    {
      id: 3,
      name: "Apple iPhone 14",
      category: "Phone",
      stock: 24,
      salesDay: 1.0,
      salesMonth: 0.95,
      rating: 4,
      sales: "1.2M",
      revenue: "$3.2M",
      lastUpdate: "Today",
      photo: null,
    },
  ]);

  const [newProduct, setNewProduct] = useState({
    id: "",
    name: "",
    category: "",
    stock: "",
    salesDay: "",
    salesMonth: "",
    rating: "",
    sales: "",
    revenue: "",
    lastUpdate: "",
    photo: null, // For image
  });

  const [isModalOpen, setIsModalOpen] = useState(false); // For controlling the modal
  const [isEditing, setIsEditing] = useState(false); // For handling edit state

  // Function to handle the form change
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setNewProduct({ ...newProduct, [name]: files[0] }); // Handle file upload
    } else {
      setNewProduct({ ...newProduct, [name]: value });
    }
  };

  // Function to handle adding a product
  const handleAddProduct = (e) => {
    e.preventDefault();

    if (isEditing) {
      // Update product
      setProducts(products.map((p) => (p.id === newProduct.id ? newProduct : p)));
    } else {
      // Add new product
      setProducts([...products, { ...newProduct, id: Date.now() }]);
    }

    // Reset form and close modal
    resetForm();
  };

  // Function to reset form and close modal
  const resetForm = () => {
    setNewProduct({
      id: "",
      name: "",
      category: "",
      stock: "",
      salesDay: "",
      salesMonth: "",
      rating: "",
      sales: "",
      revenue: "",
      lastUpdate: "",
      photo: null,
    });
    setIsModalOpen(false);
    setIsEditing(false);
  };

  // Handle Edit Button Click
  const handleEdit = (product) => {
    setNewProduct(product); // Pre-fill form with product data
    setIsEditing(true);
    setIsModalOpen(true); // Open the modal
  };

  return (
    <div className="right-window">
      <Sidebar />
      <div className="container mx-auto p-4 tables">
        <div className= "add-btn">
          {/* Add Product Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 "
          >
            {isEditing ? "Edit Product" : "Add Product"}
          </button>
        </div>
        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg add-table">
              <h2 className="text-lg font-bold text-white mb-4">
                {isEditing ? "Edit Product" : "Add New Product"}
              </h2>
              <form onSubmit={handleAddProduct}>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Product Name"
                    value={newProduct.name}
                    onChange={handleChange}
                    className="p-2 bg-gray-800 rounded text-white"
                    required
                  />
                  <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={newProduct.category}
                    onChange={handleChange}
                    className="p-2 bg-gray-800 rounded text-white"
                    required
                  />
                  <input
                    type="number"
                    name="stock"
                    placeholder="Stock"
                    value={newProduct.stock}
                    onChange={handleChange}
                    className="p-2 bg-gray-800 rounded text-white"
                    required
                  />
                  <input
                    type="number"
                    step="0.01"
                    name="salesDay"
                    placeholder="Sales/Day"
                    value={newProduct.salesDay}
                    onChange={handleChange}
                    className="p-2 bg-gray-800 rounded text-white"
                    required
                  />
                  <input
                    type="number"
                    step="0.01"
                    name="salesMonth"
                    placeholder="Sales/Month"
                    value={newProduct.salesMonth}
                    onChange={handleChange}
                    className="p-2 bg-gray-800 rounded text-white"
                    required
                  />
                  <input
                    type="number"
                    name="rating"
                    placeholder="Rating (out of 5)"
                    value={newProduct.rating}
                    onChange={handleChange}
                    className="p-2 bg-gray-800 rounded text-white"
                    required
                  />
                  <input
                    type="text"
                    name="sales"
                    placeholder="Sales (e.g., 1.2M)"
                    value={newProduct.sales}
                    onChange={handleChange}
                    className="p-2 bg-gray-800 rounded text-white"
                    required
                  />
                  <input
                    type="text"
                    name="revenue"
                    placeholder="Revenue (e.g., $3.2M)"
                    value={newProduct.revenue}
                    onChange={handleChange}
                    className="p-2 bg-gray-800 rounded text-white"
                    required
                  />
                  <input
                    type="text"
                    name="lastUpdate"
                    placeholder="Last Update"
                    value={newProduct.lastUpdate}
                    onChange={handleChange}
                    className="p-2 bg-gray-800 rounded text-white"
                    required
                  />

                  {/* Image Upload */}
                  <input
                    type="file"
                    name="photo"
                    onChange={handleChange}
                    className="p-2 bg-gray-800 rounded text-white"
                    accept="image/*"
                  />
                  {newProduct.photo && (
                    <img
                      src={URL.createObjectURL(newProduct.photo)}
                      alt="Product Preview"
                      className="mt-2 max-h-32"
                    />
                  )}
                </div>
                <div className="flex justify-end mt-4">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  >
                    {isEditing ? "Update Product" : "Add Product"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Product Table */}
        <div className="overflow-x-auto table-length">
          <table className="min-w-full bg-gray-800 text-white rounded-lg shadow-lg">
            <thead className="bg-gray-700">
              <tr>
                <th className="py-3 px-6 text-left">Product Name</th>
                <th className="py-3 px-6 text-left">Category</th>
                <th className="py-3 px-6 text-center">Stock</th>
                <th className="py-3 px-6 text-center">Sales/Day</th>
                <th className="py-3 px-6 text-center">Sales/Month</th>
                <th className="py-3 px-6 text-center">Rating</th>
                <th className="py-3 px-6 text-center">Sales</th>
                <th className="py-3 px-6 text-center">Revenue</th>
                <th className="py-3 px-6 text-center">Last Update</th>
                <th className="py-3 px-6 text-center">Product</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="bg-gray-800 border-b border-gray-600"
                >
                  <td className="py-3 px-6">{product.name}</td>
                  <td className="py-3 px-6">{product.category}</td>
                  <td className="py-3 px-6 text-center">{product.stock}</td>
                  <td className="py-3 px-6 text-center">{product.salesDay}</td>
                  <td className="py-3 px-6 text-center">
                    {product.salesMonth}
                  </td>
                  <td className="py-3 px-6 text-center">{product.rating} ⭐</td>
                  <td className="py-3 px-6 text-center">{product.sales}</td>
                  <td className="py-3 px-6 text-center">{product.revenue}</td>
                  <td className="py-3 px-6 text-center">
                    {product.lastUpdate}
                  </td>
                  <td className="py-3 px-6 text-center">
                    {product.photo && (
                      <img
                        src={URL.createObjectURL(product.photo)}
                        alt={product.name}
                        className="max-h-20"
                      />
                    )}
                  </td>
                  <td className="py-3 px-6 text-center">
                    <button
                      className="text-blue-500 hover:text-blue-700 mr-2"
                      onClick={() => handleEdit(product)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() =>
                        setProducts(products.filter((p) => p.id !== product.id))
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Product;
