import { useEffect, useState, useCallback } from "react";
import { adminAxios } from "../../../constraints/axiosInterceptors/adminAxiosInterceptors";
import adminEndpoints from "../../../constraints/endpoints/adminEndpoints";
import { toast } from "react-toastify";
import { FaSpinner, FaTrash } from "react-icons/fa";
import { MdCategory } from "react-icons/md";

function DashboardViewCategory() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCategories = useCallback(async () => {
    setLoading(true);
    try {
      const response = await adminAxios.get(adminEndpoints.getCategories);
      setCategories(response.data.categoryName);
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  }, []);

  const handleDelete = async (categoryName: string) => {
    try {
      const response = await adminAxios.post(adminEndpoints.deleteCategory, { categoryName });
      if (response) {
        toast.success("Category deleted successfully");
        fetchCategories(); // Refetch categories after deletion
      }
    } catch (error) {
      toast.error("Failed to delete category");
    }
  };

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <div className="max-w-4xl mx-auto p-4 mt-2">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-semibold mb-4">Categories</h1>
        {loading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <FaSpinner className="animate-spin text-3xl text-blue-500" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.length > 0 ? (
              categories.map((category, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition-shadow flex justify-between items-center">
                  <div className="flex items-center">
                    <MdCategory className="text-2xl text-blue-500 mr-2" />
                    <span className="text-lg font-medium">{category}</span>
                  </div>
                  <button
                    onClick={() => handleDelete(category)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash className="text-xl" />
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center mt-4">No categories found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default DashboardViewCategory;
