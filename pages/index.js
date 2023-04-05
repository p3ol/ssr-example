import { useCallback, useEffect } from 'react';
import Link from 'next/link';
import { useAudit } from '@poool/react-access';

import { useAuth } from '../services/hooks';
import Header from '../components/Header';

const Home = () => {
  const { lib: audit, config } = useAudit();
  const { premium } = useAuth();

  const init = useCallback(() => {
    audit?.config({
      ...config,
      user_is_premium: premium || false,
    });
  }, [audit, config, premium]);

  useEffect(() => {
    init();
  }, [audit, init]);

  const onLogin = useCallback(() => {
    init();
  }, [init]);
  
  return (
    <div className="page home">
      <div className="container">
        <Header onLogin={onLogin} />
        <h1>Home</h1>
        <p>
          This is a normal page, without any paywall, with premium &
          free posts
        </p>
        <ul>
          <li><Link href="/premium">Premium post</Link></li>
          <li><Link href="/free">Free post</Link></li>
          <li><Link href="/subscribe">Subscribe now!</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
