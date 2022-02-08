import Link from 'next/link';

import Logo from './Logo';

const Navigation = () => {
  return (
    <header className='navigation__header'>
      <Link href='/'>
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href='/post'>Posts</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
