// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 23;
// if (x === 23) console.log('yeah');

// const calAge = (birthYear) => {
//   return 2037 - birthYear;
// };

// console.log(1991);

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calTempAmplitude = (t1, t2) => {
//   const temps = t1.concat(t2);
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     if (typeof temps[i] === 'number') {
//       if (temps[i] > max) {
//         max = temps[i];
//       } else if (temps[i] < min) {
//         min = temps[i];
//       }
//     }
//   }

//   return max - min;
// };

// const Amplitude = calTempAmplitude([3, 5, 1], [9, 0, 5]);
// console.log(Amplitude);

// const measureKelvin = function () {
//   const messurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: prompt('Degree Celsius'),
//   };

//   const kelvin = Number(messurement.value) + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

//Coding challenge 1

// const tempratureData1 = [17, 21, 23];
// const temperatureData2 = [12, 5, -5, 0, 4];
// const temperature = tempratureData1.concat(temperatureData2);
// const printForecast = (temp) => {
//   let str = '';
//   for (let i = 0; i < temp.length; i++) {
//     str += `.... ${temp[i]}°C in ${i + 1} days`;
//   }
//   return str;
// };

// console.log(printForecast(temperature));
