import React from 'react';

function AdditionalInformation({ militaryStatus }) {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold">Additional Information</h2>
      <p className='text-lg'>Military obligation status: {militaryStatus}</p>
    </div>
  );
}

export default AdditionalInformation;