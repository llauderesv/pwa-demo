import React, { useEffect, useState } from 'react';

import './index.scss';

const withConnectionStateHeader = WrappedComponent => {
  function ConnectionStateHeader() {
    const offline = useConnectionState();
    const [close, setClose] = useState(false);

    return (
      <React.Fragment>
        {offline && !close ? (
          <div
            style={{ borderRadius: '0' }}
            className="alert alert-dismissible alert-warning"
          >
            <button
              onClick={() => setClose(true)}
              type="button"
              className="close"
              data-dismiss="alert"
            >
              &times;
            </button>
            <h4 className="alert-heading">Connection Error</h4>
            <p className="mb-0">
              <strong>Sorry</strong> there was a problem in your internet.
            </p>
          </div>
        ) : null}
        <WrappedComponent />
      </React.Fragment>
    );
  }

  return ConnectionStateHeader;
};

function useConnectionState() {
  const [offline, setConnectionState] = useState(!navigator.onLine);

  function handleConnectionState() {
    setConnectionState(!navigator.onLine);
  }

  // Bind the window online, offline event...
  useEffect(() => {
    window.addEventListener('online', handleConnectionState);
    window.addEventListener('offline', handleConnectionState);

    // Clean up the event once already used...
    return () => {
      window.removeEventListener('online', handleConnectionState);
      window.removeEventListener('offline', handleConnectionState);
    };
  });

  return offline;
}

export default withConnectionStateHeader;
