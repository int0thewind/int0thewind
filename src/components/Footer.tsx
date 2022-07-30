import ThemeSwitch from './ThemeSwitch';
import Divider from './ui-components/Divider';

const Footer = () => {
  return (
    <footer>
      <Divider />
      <div className="flex justify-between">
        <ThemeSwitch />
      </div>
    </footer>
  );
};

export default Footer;
