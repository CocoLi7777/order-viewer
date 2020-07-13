import React, { useState, Component, useEffect, useMemo } from 'react';
import ReactTable from 'react-table';
import { useTable, usePagination } from 'react-table';
import moment from 'moment';
import SearchField from 'react-search-field';
import StyledTable from './styles/StyledTable';
import Table from './elements/Table';

const Home = () => {
  const columns = useMemo(
    () => [
      {
        Header: 'Order name',
        accessor: 'order_name',
        width: 150,
      },
      {
        Header: 'Customer Company',
        accessor: 'company[0].company_name',
      },
      {
        Header: 'Cusomter name',
        accessor: 'customer[0].name',
        width: 200,
      },
      {
        Header: 'Order date',
        id: 'created_at',
        accessor: (d) => {
          return moment(d.created_at).local().format('MMM Do, h:mm a');
        },
      },
      {
        Header: 'Delivered Amount',
        id: 'item[0].quantity',
        accessor: (d) => {
          return moment(d.updated_at).local().format('YYYY/MM/DD HH:mm:ss');
        },
      },
      {
        Header: 'Total Amount',
        id: 'delivery[0].id',
        accessor: (d) => {
          return moment(d.updated_at).local().format('YYYY/MM/DD HH:mm:ss');
        },
      },
    ],
    []
  );
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [pageCount, setPageCount] = useState(0);
  const [error, setError] = useState(false);

  const fetchData = async ({ pageIndex, pageSize }) => {
    setLoading(true);
    try {
      const result = await (
        await fetch(`/api/v1/orders?page=${pageIndex}&limit=${pageSize}`)
      ).json();
      console.log(result);
      setData(result.orders);
      setPage(result.pagination.currentPage);
      setPageSize(result.pagination.limit);
      setPageCount(result.count / result.pagination.limit);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  return (
    <>
      <h1>Order Viewer</h1>
      <StyledTable>
        <Table
          columns={columns}
          data={data}
          fetchData={fetchData}
          loading={loading}
          page={page}
          pageSize={pageSize}
          pageCount={pageCount}
        />
      </StyledTable>
    </>
  );
};

export default Home;
