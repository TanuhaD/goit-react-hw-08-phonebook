import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
import UserMenu from '../UserMenu/UserMenu';

const SharedLayout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <header className="header">
        {isLoggedIn ? (
          <>
            <UserMenu />
            <NavLink className="headerLink" to="/phonebook">
              Phonebook
            </NavLink>
          </>
        ) : (
          <>
            <NavLink className="headerLink" to="/registration">
              Register
            </NavLink>
            <NavLink className="headerLink" to="/">
              Login
            </NavLink>
          </>
        )}
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default SharedLayout;
