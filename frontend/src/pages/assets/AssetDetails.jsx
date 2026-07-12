import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function AssetDetails() {
  const { id } = useParams();

  const [asset, setAsset] = useState(null);

  useEffect(() => {
    fetchAsset();
  }, []);

  const fetchAsset = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/assets/${id}`
      );

      setAsset(response.data);
    } catch (error) {
      console.log("Error fetching asset details", error);
    }
  };

  if (!asset) {
    return (
      <div className="container mt-5 text-center">
        <h4>Loading Asset Details...</h4>
      </div>
    );
  }

  return (
    <div className="container mt-4">

      <h2 className="mb-4">
        Asset Details
      </h2>

      <div className="card shadow p-4">

        <div className="row">

          <div className="col-md-6 mb-3">
            <h5>Asset Name</h5>
            <p>{asset.name}</p>
          </div>

          <div className="col-md-6 mb-3">
            <h5>Asset Tag</h5>
            <p>{asset.assetTag}</p>
          </div>

          <div className="col-md-6 mb-3">
            <h5>Serial Number</h5>
            <p>{asset.serialNumber}</p>
          </div>

          <div className="col-md-6 mb-3">
            <h5>Category</h5>
            <p>{asset.category}</p>
          </div>

          <div className="col-md-6 mb-3">
            <h5>Condition</h5>
            <p>{asset.condition}</p>
          </div>

          <div className="col-md-6 mb-3">
            <h5>Location</h5>
            <p>{asset.location}</p>
          </div>

          <div className="col-md-6 mb-3">
            <h5>Status</h5>

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

          </div>

          <div className="col-md-6 mb-3">
            <h5>Allocated To</h5>
            <p>{asset.allocatedTo || "Not Allocated"}</p>
          </div>

          <div className="col-md-6 mb-3">
            <h5>Purchase Date</h5>
            <p>{asset.purchaseDate || "N/A"}</p>
          </div>

          <div className="col-md-6 mb-3">
            <h5>Created At</h5>
            <p>
              {asset.createdAt
                ? new Date(asset.createdAt).toLocaleDateString()
                : "N/A"}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default AssetDetails;