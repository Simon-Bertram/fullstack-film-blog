import { useEffect, useState} from 'react';

const useHamburgerToggler = () => {
  useEffect(() => {
    // progressive enhancement
    document.body.classList.toggle('js-enabled');

    const handleDOMContentLoaded = () => {
      let hamburger = document.getElementById('hamburger');
      // If JS is enabled, it will un-expand the hamburger
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.onclick = () => hamburger.toggleAttribute('aria-expanded');
    };

    document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);

    return () => {
      document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded);
    };
  }, []);

  return null; // or any other JSX if needed
};

export default useHamburgerToggler;