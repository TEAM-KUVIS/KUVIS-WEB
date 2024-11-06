import { sidebarContainer, sidebarList, sidebarMenu } from "./Sidebar.style";

interface SidebarProps {
  menuList: { name: string; selected: boolean }[];
}

const Sidebar = ({ menuList }: SidebarProps) => {
  return (
    <aside css={sidebarContainer}>
      <ul css={sidebarList}>
        {menuList.map((item) => (
          <li css={sidebarMenu(item.selected)} key={item.name}>
            {item.name}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
