import { header, headerTitle } from "./Header.style";

const Header = () => {
  return (
    <header css={header}>
      <span className="material-symbols-outlined">menu</span>
      <h1 css={headerTitle}>KUVIS</h1>
    </header>
  );
};

export default Header;
