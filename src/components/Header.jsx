import { Link } from 'react-router-dom';

import Navbar from './Navbar';

import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '../firebase.config';

import { ReactComponent as Logo } from '../assets/svg/logo.svg';

function Header() {
  const [user, loading] = useAuthState(auth);

  return (
    <header className="px-3">
      <div className="w-full max-w-7xl mx-auto flex items-center py-5">
        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-xl text-gray-900 hover:opacity-90">
          <Logo className="w-12 h-14 sm:w-50 sm:h-50 text-primary" />
          <span className="hidden sm:block">connEx</span>
        </Link>
        {!loading && <Navbar loggedIn={!!user} />}
      </div>
    </header>
  );
}

export default Header;
