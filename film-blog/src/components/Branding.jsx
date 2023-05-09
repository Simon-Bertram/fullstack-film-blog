import { GiFilmStrip } from 'react-icons/gi';

const Branding = () => {
  return (
    <a className='nav-branding'>
      <GiFilmStrip className='film-strip-icon' />
      <h1 className='main-title'>Film-zilla Reviews</h1>
    </a>
  )
}

export default Branding;