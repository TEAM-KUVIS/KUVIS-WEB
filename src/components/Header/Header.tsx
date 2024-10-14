import {
  header,
  headerLeft,
  headerRight,
  headerSection,
  headerTitle,
} from "./Header.style";

const Header = () => {
  return (
    <header css={header}>
      <section css={[headerSection, headerLeft]}>
        <span className="material-symbols-outlined">menu</span>
      </section>
      <h1 css={[headerSection, headerTitle]}>KUVIS</h1>
      <section css={[headerSection, headerRight]}></section>
    </header>
  );
};

export default Header;
