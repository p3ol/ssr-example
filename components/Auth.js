import { useCallback, useState } from 'react';

import { AuthContext } from '../services/contexts';

const Auth = ({ children }) => {
  const [connecting, setConnecting] = useState(false);
  const [connected, setConnected] = useState(false);
  const [premium, setPremium] = useState(false);

  const login = useCallback(async e => {
    e?.preventDefault();

    if (connecting) {
      return;
    }

    setConnecting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));

    setConnecting(false);
    setConnected(true);
    setPremium(true);
  }, [connecting]);

  const getContext = useCallback(() => ({
    login,
    connecting,
    connected,
    premium,
  }), [connecting, connected, premium, login]);

  return (
    <AuthContext.Provider value={getContext()}>
      { children }
    </AuthContext.Provider>
  );
};

export default Auth;
