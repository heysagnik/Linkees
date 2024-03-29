import React from 'react';

import '../../css/skeleton.css';
import '../../css/components.css';

function Footer(): JSX.Element {
  return (
    <div className="Footer container pb-10">
      <p>
        Made with <span className="heart">❤️</span> by <a href={'https://twitter.com/heysagnik'}>Sagnik Sahoo</a>
      </p>
    </div>
  );
}

export default Footer;
