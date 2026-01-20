
import React from 'react';
import { useLocation } from 'react-router-dom';

function Order() {
  const location = useLocation();
  const carId = location.state?.carId;

  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-semibold mb-6">Order Page</h2>
      {carId ? (
        <p>You are ordering car with ID: <strong>{carId}</strong></p>
      ) : (
        <p>Please select a car from the listing page.</p>
      )}
      {/* You can add form fields here (name, contact, payment, etc) */}
    </div>
  );
}

export default Order;
