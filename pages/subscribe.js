import Link from 'next/link';
import { Pixel, useAudit } from '@poool/react-access';

import Header from '../components/Header';

const Subscribe = () => {
  const { lib: audit } = useAudit();

  const onLogin = () => {
    audit?.sendEvent('page-view', 'subscription');
  };

  return (
    <div className="page home">
      <div className="container">
        <Header onLogin={onLogin} />

        { /* eslint-disable max-len */}
        <h1>Our offers</h1>
        <p>This is a subscription page, without any paywall, where you list all your subscription offers.</p>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/premium">Premium post</Link></li>
          <li><Link href="/free">Free post</Link></li>
        </ul>
        { /* eslint-enable max-len */}
      </div>

      <Pixel type="page-view" data={{ type: 'subscription' }} />
    </div>
  );
};

export default Subscribe;
