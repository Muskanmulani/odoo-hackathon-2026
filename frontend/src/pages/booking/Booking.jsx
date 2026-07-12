function Booking() {

  return (
    <div className="booking-container">

      <div className="page-header">
        <h1>Asset Booking</h1>
        <p>Book available assets for employees and departments.</p>
      </div>


      <div className="booking-card">

        <h2>Create Booking</h2>


        <div className="form-group">
          <label>Select Asset</label>
          <select>
            <option>Select Asset</option>
            <option>Dell Laptop</option>
            <option>MacBook Pro</option>
            <option>Projector</option>
          </select>
        </div>


        <div className="form-group">
          <label>Employee Name</label>
          <input 
            type="text"
            placeholder="Enter employee name"
          />
        </div>


        <div className="form-group">
          <label>Booking Date</label>
          <input 
            type="date"
          />
        </div>


        <div className="form-group">
          <label>Purpose</label>
          <textarea 
            placeholder="Enter booking purpose"
          />
        </div>


        <button className="booking-btn">
          Book Asset
        </button>


      </div>


      <div className="booking-history">

        <h2>Recent Bookings</h2>

        <table>

          <thead>
            <tr>
              <th>Asset</th>
              <th>Employee</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>


          <tbody>

            <tr>
              <td>Dell Laptop</td>
              <td>Rahul Patil</td>
              <td>12 July 2026</td>
              <td>Approved</td>
            </tr>


            <tr>
              <td>Projector</td>
              <td>Sneha More</td>
              <td>13 July 2026</td>
              <td>Pending</td>
            </tr>

          </tbody>

        </table>

      </div>


    </div>
  );

}


export default Booking;