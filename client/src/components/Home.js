import React, { useState, Component, useEffect } from 'react';
import SearchBar from './elements/SearchBar';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import moment from 'moment';
import useOrderFetch from './hook/useOrderFetch';
import queryString from 'querystring';

const Home = () => {
  const [{ state, loading, error }, fetchOrders] = useOrderFetch();

  const changePage = (index) => {
    fetchOrders(`/api/v1/orders?page=${index}&limit=${state.limit}`);
  };

  const changePageSize = (index) => {
    fetchOrders(`/api/v1/orders?page=${state.currentPage}&limit=${index}`);
  };

  return (
    <>
      <h1>Order Viewer</h1>
      <ReactTable
        data={state.orders}
        loading={loading}
        className="-striped -highlight pointer"
        page={state.currentPage - 1}
        pageSize={state.limit}
        onPageChange={(index) => changePage(index + 1)}
        onPageSizeChange={(index) => changePageSize(index)}
        pages={state.totalPages}
        noDataText="No order found"
        manual
        columns={[
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
            id: 'created_at',
            accessor: (d) => {
              return moment(d.updated_at).local().format('YYYY/MM/DD HH:mm:ss');
            },
          },
          {
            Header: 'Total Amount',
            id: 'created_at',
            accessor: (d) => {
              return moment(d.updated_at).local().format('YYYY/MM/DD HH:mm:ss');
            },
          },
        ]}
      />
    </>
  );
};

export default Home;
