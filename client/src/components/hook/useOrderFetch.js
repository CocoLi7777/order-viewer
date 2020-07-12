import React, { useEffect, useState } from 'react';
import { API_URL } from '../../config';
//import Spinner from './../elements/Spinner';

const useOrderFetch = () => {
  const [state, setState] = useState({
    orders: [],
    currentPage: 1,
    limit: 5,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchOrders = async (endpoint) => {
    setLoading(true);
    setError(false);

    try {
      const result = await (await fetch(endpoint)).json();
      console.log(result);
      setState({
        totalPages: result.count,
        currentPage: result.pagination.page,
        limit: result.pagination.limit,
        orders: [...result.orders],
      });
      console.log(state.currentPage);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchOrders(
      `/api/v1/orders?page=${state.currentPage}&limit=${state.limit}`
    );
  }, []);

  return [{ state, loading, error }, fetchOrders];
};

export default useOrderFetch;
