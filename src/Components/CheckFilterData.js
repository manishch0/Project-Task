import React, { useEffect, useState } from "react";
import axios from "axios";

const CheckData = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const filterDataByName = (name) => {
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(name.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => filterDataByName(e.target.value)}
        placeholder="Filter by name"
      />

      <ul>
        {filteredData.length > 0 ? (
          filteredData.map((item) => <li key={item.id}>{item.name}</li>)
        ) : (
          <li>No results found</li>
        )}
      </ul>
    </div>
  );
};

export default CheckData;
