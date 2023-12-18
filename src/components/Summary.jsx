import React from 'react';

function Summary({ children }) {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold">Summary</h2>
      <p className='text-lg'>{children}</p>
    </div>
  );
}

export default Summary;