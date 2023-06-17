import React, { useState, useEffect } from "react";
import { Input, Table } from "antd";
import qs from "qs";

function TabelDyanmic() {
  const getParams = (params) => ({
    data: params.pagination?.pageSize,
    page: params.pagination?.current,
    ...params,
  });
  // const [columns, setColumns] = useState([]);
  const [filter, setFilter] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 2,
    },
  });

  const getData = () => {
    fetch(
      `https://jsonplaceholder.typicode.com/users?${qs.stringify(
        getParams(tableParams)
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDataSource(data);
        setTableParams({
          ...tableParams,
          pagination: { ...tableParams.pagination, total: 18 },
        });
      });
  };

  useEffect(() => {
    getData();
  }, [JSON.stringify(tableParams)]);
  const handleTableChange = (pagination, filter, sorter) => {
    setTableParams({
      pagination,
      filter,
      ...sorter,
    });
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setDataSource([]);
    }
  };
  const handleFilter = (name) => {
    // setDataSource(e.target.value.toLowerCase());
    const filtered = dataSource.filter((item) => {
      item.name.toLowerCase().includes(name);
      console.log(item.name, "22222");
    });
    setFilter(filtered);
  };
  const column = [
    {
      key: "name",
      title: "User Name",
      dataIndex: "name",
    },
    { key: "gender", title: "Phone Number", dataIndex: "phone" },
    {
      key: "email",
      title: "Email",
      dataIndex: "email",
    },
  ];

  return (
    <div>
      <Input onChange={(e) => handleFilter(e.target.value.toLowerCase())} />
      <Table
        onChange={handleTableChange}
        columns={column}
        dataSource={dataSource}
        pagination={tableParams.pagination}
      />
    </div>
  );
}

export default TabelDyanmic;
