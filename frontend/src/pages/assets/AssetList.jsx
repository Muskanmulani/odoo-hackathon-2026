import { useEffect, useState } from "react";
import axios from "axios";

function AssetList() {
  const [assets, setAssets] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchAssets();
  }, []);

  const fetchAssets = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/assets"
      );

      setAssets(response.data);
    } catch (error) {
      console.log("Error fetching assets", error);
    }
  };

  const filteredAssets = assets.filter((asset) =>
    asset.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2>Asset List</h2>
          <p className="text-muted">
            Manage all registered assets
          </p>
        </div>
      </div>

      {/* Search Bar */}

      <div className="card shadow-sm p-3 mb-4">

        <input
          type="text"
          className="form-control"
          placeholder="Search asset..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {/* Asset Table */}

      <div className="card shadow-sm">

        <div className="card-body">

          <table className="table table-hover">

            <thead className="table-light">

              <tr>

                <th>#</th>
                <th>Asset Name</th>
                <th>Asset Tag</th>
                <th>Category</th>
                <th>Condition</th>
                <th>Location</th>
                <th>Status</th>

              </tr>

            </thead>

            <tbody>

              {filteredAssets.length > 0 ? (

                filteredAssets.map((asset, index) => (

                  <tr key={asset._id}>

                    <td>{index + 1}</td>

                    <td>{asset.name}</td>

                    <td>{asset.assetTag}</td>

                    <td>{asset.category}</td>

                    <td>{asset.condition}</td>

                    <td>{asset.location}</td>

                    <td>

                      <span
                        className={`badge ${
                          asset.status === "Available"
                            ? "bg-success"
                            : asset.status === "Allocated"
                            ? "bg-warning text-dark"
                            : "bg-danger"
                        }`}
                      >
                        {asset.status}
                      </span>

                    </td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td
                    colSpan="7"
                    className="text-center"
                  >
                    No assets found.
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default AssetList;