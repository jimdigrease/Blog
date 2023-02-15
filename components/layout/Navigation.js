import Link from 'next/link';

import Logo from './Logo';
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <header className={styles.header}>
      <Link href="/">
        {/* Anchor-tag here needed because Link works as a regular link 
        only if contains a plain text, and not other components */}
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
