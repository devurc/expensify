import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should setup default state', () => {
  const action = { type: '@@INIT' };
  const state = expensesReducer(undefined, action);

  expect(state).toEqual([]);
});

test('should add an expense', () => {
  const expense = {
    id: '4',
    description: 'Hello',
    amount: 10000,
    note: '',
    createdAt: moment()
  };
  const action = { 
    type: 'ADD_EXPENSE', 
    expense
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual([...expenses, expense]);
});

test('should remove an expense', () => {
  const id = expenses[1].id;
  const action = {
    type: 'REMOVE_EXPENSE',
    id
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove an expense if id not found', () => {
  const id = '-1';
  const action = {
    type: 'REMOVE_EXPENSE',
    id
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should edit an expense', () => {
  const updates = {
    description: 'Goodbye',
    amount: 15000,
    note: 'I changed this',
    createdAt: moment()
  };
  const id = expenses[1].id;
  const action = {
    type: 'EDIT_EXPENSE',
    id,
    updates
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual([
    expenses[0], { id, ...updates }, expenses[2]
  ]);
});

test('should not edit an expense if id not found', () => {
  const id = '-1';
  const action = {
    type: 'EDIT_EXPENSE',
    id
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});