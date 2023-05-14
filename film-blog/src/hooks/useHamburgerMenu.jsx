import { useState, useEffect } from 'react';

const useHamburgerMenu = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Add or remove the 'expanded' class based on the 'isExpanded' state
    const hamburger = document.getElementById('hamburger');
    if (hamburger) {
      if (isExpanded) {
        hamburger.classList.add('expanded');
      } else {
        hamburger.classList.remove('expanded');
      }
    }
  }, [isExpanded]);

  const toggleMenu = () => {
    setIsExpanded((prevExpanded) => !prevExpanded);
  };

  return { isExpanded, toggleMenu };
};

export default useHamburgerMenu;
