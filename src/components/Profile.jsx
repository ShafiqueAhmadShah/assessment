import React, { useEffect, useState } from "react";
import "../components/Profile.css";
import { useTable, useSortBy, useFilters, useGlobalFilter } from 'react-table';

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
        setEmployees(data.map(employee => ({
          ...employee,
          fullName: `${employee.firstName} ${employee.lastName}`,
        })));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'fullName', // Use the combined name field for searching
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Location',
        accessor: employee => `${employee.city}, ${employee.country}`,
      },
      {
        Header: 'Phone',
        accessor: 'phoneNumber',
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    { columns, data: employees },
    useFilters,
    useGlobalFilter,
    useSortBy
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <input
        className="search-input"
        type="text"
        placeholder="Search..."
        onChange={(e) => setGlobalFilter(e.target.value.toLowerCase())}
      />
      <div className="wrapper">
        {rows.map((row) => {
          prepareRow(row);
          const employee = row.original;
          return (
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
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
