interface HamburgerProps { extraClass?: string }
const Hamburger = ({ extraClass = '' }: HamburgerProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 40 36"
    className={`size-6 ${extraClass}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="5" y="4" width="30" height="5" rx="2.5" fill="#D2691E" />
    <rect x="5" y="10" width="30" height="3" rx="1.5" fill="#228B22" />
    <rect x="5" y="14" width="30" height="3" rx="1.5" fill="#FFD700" />
    <rect x="5" y="18" width="30" height="4" rx="2" fill="#8B0000" />
    <rect x="5" y="24" width="30" height="5" rx="2.5" fill="#D2691E" />
  </svg>
);

export default Hamburger;
