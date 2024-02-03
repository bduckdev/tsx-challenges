type NavItem = {
  label: string;
  path: string;
};
const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "Counters", path: "/counters" },
  { label: "Cards", path: "/cards" },
];
function NavBar() {
  return (
    <nav className="pb-16">
      <div className="flex items-center bg-gray-700 rounded-xl px-10 py-5 justify-between">
        {navItems.map((item, i) => {
          return (
            <>
              <a
                key={i}
                href={item.path}
                className="bg-black mx-3 rounded-xl text-2xl underline underline-offset-4 p-4 font-medium text-gray-100"
              >
                {item.label}
              </a>
            </>
          );
        })}
      </div>
    </nav>
  );
}
export default NavBar;
