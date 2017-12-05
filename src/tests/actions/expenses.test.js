import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense( '123abc', {
    description: 'I love bagels',
    amount: 12300,
    note: 'Don\'t mess with me'
  });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      description: 'I love bagels',
      amount: 12300,
      note: 'Don\'t mess with me'
    }
  });
});

test('should setup add expense action object with provided values', () => {
  const data = {
    description: 'Coffee',
    note: 'Expensive ass coffee',
    amount: 999,
    createdAt: 1000
  };
  const action = addExpense(data);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...data,
      id: expect.any(String)
    }
  });
});

test('should setup add expense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  })  
});