import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { mapDataBrazil } from './brazilMap.utils';

export const MapChart = () => {
  require('highcharts/modules/map')(Highcharts);
  const data = [
    ['br-sp', 76],
    ['br-ma', 94],
    ['br-pa', 81],
    ['br-sc', 61],
    ['br-ba', 53],
    ['br-ap', 100],
    ['br-ms', 1],
    ['br-mg', 59],
    ['br-go', 50],
    ['br-rs', 73],
    ['br-to', 10],
    ['br-pi', 50],
    ['br-al', 69],
    ['br-pb', 65],
    ['br-ce', 89],
    ['br-se', 56],
    ['br-rr', 50],
    ['br-pe', 52],
    ['br-pr', 40],
    ['br-es', 72],
    ['br-rj', 86], 
    ['br-rn', 86],
    ['br-am', 79],
    ['br-mt', 12],
    ['br-df', 50],
    ['br-ac', 23],
    ['br-ro', 31],
  ];

  const mapOptions = {
    title: {
      text: 'Taxa de ocupação de leitos de UTI (%)',
    },
    colorAxis: {
      min: 0,
      stops: [
        [0, '#93F97E'],
        [0.25, '#F0E311'],
        [0.50, '#CA8307'],
        [1, '#B20505'],
      ],
    },
    series: [
      {
        mapData: mapDataBrazil,
        name: 'Brazil',
        data: data,
      },
    ],
  };
  return (
    <div>
      <HighchartsReact
        options={mapOptions}
        constructorType={'mapChart'}
        highcharts={Highcharts}
      />
    </div>
  );
};
