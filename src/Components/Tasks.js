import React from "react";
import Sidebar from "./Sidebar";
import "./Main.css";
import { useState } from "react";

function Tasks() {
  const [products, setProducts] = useState([
    {
      id: 1,
      date: "10/10/2022",
      tname: "Home Page",
      assignedby: "Abinash",
      assignedto: "Chandan",
      TAT: "2-3",
      photo: null,
    },
    {
      id: 2,
      date: "10/10/2022",
      tname: "payment Gateway",
      assignedby: "Ceo",
      assignedto: "Abinash",
      TAT: "3-5",
      photo: null,
    },
    {
      id: 3,
      date: "10/10/2022",
      tname: "Login Page",
      assignedby: "Chandan",
      assignedto: "Pranav",
      TAT: "1-2",
      photo: null,
    },
  ]);

  const [newProduct, setNewProduct] = useState({
    id: "",
    date: "",
    tname: "",
    assignedby: "",
    assignedto: "",
    TAT: "",
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
      // Update User
      setProducts(
        products.map((p) => (p.id === newProduct.id ? newProduct : p))
      );
    } else {
      // Add New User
      setProducts([...products, { ...newProduct, id: Date.now() }]);
    }

    // Reset form and close modal
    resetForm();
  };

  // Function to reset form and close modal
  const resetForm = () => {
    setNewProduct({
      id: "",
      date: "",
      tname: "",
      assignedby: "",
      assignedto: "",
      TAT: "",
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
        <div className="add-btn">
          {/* Add User Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 "
          >
            {isEditing ? "Edit Task" : "Add Task"}
          </button>
        </div>
        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg add-table">
              <h2 className="text-lg font-bold text-white mb-4">
                {isEditing ? "Edit Task" : "Add New Task"}
              </h2>
              <form onSubmit={handleAddProduct}>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="date"
                    name="date"
                    placeholder="First Name"
                    value={newProduct.date}
                    onChange={handleChange}
                    className="p-2 bg-gray-800 rounded text-white"
                    required
                  />
                  <input
                    type="text"
                    name="tname"
                    placeholder="Last name"
                    value={newProduct.tname}
                    onChange={handleChange}
                    className="p-2 bg-gray-800 rounded text-white"
                    required
                  />
                  <input
                    type="text"
                    name="assignedby"
                    placeholder="Assigned By"
                    value={newProduct.assignedby}
                    onChange={handleChange}
                    className="p-2 bg-gray-800 rounded text-white"
                    required
                  />
                  <input
                    type="text"
                    name="assignedto"
                    placeholder="Assigned To"
                    value={newProduct.assignedto}
                    onChange={handleChange}
                    className="p-2 bg-gray-800 rounded text-white"
                    required
                  />
                  <input
                    type="text"
                    name="TAT"
                    placeholder="TAT In Days"
                    value={newProduct.TAT}
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
                    {isEditing ? "Update Task" : "Add Task"}
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
                <th className="py-3 px-6 text-left">Date</th>
                <th className="py-3 px-6 text-left">Task Name</th>
                <th className="py-3 px-6 text-center">Assigned By</th>
                <th className="py-3 px-6 text-center">Assigned To</th>
                <th className="py-3 px-6 text-center">TAT</th>
                <th className="py-3 px-6 text-center">Task</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="bg-gray-800 border-b border-gray-600"
                >
                  <td className="py-3 px-6">{product.date}</td>
                  <td className="py-3 px-6">{product.tname}</td>
                  <td className="py-3 px-6 text-center">{product.assignedby}</td>
                  <td className="py-3 px-6 text-center">{product.assignedto}</td>
                  <td className="py-3 px-6 text-center">{product.TAT}</td>
                  <td className="py-3 px-6 text-center">
                    {product.photo && (
                      <img
                        src={URL.createObjectURL(product.photo)}
                        alt={product.date}
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

export default Tasks;
