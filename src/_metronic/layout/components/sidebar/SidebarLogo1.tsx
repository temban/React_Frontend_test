// SidebarLogo.tsx

import { Link } from 'react-router-dom';
import { toAbsoluteUrl } from '../../../helpers';
import { useLayout } from '../../core';
// import { SidebarMenuItem } from './sidebar-menu/SidebarMenuItem';

const SidebarLogo1 = () => {
  const { config } = useLayout();
  const appSidebarDefaultMinimizeDesktopEnabled =
    config?.app?.sidebar?.default?.minimize?.desktop?.enabled;
  const appSidebarDefaultCollapseDesktopEnabled =
    config?.app?.sidebar?.default?.collapse?.desktop?.enabled;

  return (
    <div className='app-sidebar-logo px-10' id='kt_app_sidebar_logo' style={{ paddingTop: '2rem'}}>
      <Link to='/dashboard'>
        {config.layoutType === 'dark-sidebar' ? (
          <img
            alt='Logo'
            src={toAbsoluteUrl('/media/logos/default-small.png')}
            className='h-45px app-sidebar-logo-default'
          />
        ) : (
          <>
            <img
              alt='Logo'
              src={toAbsoluteUrl('/media/logos/default-small.png')}
              className='h-45px app-sidebar-logo-default theme-light-show'
            />
            <img
              alt='Logo'
              src={toAbsoluteUrl('/media/logos/default-small.png')}
              className='h-45px app-sidebar-logo-default theme-dark-show'
            />
          </>
        )}

        <img
          alt='Logo'
          src={toAbsoluteUrl('/media/logos/default-small.png')}
          className='h-20px app-sidebar-logo-minimize'
        />
      </Link>

      {/* <SidebarMenuItem
        to='/builder'
        icon='/media/icons/duotune/general/gen019.svg'
        title='Layout Builder'
        fontIcon='bi-layers'
      />

      <SidebarMenuItem
        to='/builder'
        icon='/media/icons/duotune/general/gen019.svg'
        title='Layout Builder'
        fontIcon='bi-layers'
      /> */}

      {(appSidebarDefaultMinimizeDesktopEnabled ||
        appSidebarDefaultCollapseDesktopEnabled) }
    </div>
  );
};

export { SidebarLogo1 }; // Ensure SidebarLogo is exported

// Add an empty export if need