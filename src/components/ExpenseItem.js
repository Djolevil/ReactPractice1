import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className='expense-item'>
      <div>February 19th 2022</div>
      <div className='expense-item__description'>
        <h2>Dog Food</h2>
        <div className='expense-item__price'>$90</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
