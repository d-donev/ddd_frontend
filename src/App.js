import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/navbar';
import React, { useState } from 'react';
import Parts from './component/Parts/parts';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/home';
import PartForm from './component/Parts/PartForm/partForm';
import Order from './component/Order/order';
import { orderAxios, productAxios } from './customAxios/axios';
import Cart from './component/Cart/cart';
import ListParts from './component/Parts/listParts';

const App = () => {
  const addToCart = item => {
    orderAxios
      .post('/addOrderItem', null, {
        params: {
          autoPartId: item.id,
          name: item.name,
          price: item.price,
        },
      })
      .then(response => console.log(response));
    productAxios.post('/addSales', null, {
      params: {
        id: item.id,
      },
    });
    window.location.reload();
  };

  return (
    <React.Fragment>
      {<Navbar />}
      <Routes>
        <Route path="/parts" element={<Parts addToCart={addToCart} />} />
        <Route path="/list" element={<ListParts addToCart={addToCart} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<PartForm />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
