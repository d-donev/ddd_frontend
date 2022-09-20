import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { productAxios } from '../../../customAxios/axios';

const PartForm = () => {
  const [autoPartName, setAutoPartName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [autoPartPrice, setAutoPartPrice] = useState(0);
  const navigate = useNavigate();

  const createPhonePart = (name, price, imageUrl, description) => {
    return productAxios
      .post('/create', null, {
        params: {
          partName: name,
          price: price,
          imageUrl: imageUrl,
          description: description,
        },
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  const onSubmitData = e => {
    e.preventDefault();
    createPhonePart(autoPartName, autoPartPrice, imageUrl, description);
    navigate('/parts');
  };

  return (
    <div className="container col-md-6 mt-5">
      <h1 className="text-center">Create new product</h1>
      <form onSubmit={onSubmitData}>
        <div class="form-group mt-4">
          <label for="autoPartName" className="fw-bold mb-2" style={{ fontSize: '1.2rem' }}>
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="autoPartName"
            placeholder="Name"
            onChange={event => setAutoPartName(event.target.value)}
          />
        </div>
        <div class="form-group mt-4">
          <label for="autoPartPrice" className="fw-bold mb-2" style={{ fontSize: '1.2rem' }}>
            Price
          </label>
          <input
            type="number"
            class="form-control"
            id="autoPartPrice"
            placeholder="Price"
            onChange={event => setAutoPartPrice(event.target.value)}
          />
        </div>
        <div class="form-group mt-4">
          <label for="imageUrl" className="fw-bold mb-2" style={{ fontSize: '1.2rem' }}>
            Image url
          </label>
          <input
            type="text"
            class="form-control"
            id="imageUrl"
            placeholder="Image url"
            onChange={event => setImageUrl(event.target.value)}
          />
        </div>
        <div class="form-group mt-4">
          <label for="desc" className="fw-bold mb-2" style={{ fontSize: '1.2rem' }}>
            Description
          </label>
          <input
            type="text"
            class="form-control"
            id="desc"
            placeholder="Description"
            onChange={event => setDescription(event.target.value)}
          />
        </div>
        <button type="submit" class="btn btn-success mt-4 w-100">
          Save
        </button>
      </form>
    </div>
  );
};

export default PartForm;
