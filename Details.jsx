import React from "react";
import "./App.css"; // Import CSS for styling

const WorkerDetails = () => {
  const workers = [
    {
      id: 1,
      name: "John Doe",
      address: "123 Street, New York",
      contact: "+1 234 567 890",
      picture: "https://via.placeholder.com/50",
    },
    {
      id: 2,
      name: "Jane Smith",
      address: "456 Avenue, Los Angeles",
      contact: "+1 987 654 321",
      picture: "https://via.placeholder.com/50",
    },
  ];

  return (
    <div className="container">
      <h2>Worker Details</h2>
      <table>
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Worker Name</th>
            <th>Address</th>
            <th>Contact Number</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
          {workers.map((worker, index) => (
            <tr key={worker.id}>
              <td>{index + 1}</td>
              <td>{worker.name}</td>
              <td>{worker.address}</td>
              <td>{worker.contact}</td>
              <td>
                <img src={worker.picture} alt={worker.name} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default function App() {
  return <WorkerDetails />;
}


/* Container styles */
.container {
  width: 80%;
  margin: 20px auto;
  text-align: center;
}

/* Table styles */
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

th, td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
}

th {
  background-color: #4CAF50;
  color: white;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

/* Image styling */
img {
  width: 50px;
  border-radius: 50%;
}

/* Responsive Design */
@media (max-width: 768px) {
  table {
    width: 100%;
    font-size: 14px;
  }
}
