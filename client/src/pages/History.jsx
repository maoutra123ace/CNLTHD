import { useState } from 'react';
import { useEffect } from "react";

import { useParams } from 'react-router-dom';

import axios from 'axios';
import Layout from '../components/Layout/Layout';
import numberWithCommas from '../utils/ConvertNumber';
const History = () => {

  const {accountId} = useParams();
  const [orderAccount, setOrderAccount] = useState([]);
  
  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/orders/getOrderByAccountId/${accountId}`
      )
      .then((res) => setOrderAccount(res.data));
  }, [accountId]);
  
  return(
    <Layout>
    <div class="table-container">
    <table>
      <caption>Bạn chưa đặt đơn hàng nào</caption>
      <tr>
        <th>Date</th>
        <th>Total</th>
        <th>Status</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Address</th>
      </tr>
       {(orderAccount || []).map(item => (
        <tr>
          <td>{item.Date}</td>
          <td>{numberWithCommas(item.Total)}</td>
          <td>{item.Status}</td>
          <td>{item.Email}</td>
          <td>{item.Phone}</td>
          <td>{item.Address}</td>         
        </tr>
      ))}
      
      </table>
  </div>
    </Layout>
  );
};
export default History