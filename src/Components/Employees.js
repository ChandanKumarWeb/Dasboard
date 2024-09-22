import React from 'react'
import Sidebar from "./Sidebar";
import "./Main.css";
import { useState } from "react";

function Employees() {
    const [products, setProducts] = useState([
        {
          id: 1,
          fname: 'Chandan Kumar',
          age: "22",
          email: "chandan42kumar55@gmail.com",
          phone: "8257060642",
          gender: "Male",
          experience:"2",
          specialized: " front end",
          photo: null,
        },
        {
          id: 2,
          fname: 'Abinash Sonar',
          age: "25",
          email:  "abinashsonar@gmail.com",
          phone:"8465163164",
          gender:"Male",
          experience:"2",
          specialized: "full stack",
          photo: null,
        },
        {
          id: 3,
          fname: 'Yash',
          age:"22",
          email: "yash@gmail.com",
          phone:"8546215870",
          gender:"Female",
          experience:"2",
          specialized: "Physiotherepist",
          photo: null,
        },
      ]);
    
      const [newProduct, setNewProduct] = useState({
        id: "",
        fname: "",
        age: "",
        email: "",
        phone: "",
        gender: "",
        experience:"",
        specialized: "",
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
          setProducts(products.map((p) => (p.id === newProduct.id ? newProduct : p)));
        } else {
          // Add New Employee
          setProducts([...products, { ...newProduct, id: Date.now() }]);
        }
    
        // Reset form and close modal
        resetForm();
      };
    
      // Function to reset form and close modal
      const resetForm = () => {
        setNewProduct({
         id: "",
        fname: "",
        age: "",
        email: "",
        phone: "",
        gender: "",
        experience:"",
        specialized: "",
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
          {/* Add User Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 "
          >
            {isEditing ? "Edit Employee" : "Add Employee"}
          </button>
        </div>
        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg add-table">
              <h2 className="text-lg font-bold text-white mb-4">
                {isEditing ? "Edit Employee" : "Add New Employee"}
              </h2>
              <form onSubmit={handleAddProduct}>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="fname"
                    placeholder="First Name"
                    value={newProduct.fname}
                    onChange={handleChange}
                    className="p-2 bg-gray-800 rounded text-white"
                    required
                  />
                  <input
                    type="number"
                    name="age"
                    step="2"
                    placeholder="Age"
                    value={newProduct.age}
                    onChange={handleChange}
                    className="p-2 bg-gray-800 rounded text-white"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={newProduct.email}
                    onChange={handleChange}
                    className="p-2 bg-gray-800 rounded text-white"
                    required
                  />
                  <input
                    type="number"
                    step="10"
                    name="phone"
                    placeholder="Phone Number"
                    value={newProduct.phone}
                    onChange={handleChange}
                    className="p-2 bg-gray-800 rounded text-white"
                    required
                  />
                  <input
                    type="text"
                    name="gender"
                    placeholder="Your Gender"
                    value={newProduct.gender}
                    onChange={handleChange}
                    className="p-2 bg-gray-800 rounded text-white"
                    required
                  />
                  <input
                    type="number"
                    name="experience"
                    step="2"
                    placeholder="Experience"
                    value={newProduct.experience}
                    onChange={handleChange}
                    className="p-2 bg-gray-800 rounded text-white"
                    required
                  />
                  <input
                    type="text"
                    name="specialized"
                    placeholder="Specialized"
                    value={newProduct.specialized}
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
                    {isEditing ? "Update User" : "Add User"}
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
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Age</th>
                <th className="py-3 px-6 text-center">Email</th>
                <th className="py-3 px-6 text-center">Phone No</th>
                <th className="py-3 px-6 text-center">Gender</th>
                <th className="py-3 px-6 text-left">Experience</th>
                <th className="py-3 px-6 text-center">Specialized</th>
                <th className="py-3 px-6 text-center">Employee</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="bg-gray-800 border-b border-gray-600"
                >
                  <td className="py-3 px-6">{product.fname}</td>
                  <td className="py-3 px-6">{product.age}</td>
                  <td className="py-3 px-6 text-center">{product.email}</td>
                  <td className="py-3 px-6 text-center">{product.phone}</td>
                  <td className="py-3 px-6 text-center">
                    {product.gender}
                  </td>
                  <td className="py-3 px-6 text-center">{product.experience}</td>
                  <td className="py-3 px-6 text-center">{product.specialized}</td>
                  <td className="py-3 px-6 text-center">
                    {product.photo && (
                      <img
                        src={URL.createObjectURL(product.photo)}
                        alt={product.fname}
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

export default Employees
