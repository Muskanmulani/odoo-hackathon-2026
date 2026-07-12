import { useEffect, useState } from "react";
import axios from "axios";


function Reports() {


  const [reports, setReports] = useState({});



  const fetchReports = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/api/reports"
      );


      setReports(response.data);


    } catch(error) {

      console.log(
        "Error fetching reports",
        error
      );

    }

  };



  useEffect(() => {

    fetchReports();

  }, []);





  return (


    <div className="container mt-4">


      <div className="mb-4">


        <h1>
          Reports
        </h1>


        <p className="text-muted">
          Analyze asset usage and system performance
        </p>


      </div>





      {/* Report Cards */}



      <div className="row">



        <div className="col-md-3 mb-3">

          <div className="card p-3 shadow-sm">


            <h5>
              Total Assets
            </h5>


            <h2>
              {reports.totalAssets || 0}
            </h2>


          </div>


        </div>





        <div className="col-md-3 mb-3">

          <div className="card p-3 shadow-sm">


            <h5>
              Available Assets
            </h5>


            <h2>
              {reports.availableAssets || 0}
            </h2>


          </div>


        </div>





        <div className="col-md-3 mb-3">

          <div className="card p-3 shadow-sm">


            <h5>
              Maintenance
            </h5>


            <h2>
              {reports.maintenanceAssets || 0}
            </h2>


          </div>


        </div>





        <div className="col-md-3 mb-3">

          <div className="card p-3 shadow-sm">


            <h5>
              Bookings
            </h5>


            <h2>
              {reports.totalBookings || 0}
            </h2>


          </div>


        </div>



      </div>








      {/* Asset Report Table */}



      <div className="card p-3 shadow-sm mt-4">


        <h4>
          Asset Report Summary
        </h4>



        <table className="table table-hover mt-3">


          <thead>

            <tr>

              <th>
                Category
              </th>


              <th>
                Count
              </th>


              <th>
                Status
              </th>


            </tr>


          </thead>




          <tbody>


            <tr>

              <td>
                Laptop
              </td>

              <td>
                {reports.laptops || 0}
              </td>

              <td>
                Active
              </td>

            </tr>



            <tr>

              <td>
                Projector
              </td>

              <td>
                {reports.projectors || 0}
              </td>

              <td>
                Available
              </td>

            </tr>



            <tr>

              <td>
                Furniture
              </td>

              <td>
                {reports.furniture || 0}
              </td>

              <td>
                Active
              </td>

            </tr>



          </tbody>



        </table>



      </div>




    </div>


  );


}


export default Reports;