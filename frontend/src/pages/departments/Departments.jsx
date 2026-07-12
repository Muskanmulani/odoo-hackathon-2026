import { useEffect, useState } from "react";
import axios from "axios";


function Departments() {


  const [departments, setDepartments] = useState([]);


  const [newDepartment, setNewDepartment] = useState("");



  // Fetch departments from backend

  const fetchDepartments = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/api/departments"
      );

      setDepartments(response.data);


    } catch (error) {

      console.log("Error fetching departments", error);

    }

  };



  useEffect(() => {

    fetchDepartments();

  }, []);





  // Add department

  const addDepartment = async () => {


    if (!newDepartment.trim()) return;



    try {


      await axios.post(

        "http://localhost:5000/api/departments",

        {
          name: newDepartment
        }

      );


      setNewDepartment("");

      fetchDepartments();



    } catch(error) {

      console.log("Error adding department", error);

    }


  };






  return (


    <div className="container mt-4">



      <h1 className="mb-2">
        Departments
      </h1>


      <p className="text-muted">
        Manage organization departments
      </p>





      {/* Add Department */}


      <div className="card p-3 mb-4 shadow-sm">


        <h4>
          Add New Department
        </h4>



        <div className="d-flex gap-3">


          <input

            className="form-control"

            placeholder="Enter department name"

            value={newDepartment}

            onChange={(e)=>setNewDepartment(e.target.value)}

          />



          <button

            className="btn btn-primary"

            onClick={addDepartment}

          >

            Add

          </button>



        </div>


      </div>






      {/* Department Cards */}


      <div className="row">



        {departments.length > 0 ? (


          departments.map((dept)=>(


            <div 
              className="col-md-4 mb-3"
              key={dept._id}
            >


              <div className="card p-3 shadow-sm">


                <h3>

                  {dept.name}

                </h3>


                <p>

                  Department ID: {dept._id}

                </p>



              </div>


            </div>


          ))


        ) : (


          <div className="text-center">

            No departments available

          </div>


        )}



      </div>




    </div>


  );


}


export default Departments;