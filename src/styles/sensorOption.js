const badAreaColor = 'rgba(240, 76, 38, 0.6)'
const badLineColor = 'rgba(240, 76, 38, 0.6)'

export default {
  humidity: {
    name: 'humidity',
    unit: '%',
    yMin: 0,
    yMax: 100,
    splitY: 25,
    colorName: 'purple',
    goodAreaColor: 'rgba(194, 112, 208, 0.9)',
    goodLineColor: 'rgb(194, 112, 208)',
    badAreaColor: badAreaColor,
    badLineColor: badLineColor
  },
  sunlight: {
    name: 'light',
    unit: '%',
    yMin: 0,
    yMax: 100,
    splitY: 25,
    colorName: 'amber',
    goodAreaColor: 'rgba(237, 213, 43, 0.9)',
    goodLineColor: 'rgb(235, 183, 82)',
    badAreaColor: badAreaColor,
    badLineColor: badLineColor
  },
  temperature: {
    name: 'temperature',
    unit: '°F', // '°C',
    yMin: 0,
    yMax: 100,
    splitY: 10,
    colorName: 'grey',
    goodAreaColor: 'rgba(154, 154, 154, 0.9)',
    goodLineColor: 'rgb(154, 154, 154)',
    badAreaColor: badAreaColor,
    badLineColor: badLineColor
  },
  moisture: {
    name: 'moisture',
    unit: '%',
    yMin: 0,
    yMax: 100,
    splitY: 25,
    colorName: 'light-blue',
    goodAreaColor: 'rgba(62, 195, 244, 0.7)',
    goodLineColor: 'rgb(62, 195, 244)',
    badAreaColor: badAreaColor,
    badLineColor: badLineColor
  }
}
