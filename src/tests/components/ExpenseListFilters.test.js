import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import { DateRangePicker } from 'react-dates';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate= jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate = {sortByDate}
      sortByAmount = {sortByAmount}
      setStartDate = {setStartDate}
      setEndDate = {setEndDate}
    />
  );
});

test('should render ExpenseListFilters with filters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data filters correctly', () => {
  wrapper.setProps({ filters: altFilters });
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  const value = 'rent';
  wrapper.find('input').prop('onChange')({ target: { value }});
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

// test('should sort by date', () => {
//   const value = 'date';
//   wrapper.setProps({ filters: altFilters });
  // wrapper.find('select').simulate('change', { 
  //   target: { value }
  // });
  // expect(sortByDate).toHaveBeenCalled();
  // expect(wrapper.find('select').prop('value')).toBe(value);
// });

// test('should sort by amount', () => {
//   const value = 'amount';
//   wrapper.find('select').simulate('change', {
//     target: { value }
//   });
//   expect(sortByAmount).toHaveBeenCalled();
// });

test('should handle date changes', () => {
  const startDate = moment(0).add(15, 'days');
  const endDate = moment(0).add(30, 'days');
  wrapper.find(DateRangePicker).prop('onDatesChange')({ startDate, endDate });
  //wrapper.find(SingleDatePicker).prop('onDateChange')(now);
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus changes', () => {
  const calendarFocused = 'endDate';
  wrapper.find(DateRangePicker).prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});