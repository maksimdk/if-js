const date = '2020-11-26';
const getDate = (str) => {
  const re = /(?<year>\d{2,4})-(?<month>\d{1,2})-(?<day>\d{1,2})/;
  const arr = str.split('-');
  if (arr[1] > 12 || arr[2] > 31) {
    return console.log('Введи корректную дату!');
  }
  return str.replace(re, '$<day>.$<month>.$<year>');
};
console.log(getDate(date));

//=============================================================

const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];

const searchMatches = (str) => {
  const arr = [];
  for (let i = 0; i < data.length; i++) {
    if (
      data[i].country.toLowerCase().includes(str.toLowerCase()) ||
      data[i].city.toLowerCase().includes(str.toLowerCase()) ||
      data[i].hotel.toLowerCase().includes(str.toLowerCase())
    ) {
      arr.push(`${data[i].country}, ${data[i].city}, ${data[i].hotel}`);
    }
  }
  if (arr.length === 0) {
    return console.log('Введи корректное значение!');
  }
  return arr;
};
console.log(searchMatches('Germ'));
