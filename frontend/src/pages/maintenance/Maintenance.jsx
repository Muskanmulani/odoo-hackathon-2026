import { useEffect, useState } from "react";
import axios from "axios";


function Maintenance() {


  const [maintenanceList, setMaintenanceList] = useState([]);


  const [formData, setFormData] = useState({

    asset:"",
    issue:""

  });



  const fetchMaintenance = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/api/maintenance"
      );


      setMaintenanceList(response.data);


    } catch(error) {

      console.log(
        "Error fetching maintenance data",
        error
      );

    }

  };



  useEffect(()=>{

    fetchMaintenance();

  },[]);





  const handleChange = (e)=>{


    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });


  };






  const createRequest = async()=>{


    try{


      await axios.post(

        "http://localhost:5000/api/maintenance",

        formData

      );


      setFormData({

        asset:"",
        issue:""

      });


      fetchMaintenance();



    }catch(error){


      console.log(
        "Error creating maintenance request",
        error
      );


    }


  };







  return (


    <div className="container mt-4">



      <div className="mb-4">


        <h1>
          Maintenance
        </h1>


        <p className="text-muted">
          Track asset repair and maintenance requests
        </p>


      </div>







      {/* Create Request */}



      <div className="card p-4 shadow-sm mb-4">


        <h4>
          Raise Maintenance Request
        </h4>



        <input

          className="form-control mb-3"

          placeholder="Asset Name"

          name="asset"

          value={formData.asset}

          onChange={handleChange}

        />



        <textarea

          className="form-control mb-3"

          placeholder="Describe issue"

          name="issue"

          value={formData.issue}

          onChange={handleChange}

        />




        <button

          className="btn btn-primary"

          onClick={createRequest}

        >

          Submit Request

        </button>



      </div>








      {/* Maintenance Table */}




      <div className="card p-3 shadow-sm">


        <h4 className="mb-3">

          Maintenance Requests

        </h4>



        <table className="table table-hover">


          <thead>


            <tr>


              <th>
                Asset
              </th>


              <th>
                Issue
              </th>


              <th>
                Status
              </th>


              <th>
                Date
              </th>


            </tr>


          </thead>





          <tbody>



          {maintenanceList.length > 0 ? (



            maintenanceList.map((item)=>(


              <tr key={item._id}>


                <td>
                  {item.asset}
                </td>


                <td>
                  {item.issue}
                </td>


                <td>


                  <span className="badge bg-warning">

                    {item.status || "Pending"}

                  </span>


                </td>



                <td>

                  {item.createdAt 
                  ? new Date(item.createdAt).toLocaleDateString()
                  : "N/A"}

                </td>



              </tr>


            ))



          ):(


            <tr>

              <td 
              colSpan="4" 
              className="text-center"
              >

                No maintenance requests found

              </td>

            </tr>


          )}



          </tbody>



        </table>


      </div>





    </div>


  );


}


export default Maintenance;