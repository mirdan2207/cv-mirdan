import React from 'react';

function Objective({ title }) {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold">Objective</h2>
      <p className='text-lg'>{title}</p>
    </div>
  );
}

export default Objective;