import React from 'react';

const ZoomPage = () => {
  const url = 'https://us04web.zoom.us/j/76935647861?pwd=xbdgzR8mnDqKXlFf2Ade8adBQTvdNS.1';

  return (
    <div>
      <iframe
      src={url}
      width="100%"
      height="100%"
      frameBorder="0"
      allow="microphone; camera"
    />
    </div>
  );
};

export default ZoomPage;