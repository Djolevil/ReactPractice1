import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expenses = [
    { id: 'e1', title: 'Dog Food', amount: 90, date: new Date(2022, 1, 19) },
    { id: 'e2', title: 'Milk', amount: 20, date: new Date(2022, 1, 20) },
    { id: 'e3', title: 'Light Bulbs', amount: 30, date: new Date(2022, 1, 21) },
    { id: 'e4', title: 'Fruit', amount: 32, date: new Date(2022, 1, 22) },
  ];
  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
