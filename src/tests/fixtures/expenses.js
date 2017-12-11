import moment from 'moment';

export default [
  {
    id: '1',
    description: 'Gum',
    amount: 256,
    note: 'Good',
    createdAt: 0
  }, {
    id: '2',
    description: 'Rent',
    amount: 2500,
    note: 'November',
    createdAt: moment(0).subtract(4, 'days').valueOf()
  }, {
    id: '3',
    description: 'Credit Card',
    amount: 1560,
    note: 'November',
    createdAt: moment(0).add(4, 'days').valueOf()
  }
];