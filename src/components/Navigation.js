import { Link } from 'react-router-dom';
import '../index.css';

export default function Navigation() {
  return (
    <div>
      <h1>Math Magicians</h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to="/">Home</Link>
        {' '}
        |
        {' '}
        <Link to="/calculator">Calculator</Link>
        {' '}
        |
        {' '}
        <Link to="/quote">Quote</Link>
      </nav>
    </div>
  );
}
