import React, { useState, Component, useEffect } from 'react';
import SearchBar from './elements/SearchBar';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import moment from 'moment';

const Home = () => {
  const [state, setState] = useState({
    orders: [],
    page: 0,
    pageSize: 5,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchOrders = async (page, pageSize) => {
    try {
      const result = await (
        await fetch(`/api/v1/orders?page=${page}&limit=${pageSize}`)
      ).json();
      console.log(result);
      setState({
        totalPages: result.count / result.pagination.limit,
        orders: result.orders,
      });
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchOrders(state.page, state.pageSize);
  }, [state.page, state.pageSize]);

  return (
    <>
      <h1>Order Viewer</h1>
      <ReactTable
        data={state.orders}
        loading={loading}
        className="-striped -highlight pointer"
        page={state.page}
        pageSize={state.pageSize}
        onPageChange={(page) => setState({ page: page + 1 })}
        onPageSizeChange={(pageSize, page) => setState({ page, pageSize })}
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