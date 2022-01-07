import { Link } from 'react-router-dom';
import './App.css';

const App = () => (
  <div>
    <h1>Common UI toolkit</h1>
    <nav
      style={{
        borderBottom: 'solid 1px',
        paddingBottom: '1rem',
      }}
    >
      <Link to="/invoices">Invoices</Link>
      {' '}
      |
      {' '}
      <Link to="/expenses">Expenses</Link>
    </nav>
  </div>
);

export default App;
