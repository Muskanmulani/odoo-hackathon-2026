import { useEffect, useState } from "react";
import axios from "axios";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch Categories
  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/categories"
      );

      setCategories(response.data);
    } catch (error) {
      console.log("Error fetching categories", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Add Category
  const addCategory = async () => {
    if (!categoryName.trim()) return;

    try {
      setLoading(true);

      await axios.post(
        "http://localhost:5000/api/categories",
        {
          name: categoryName,
        }
      );

      setCategoryName("");
      fetchCategories();
    } catch (error) {
      console.log("Error adding category", error);
    } finally {
      setLoading(false);
    }
  };

  // Delete Category
  const deleteCategory = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/categories/${id}`
      );

      fetchCategories();
    } catch (error) {
      console.log("Delete Error", error);
    }
  };

  return (
    <div className="container mt-4">

      <div className="mb-4">
        <h1>Asset Categories</h1>
        <p className="text-muted">
          Manage all asset categories
        </p>
      </div>

      {/* Add Category */}

      <div className="card shadow-sm p-4 mb-4">
        <h4 className="mb-3">Add New Category</h4>

        <div className="d-flex gap-2">
          <input
            type="text"
            className="form-control"
            placeholder="Category Name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />

          <button
            className="btn btn-success"
            onClick={addCategory}
          >
            {loading ? "Adding..." : "Add"}
          </button>
        </div>
      </div>

      {/* Category Table */}

      <div className="card shadow-sm p-4">
        <h4 className="mb-3">Category List</h4>

        <table className="table table-bordered table-hover">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Category Name</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {categories.length > 0 ? (

              categories.map((category, index) => (

                <tr key={category._id}>

                  <td>{index + 1}</td>

                  <td>{category.name}</td>

                  <td>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() =>
                        deleteCategory(category._id)
                      }
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="3"
                  className="text-center"
                >
                  No Categories Found
                </td>

              </tr>

            )}

          </tbody>

        </table>
      </div>

    </div>
  );
}

export default Categories;