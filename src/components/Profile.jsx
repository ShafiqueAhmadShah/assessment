import React, { useEffect, useState } from "react";
import "../components/Profile.css";

const Profile = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.findofficers.com/hiring_test/get_all_employee");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="wrapper">
      {employees.map((employee) => (
        <div key={employee.employeeID} className="user-card">
          <div className="user-card-img">
            <img
              src={employee.profilePicture || "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxivAs4UknzmDfLBXGMxQkayiZDhR2ftB4jcIV7LEnIEStiUyMygioZnbLXCAND-I_xWQpVp0jv-dv9NVNbuKn4sNpXYtLIJk2-IOdWQNpC2Ldapnljifu0pnQqAWU848Ja4lT9ugQex-nwECEh3a96GXwiRXlnGEE6FFF_tKm66IGe3fzmLaVIoNL/s1600/img_avatar.png"}
              alt={`${employee.firstName} ${employee.lastName}`}
            />
          </div>
          <div className="user-card-info">
            <h2>{`${employee.firstName} ${employee.lastName}`}</h2>
            <p>
              <span>Email:</span> {employee.email}
            </p>
            <p>
              <span>Location:</span> {`${employee.city}, ${employee.country}`}
            </p>
            <p>
              <span>Phone:</span> {employee.phoneNumber}
            </p>
            {/* Add more fields as needed */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Profile;
