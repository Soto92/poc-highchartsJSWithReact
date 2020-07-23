import React, { useState } from 'react';
import { render } from 'react-dom';
import { SplineChart } from './charts/spline';
import { MapChart } from './charts/map';
import { HighStockChart } from './charts/highStock';

const App = () => {
  const [actualChart, setActualChart] = useState('spline');

  const renderChart = () => {
    switch (actualChart) {
      case 'spline':
        return <SplineChart />;
      case 'map':
        return <MapChart />;
      case 'highStock':
        return <HighStockChart />;
      default:
        return <SplineChart />;
    }
  };

  return (
    <div>
      <button onClick={() => setActualChart('spline')}>chart1</button>
      <button onClick={() => setActualChart('map')}>chart2</button>
      <button onClick={() => setActualChart('highStock')}>chart3</button>
      <div>{renderChart()}</div>
    </div>
  );
};

render(<App />, document.getElementById('root'));
