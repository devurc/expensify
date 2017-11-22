import React from 'react';

const EditExpensePage = ({ match }) => {
  console.log(match);
  return (
    <div>
      This is from my edit component with id of {match.params.id}
    </div>
  );
}
export default EditExpensePage;