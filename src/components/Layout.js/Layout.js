import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { selectBaseCurrency } from 'redux/selectors';

export const Layout = () => {
  const baseCurrency = useSelector(selectBaseCurrency);
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/rates">Rates</NavLink>
            </li>
          </ul>
        </nav>
        {baseCurrency && <p>Your base currency is {baseCurrency}</p>}
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
