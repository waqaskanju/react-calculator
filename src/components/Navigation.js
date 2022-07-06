import { Link } from 'react-router-dom';
import '../index.css';

export default function Navigation() {
  return (
    <div className="top-container">
      <h1 className="m-r">Math Magicians</h1>
      <nav
        style={{
          marginTop: '2.5rem',
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
