export default function SidebarItem({ atcClass, icon, title }) {
  return (
    <div className={`sidebarItem ${atcClass}`}>
      <span className="siderbarItemIcon"> {icon}</span>
      <h2 className="sidebarItemTitle">{title}</h2>
    </div>
  );
}
