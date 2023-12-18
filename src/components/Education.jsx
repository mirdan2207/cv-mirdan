import React from 'react';

function Education({
  school,
  schoolPeriod,
  university,
  universityPeriod,
  specialization
}) {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold">Education</h2>
      <p className='text-lg'>{school} - {schoolPeriod}</p>
      <p className='text-lg'>{university} - {universityPeriod}</p>
      <p className='text-lg'>Specialization: {specialization}</p>
    </div>
  );
}

export default Education