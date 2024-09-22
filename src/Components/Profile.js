import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "./Main.css";

function Profile() {
    const [products, setProducts] = useState([
        {
          id: 1,
          Cname: 'Wipro',
          Caddress: "Delhi",
          Cnumber: 8542063015,
          CompanyWorksOn: "product based",
          CompanyEstablishment: "2001",
          Nemployee: "500000",
          AboutCompany: "It is a product based company",
          photo: null,
        },
        {
          id: 2,
          Cname: 'TCS',
          Caddress: "Gurgaon",
          Cnumber: 9463587260,
          CompanyWorksOn: "Service based",
          CompanyEstablishment: "1998",
          Nemployee: 800000,
          AboutCompany: "It is a service based company",
          photo: null,
        },
        {
          id: 3,
          Cname: "Infosys",
          Caddress: "Noida",
          Cnumber: 8103547210,
          CompanyWorksOn: "Product/Service based",
          CompanyEstablishment: "1996",
          Nemployee: 900000,
          AboutCompany: "It works on both Product based and Service based work",
          photo: null,
        },
      ]);
    
      const [newProduct, setNewProduct] = useState({
        id: "",
        Cname: "",
        Caddress: "",
        Cnumber: "",
        CompanyWorksOn: "",
        CompanyEstablishment: "",
        Nemployee: "",
        AboutCompany: "",
        photo: null, // For image
      });
    
      const [isModalOpen, setIsModalOpen] = useState(false); // For controlling the modal
      const [isEditing, setIsEditing] = useState(false); // For handling edit state
    
      // Function to handle the form change
      const handleChange = (e) => {
        const { Cname, value, type, files } = e.target;
        if (type === "file") {
          setNewProduct({ ...newProduct, [Cname]: files[0] }); // Handle file upload
        } else {
          setNewProduct({ ...newProduct, [Cname]: value });
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
          Cname: "",
          Caddress: "",
          Cnumber: "",
          CompanyWorksOn: "",
          CompanyEstablishment: "",
          Nemployee: "",
          AboutCompany: "",
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
                {isEditing ? "Edit Company" : "Add Company"}
              </button>
            </div>
            {/* Modal */}
            {isModalOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-gray-900 p-6 rounded-lg shadow-lg add-table">
                  <h2 className="text-lg font-bold text-white mb-4">
                    {isEditing ? "Edit Company" : "Add New Company"}
                  </h2>
                  <form onSubmit={handleAddProduct}>
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="Company name"
                        placeholder="Company Name"
                        value={newProduct.Cname}
                        onChange={handleChange}
                        className="p-2 bg-gray-800 rounded text-white"
                        required
                      />
                      <input
                        type="text"
                        name="Company address"
                        placeholder="Company Address"
                        value={newProduct.Caddress}
                        onChange={handleChange}
                        className="p-2 bg-gray-800 rounded text-white"
                        required
                      />
                      <input
                        type="number"
                        name="Company number"
                        placeholder="Company number"
                        value={newProduct.Cnumber}
                        onChange={handleChange}
                        className="p-2 bg-gray-800 rounded text-white"
                        required
                      />
                      <input
                        type="text"
                        name="Company Works On"
                        placeholder="Company Works On"
                        value={newProduct.CompanyWorksOn}
                        onChange={handleChange}
                        className="p-2 bg-gray-800 rounded text-white"
                        required
                      />
                      <input
                        type="number"
                        name="Company Establishment"
                        placeholder="Company Establishment"
                        value={newProduct.CompanyEstablishment}
                        onChange={handleChange}
                        className="p-2 bg-gray-800 rounded text-white"
                        required
                      />
                      <input
                        type="number"
                        name="N0 of employee"
                        placeholder="No. of Employee"
                        value={newProduct.Nemployee}
                        onChange={handleChange}
                        className="p-2 bg-gray-800 rounded text-white"
                        required
                      />
                      <input
                        type="message"
                        name="About Company"
                        placeholder="About Company"
                        value={newProduct.AboutCompany}
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
                        {isEditing ? "Update Company" : "Add Company"}
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
                    <th className="py-3 px-6 text-left">Company Name</th>
                    <th className="py-3 px-6 text-left">Company address</th>
                    <th className="py-3 px-6 text-center">Company number</th>
                    <th className="py-3 px-6 text-center">Company Works On</th>
                    <th className="py-3 px-6 text-center">Company Establishment</th>
                    <th className="py-3 px-6 text-center">No. of Employee</th>
                    <th className="py-3 px-12 text-center">About Company</th>
                    <th className="py-3 px-6 text-center">Company</th>
                    <th className="py-3 px-6 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr
                      key={product.id}
                      className="bg-gray-800 border-b border-gray-600"
                    >
                      <td className="py-3 px-6">{product.Cname}</td>
                      <td className="py-3 px-6">{product.Caddress}</td>
                      <td className="py-3 px-6 text-center">{product.Cnumber}</td>
                      <td className="py-3 px-6 text-center">{product.CompanyWorksOn}</td>
                      <td className="py-3 px-6 text-center">
                        {product.CompanyEstablishment}
                      </td>
                      <td className="py-3 px-6 text-center">{product.Nemployee}</td>
                      <td className="py-3 px-6 text-center">{product.AboutCompany}</td>
                      <td className="py-3 px-6 text-center">
                        {product.photo && (
                          <img
                            src={URL.createObjectURL(product.photo)}
                            alt={product.Cname}
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

export default Profile
