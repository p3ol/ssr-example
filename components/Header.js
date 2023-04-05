import Link from 'next/link';

import { useAuth } from '../services/hooks';

const Header = ({ onLogin = () => {} }) => {
  const { login, connecting, connected } = useAuth();

  const login_ = () => {
    login();
    onLogin();
  };

  return (
    <header className="mb-5">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link href="/" className="navbar-brand">Newspaper</Link>
        <div className="collapse navbar-collapse">
          <div className="navbar-nav">
            <Link href="/" className="nav-item nav-link">
              Home
            </Link>
            <Link href="/premium" className="nav-item nav-link">
              Premium post
            </Link>
            <Link href="/free" className="nav-item nav-link">
              Free Post
            </Link>
            <Link href="/subscribe" className="nav-item nav-link">
              Subscribe now!
            </Link>
          </div>
        </div>

        <span className="navbar-text">
          { connecting ? (
            <span>Connecting...</span>
          ) : connected ? (
            <span>Signed as: <strong>Rick Sanchez</strong></span>
          ) : (
            <a href="#" onClick={login_}>Sign in</a>
          ) }
        </span>
      </nav>
    </header>
  );
};

export default Header;
