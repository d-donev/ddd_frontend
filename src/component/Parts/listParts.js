import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { orderAxios, productAxios } from '../../customAxios/axios';

const Parts = props => {
  const navigate = useNavigate();

  const [parts, setParts] = useState([]);
  useEffect(() => {
    const getAllParts = () => {
      productAxios.get('/parts').then(response => {
        setParts(response.data);
      });
    };
    getAllParts();
  }, [parts.length]);
  const deleteFromCart = e => {
    if (window.confirm('Are you sure you want to delete this product ?')) {
      productAxios.delete(`/delete/${e.target.id}`);
      setParts(parts => {
        const newParts = parts.filter(x => x.id.id !== e.target.id);
        return newParts;
      });
    }
  };
  const createOrder = () => {
    orderAxios.post('/createOrder');
    navigate('/parts');
  };

  return (
    <div className="container mt-4">
      <div className="row mb-5">
        <h1 className="d-flex text-center justify-content-center">PRODUCT CATALOG</h1>
        <hr />
        <button onClick={createOrder} className="btn btn-success fw-bold float-end">
          Start shopping
        </button>
      </div>
      <div>
        <div className="row">
          {parts.map(item => (
            <div className="col-md-4 mb-3">
              <div className="card m-auto" style={{ width: '20rem', height: '27rem' }} key={item.id}>
                <img style={{ height: '40%', width: '100%' }} src={item.imageUrl} alt="Card image cap" />
                <div className="card-body" style={{ height: 'auto' }}>
                  <h5 className="card-title text-center">
                    Product:{' '}
                    <p className="d-inline fw-bold" style={{ fontSize: '25px' }}>
                      {item.part_name}
                    </p>
                  </h5>
                  <p className="card-text text-center">
                    <p className="h5 d-inline">Price:</p>{' '}
                    <p className="d-inline fw-bold" style={{ fontSize: '25px' }}>
                      {item.price.amount} {item.price.currency}
                    </p>
                  </p>
                  <p>
                    <p className="h6">Description: </p>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div class="col-md-4 d-flex align-items-center">
          <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            <svg class="bi" width="30" height="24">
              <use href="#bootstrap"></use>
            </svg>
          </a>
          <span class="text-muted">© 2022 AutoParts, Inc</span>
        </div>
      </footer>
    </div>
  );
};

export default Parts;
