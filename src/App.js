import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    { id: 'e1', title: 'Dog Food', amount: 90, date: new Date(2022, 1, 19) },
    { id: 'e2', title: 'Milk', amount: 20, date: new Date(2022, 1, 20) },
    { id: 'e3', title: 'Light Bulbs', amount: 30, date: new Date(2022, 1, 21) },
    { id: 'e4', title: 'Fruit', amount: 32, date: new Date(2022, 1, 22) },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
