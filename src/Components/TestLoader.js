import { Spin } from "antd";
import React, { useState, useEffect } from "react";

const TestLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setData(data);
            setIsLoading(false);
          });
      }, 4000);
    };

    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>
          <Spin />
        </div>
      ) : (
        <div>
          Hello
          {data.map((e) => {
            console.log(e, "map ");
          })}
        </div>
      )}
    </div>
  );
};

export default TestLoader;
