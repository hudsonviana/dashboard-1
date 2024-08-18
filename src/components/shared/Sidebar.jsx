import { FcBullish } from 'react-icons/fc';
import { Link, NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from '../../libs/consts/Navigation';
import { HiOutlineLogout } from 'react-icons/hi';

const linkClass =
  'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base';

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-neutral-900 w-60 p-3 text-white">
      <div className="flex items-center gap-2 px-1 py-3">
        <FcBullish fontSize={24} />
        <span className="text-neutral-100 text-lg">OpenShop</span>
      </div>
      <div className="py-8 flex flex-1 flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
        <div>
          <Link className={classNames('text-red-500', linkClass)}>
            <span className="text-xl">
              <HiOutlineLogout />
            </span>
            Sair
          </Link>
        </div>
      </div>
    </div>
  );
};

const SidebarLink = ({ item }) => {
  const { pathname } = useLocation();

  return (
    <NavLink
      to={item.path}
      className={classNames(
        pathname === item.path ? 'text-white' : 'text-sky-400',
        linkClass
      )}
    >
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </NavLink>
  );
};

// https://github.com/devaarx/openshop-analytics-dashboard/blob/main/src/components/shared/Sidebar.jsx

// https://www.youtube.com/watch?v=udmuN-BZtIM&list=PLwHsNjmBZ-MJnVNyiaVYHW_dDA5n3mbVk&index=3

export default Sidebar;
