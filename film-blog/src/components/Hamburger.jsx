import useHamburgerMenu from '../hooks/useHamburgerMenu';

const Hamburger = () => {
  const { isExpanded, toggleMenu } = useHamburgerMenu();

  return (
    <button 
      onClick={toggleMenu}
      id="hamburger" 
      aria-expanded={isExpanded}    
    >
      <span>Menu</span>
      <span id="expanded">expanded</span>
      <svg viewBox='0 0 10 8' width='35'>
        <path aria-hidden="true"
              d='M1 1h8M1 4h 8M1 7h8' 
              stroke='#fff' 
              strokeWidth='1' 
              strokeLinecap='round'
        />
      </svg>
    </button>
  )
}

export default Hamburger;