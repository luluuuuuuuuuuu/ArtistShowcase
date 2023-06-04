import React, { useContext } from 'react';
import { TourMapContext } from '../Context/TourMapContext';

function TourMap() {
  const { concerts } = useContext(TourMapContext);

  console.log(concerts);

  return (
    <div>
      {/* Rest of your component */}
    </div>
  );
}

export default TourMap;

