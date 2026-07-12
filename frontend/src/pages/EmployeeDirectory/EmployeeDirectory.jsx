import { useEffect, useState } from "react";
import axios from "axios";


function EmployeeDirectory() {


  const [employees, setEmployees] = useState([]);

  const [search, setSearch] = useState("");



  // Fetch Employees

  const fetchEmployees = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/api/employees"
      );


      setEmployees(response.data);


    } catch (error) {

      console.log("Error fetching employees", error);

    }

  };




  useEffect(() => {

    fetchEmployees();

  }, []);





  // Search filter

  const filteredEmployees = employees.filter((employee) =>

    employee.name
      ?.toLowerCase()
      .includes(search.toLowerCase())

  );





  return (


    <div className="container mt-4">


      <div className="mb-4">

        <h1>
          Employee Directory
        </h1>


        <p className="text-muted">
          View and manage employee information
        </p>

      </div>





      {/* Search */}


      <div className="card p-3 mb-4 shadow-sm">


        <input

          className="form-control"

          placeholder="Search employee..."

          value={search}

          onChange={(e)=>setSearch(e.target.value)}

        />


      </div>






      {/* Employee Table */}



      <div className="card shadow-sm p-3">


        <table className="table table-hover">


          <thead>


            <tr>

              <th>
                Name
              </th>


              <th>
                Email
              </th>


              <th>
                Department
              </th>


              <th>
                Role
              </th>


              <th>
                Status
              </th>


            </tr>


          </thead>





          <tbody>



            {filteredEmployees.length > 0 ? (


              filteredEmployees.map((employee)=>(


                <tr key={employee._id}>


                  <td>
                    {employee.name}
                  </td>


                  <td>
                    {employee.email}
                  </td>


                  <td>
                    {employee.department || "N/A"}
                  </td>


                  <td>
                    {employee.role || "Employee"}
                  </td>


                  <td>


                    <span className="badge bg-success">

                      Active

                    </span>


                  </td>


                </tr>


              ))



            ) : (


              <tr>

                <td 
                colSpan="5" 
                className="text-center"
                >

                  No employees found

                </td>

              </tr>


            )}



          </tbody>



        </table>


      </div>




    </div>


  );


}


export default EmployeeDirectory;