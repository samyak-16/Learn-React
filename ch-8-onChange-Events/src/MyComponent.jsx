import { useState } from 'react';

function MyComponet() {
  const [name, setName] = useState('Guest');
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState('');
  const [payment, setPayment] = useState('');
  const [shipping, setShipping] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };
  const handlePaymentChange = (e) => {
    setPayment(e.target.value);
  };
  const handleShippingChange = (e) => {
    setShipping(e.target.value);
  };
  return (
    <>
      <input value={name} type='text' onChange={handleNameChange} />
      <div>Name : {name}</div>
      <input value={quantity} type='number' onChange={handleQuantityChange} />
      <div>Quantity : {quantity}</div>
      <textarea
        name='comment'
        id='comment'
        value={comment}
        onChange={handleCommentChange}
        placeholder='Enter Your Comment'
      ></textarea>
      <div>Comment : {comment}</div>
      <select value={payment} onChange={handlePaymentChange}>
        <option value=''>Select an Option</option>
        <option value='visa'>Visa</option>
        <option value='MasterCard'>Master Card</option>
        <option value='GiftCard'>Gift Card</option>
      </select>
      <div>Payment Option = {payment}</div>
      {
        //  Click an option → that option’s value is copied into the select element.
        // Then onChange fires on the <select>.
        // React reads select.value → saves it into payment.
        // Controlled <select> ensures the UI and state stay in sync.
      }

      <div>
        <label>
          <input
            type='radio'
            value='Pick Up'
            checked={shipping === 'Pick Up'}
            onChange={handleShippingChange}
          />
          Pick Up
        </label>
      </div>
      <div>
        <label> 
          <input
            type='radio'
            value='Delivery'
            checked={shipping === 'Delivery'}
            onChange={handleShippingChange}
          />
          Delivery
        </label>
      </div>
      <p>Delivery Option = {shipping}</p>

      {
        // Makes forms easier to use (click text to check/select).
        // Improves accessibility for screen readers.
        // Gives semantic meaning to inputs in HTML.
      }
    </>
  );
}
export default MyComponet;
