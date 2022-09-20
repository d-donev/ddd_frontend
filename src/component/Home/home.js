import { Link, useNavigate } from 'react-router-dom';
import { orderAxios } from '../../customAxios/axios';

const Home = () => {
  const navigate = useNavigate();

  const createOrder = () => {
    orderAxios.post('/createOrder');
    navigate('/parts');
  };
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{
        height: '88.4vh',
        backgroundImage: "url('https://c8.alamy.com/comp/T2BN3W/many-auto-parts-on-white-background-3d-illustration-T2BN3W.jpg')",
        backgroundSize: 'cover',
        color: 'white',
      }}
    >
      <h1 style={{ fontSize: '4rem', fontWeight: 'bold', color: 'grey' }} className="mb-5">
        Welcome to Auto Part Shop
      </h1>
      <button
        style={{ marginLeft: '20px', border: '1px solid grey', padding: '7px 200px', fontWeight: 'bold', fontSize: '30px' }}
        className="btn text-secondary mt-4"
        onClick={createOrder}
      >
        Start shopping
      </button>
    </div>
  );
};

export default Home;
