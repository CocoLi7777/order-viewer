import React, { useState, useMemo } from 'react';
import moment from 'moment';
import SearchBar from './elements/SearchBar';
import StyledTable from './styles/StyledTable';
import GlobalStyle from './styles/GlobalStyle';
import Table from './elements/Table';
import Spinner from './elements/Spinner';

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
        Header: 'Delivered Quantity',
        id: 'delivery',
        accessor: (d) => {
          return d.delivery.reduce((acc, item) => {
            return (acc += parseInt(item.delivered_quantity));
          }, 0);
        },
      },
      {
        Header: 'Total Amount',
        id: 'item',
        accessor: (d) => {
          return d.item.reduce((acc, item) => {
            return (acc += parseInt(item.price_per_unit * item.quantity));
          }, 0);
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

  if (error) return <div>Something wrong...</div>;
  if (!data) return <Spinner />;

  const fetchData = async ({ pageIndex, pageSize }) => {
    setLoading(true);
    try {
      const result = await (
        await fetch(`/api/v1/orders?page=${pageIndex}&limit=${pageSize}`)
      ).json();

      setData(result.orders);
      setPage(result.pagination.currentPage);
      setPageSize(result.pagination.limit);
      setPageCount(result.count / result.pagination.limit);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  const doSearch = async (value) => {
    setLoading(true);
    try {
      const result = await (
        await fetch(`/api/v1/orders/search?value=${value}`)
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
      <GlobalStyle />
      <h1>Order Viewer</h1>
      <SearchBar callback={doSearch} />

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
