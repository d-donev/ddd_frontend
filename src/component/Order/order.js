import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { orderAxios } from '../../customAxios/axios';

const Order = () => {
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    orderAxios.get('/orders').then(response => {
      setOrders(response.data);
    });
  }, [orders.length]);

  const getTotal = item => {
    let total = 0;
    item.orderItemSet.map(i => {
      total += i.price.amount;
    });
    return total;
  };

  var num = 1;

  const NoOrdersYet = <div>No currently orders</div>;

  return (
    <div>
      {orders.length === 0 ? NoOrdersYet : ''}
      <div className="container">
        <div className="row">
          <h1 className="text-center mt-4 mb-5">Orders section</h1>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Ordered on</th>
              <th scope="col">Order State</th>
              <th scope="col">Order Amount</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(item => (
              <tr>
                <th scope="row">{num++}</th>
                <td>{item.orderedOn != null ? item.orderedOn.slice(0, 10) : 'Order in process'}</td>
                <td>{item.orderState}</td>
                <td>{item.orderedOn != null ? getTotal(item) + ' MKD' : getTotal(item) + ' MKD'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
