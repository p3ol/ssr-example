import { AccessContext } from '@poool/react-access';

import Auth from '../components/Auth';

const App = ({ Component, pageProps }) => (
  <Auth>
    <AccessContext
      appId="155PF-L7Q6Q-EB2GG-04TF8"
      config={{
        debug: true,
        cookies_enabled: true,
        custom_segment: 'react',
        cookies_domain: 'localhost',
      }}
      withAudit={true}
    >
      <Component {...pageProps} />
    </AccessContext>
  </Auth>
);

export default App;
