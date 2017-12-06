import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should set up default filters values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });

  expect(state).toEqual({
    text: '',
    sortBy: 'data',
    startDate: moment().startOf('month')
    endDate: moment().endOf('month')
  });

});