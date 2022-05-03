import React from 'react';
import { useParams } from 'react-router-dom';

const OrderDetails = () => {
    const params = useParams()
  return <h2>Details of order {params.orderId}</h2>
};

export default OrderDetails;
