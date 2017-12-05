import moment from 'moment';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';

test('should setup setTextFilter action object with provided value', () => {
  const action = setTextFilter('bill');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'bill'
  });
});

test('should setup setTextFilter action object with default value', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should setup sortByDate action object', () => {
  expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
});

test('should setup sortByAmount action object', () => {
  expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
});

test('should setup setStartDate action object', () => {
  const action = setStartDate(moment().startOf('month'));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment().startOf('month')
  });
}); 

test('should setup setEndDate action object', () => {
  const action = setEndDate(moment().endOf('month'));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment().endOf('month')
  });
}); 