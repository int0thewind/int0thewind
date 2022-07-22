import Divider from './ui-components/Divider';
import { cvLink } from '../personal';
import Link from 'next/link';

type HeaderItems = {
  [key: string]: { link: string };
};

const headerItems: HeaderItems = {
  'About Me': { link: '/' },
  Works: { link: '/works' },
  CV: { link: cvLink },
};

const Header = () => (
  <header>
    <h1>Hanzhi Yin</h1>
    <Divider />
    <div className="flex flex-nowrap flex-row justify-evenly">
      {Object.entries(headerItems).map(([displayName, { link }]) => (
        <Link key={displayName} href={link} passHref>
          <h6 className="hover:underline hover:cursor-pointer">
            {displayName}
          </h6>
        </Link>
      ))}
    </div>
    <Divider />
  </header>
);

export default Header;
