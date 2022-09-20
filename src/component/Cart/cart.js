import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { orderAxios, productAxios } from '../../customAxios/axios';

const Cart = () => {
  const [isEmpty, setIsEmpty] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [currency, setCurrency] = useState('');
  let currentCartItems = [];
  const navigate = useNavigate();

  const createOrder = () => {
    orderAxios.post('/createOrder');
    navigate('/parts');
  };

  useEffect(() => {
    if (cartItems.length > 0) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
    changeTotalPrice();
  });

  useEffect(() => {
    fetchOrderItems();
  }, [cartItems.length]);

  const placeOrder = () => {
    if (window.confirm('Do you confirm this order ?')) {
      orderAxios.get('/placeOrder');
      navigate('/orders');
    }
  };

  const fetchOrderItems = () => {
    orderAxios.get('/orderItems').then(response => setCartItems(response.data));
  };

  const changeTotalPrice = () => {
    let price = 0;
    let currency = 'MKD';
    cartItems.map(item => {
      price += item.price.amount;
    });
    setTotalPrice(price);
    setCurrency(currency);
  };

  const deleteFromCart = e => {
    if (window.confirm('Delete item from cart ?')) {
      orderAxios.post('/delete', null, {
        params: {
          id: e.target.id,
        },
      });
      setCartItems(items => {
        let newItems = items.filter(x => x.id !== e.target.id);
        return newItems;
      });
      productAxios.post('/removeSales', null, {
        params: {
          id: e.target.id,
        },
      });
    }
  };

  const getQuantity = name => {
    const quantity = cartItems.filter(x => x.name === name).length;
    return quantity;
  };

  const getFilteredItems = item => {
    if (!currentCartItems.find(x => x.name === item.name)) {
      currentCartItems = [...currentCartItems, item];
    }
  };

  return (
    <div style={{ background: '#f5f6f7', minHeight: '90vh', paddingTop: '50px' }}>
      {isEmpty ? (
        <div>
          <div
            style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: '10px',
            }}
          >
            Cart is empty
          </div>
          <div
            style={{
              marginTop: '50px',
            }}
          >
            <button
              style={{
                border: '1px solid grey',
                padding: '7px 200px',
                fontWeight: 'bold',
                fontSize: '30px',
                marginLeft: '450px',
                marginTop: '100px',
              }}
              className="btn text-secondary mt-4"
              onClick={createOrder}
            >
              Start shopping
            </button>
          </div>
        </div>
      ) : (
        <div className="container">
          <h1 style={{ fontSize: '3rem' }}>Cart</h1>
          <table class="table">
            <thead style={{ fontSize: '1.3rem' }}>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th></th>
              </tr>
            </thead>
            <tbody style={{ fontSize: '1.3rem' }}>
              {cartItems.map(item => getFilteredItems(item))}
              {currentCartItems.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price.amount + ' ' + item.price.currency}</td>
                  <td>{getQuantity(item.name)}</td>
                  <td>
                    <button onClick={deleteFromCart} id={item.id} className="btn btn-danger">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <table class="table">
            <thead style={{ fontSize: '1.3rem' }}>
              <tr>
                <th scope="col">Total Price</th>
                <th></th>
                <th scope="col">{totalPrice + ' ' + currency}</th>
              </tr>
            </thead>
          </table>
          <div className="d-flex justify-content-end mt-4">
            <a
              href="http://localhost:3000/parts"
              className="btn btn-secondary"
              style={{ fontSize: '1rem', width: '150px', marginRight: '15px' }}
            >
              Back to shopping
            </a>
            <button className="btn btn-success" onClick={placeOrder} style={{ fontSize: '1rem', width: '150px' }}>
              Place order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
