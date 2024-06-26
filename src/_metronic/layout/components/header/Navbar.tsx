import clsx from 'clsx'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {HeaderNotificationsMenu, HeaderUserMenu, Search, ThemeModeSwitcher} from '../../../partials'
import {useLayout} from '../../core'
import SVG from 'react-inlinesvg'
import { Languages } from '../../../partials/layout/header-menus/Languages'

const itemClass = 'ms-1 ms-lg-3'
const btnClass =
  'btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px'
const userAvatarClass = 'symbol-35px symbol-md-40px'
const btnIconClass = 'svg-icon-1'

const Navbar = () => {
  const {config} = useLayout()
  return (
    <div className='app-navbar flex-shrink-0'>
  



  <div className="center" style={{ 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'space-between', 
  padding: '1rem', 
  borderRadius: '5px', 
  backgroundColor: 'rgb(209, 242, 255)', 
  width: '13rem', 
  height: "4rem",
  marginRight: "4rem",
  marginTop: "0.8rem",
  position: 'relative'
}}>
  <div className="tm" style={{ display: 'flex', alignItems: 'center' }}>
    <div className="clock" style={{ marginRight: '0.5rem' }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" style={{fontWeight:"700", color: "rgb(58, 173, 219)"}} width="1.7rem" height="1.7rem" fill="currentColor" className="bi bi-clock">
        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"></path>
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"></path>
      </svg>
    </div>
    <div className="dets" style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="date" style={{fontSize: "0.8rem", color: "rgb(58, 173, 219)"}}>Wed, 26 Jun</div>
      <div className="time" style={{fontSize: "1.3rem", fontWeight:"700", color: "rgb(58, 173, 219)", marginLeft: "0.8rem"}}>5:41</div>
    </div>
  </div>
  <div className="notif" style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1.5rem" height="1.5rem" fill="currentColor" className="bi bi-bell">
      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"></path>
    </svg>
    <span className="news" style={{ 
      position: 'absolute', 
      top: '-1rem', 
      left: '-0.5rem', 
      backgroundColor: 'orange', 
      color: 'white', 
      padding: '0.1rem 0.2rem', 
      borderRadius: '5px',
      fontSize: '0.6rem' 
    }}>News</span>
    <span className="numb" style={{ 
      position: 'absolute', 
      top: '1rem', 
      right: '-0.5rem', 
      backgroundColor: '#ff9246', 
      color: 'white', 
      padding: '0.1rem 0.3rem', 
      borderRadius: '50%', 
      fontSize: '0.6rem' 
    }}>3</span>
  </div>
</div>


      <svg xmlns="http://www.w3.org/2000/svg" style={{marginTop: "2rem", marginRight: "3rem"}} viewBox="0 0 16 16" width="1.5rem" height="1.5rem" fill="currentColor" className="bi bi-grid"><path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"></path></svg>

      <div className="bell" style={{ 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center', 
  padding: '1rem', 
  borderRadius: '5px', 
  backgroundColor: 'rgba(255, 165, 0, 0.2)', // light orange background
  width: 'fit-content', 
  height: "4rem",
  position: 'relative',
  marginTop: "0.8rem"}}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1.5rem" height="1.5rem" fill="currentColor" className="bi bi-bell">
    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"></path>
  </svg>
  <span style={{ 
    position: 'absolute', 
    top: '2rem', // Adjust this value to fine-tune the vertical position
    right: '0.5rem', // Adjust this value to fine-tune the horizontal position
    backgroundColor: 'red', 
    color: 'white', 
    padding: '0.1rem 0.3rem', 
    borderRadius: '50%', 
    fontSize: '0.2rem', 
    height: "0.7rem",
    width: "0.7rem"
  }}>2</span>
</div>


<div style={{marginTop: "2rem", marginRight: "1rem"}}>
<Languages />
</div>

      <div className={clsx('app-navbar-item', itemClass)}>
        <div
          className={clsx('cursor-pointer symbol', userAvatarClass)}
          data-kt-menu-trigger="{default: 'click'}"
          data-kt-menu-attach='parent'
          data-kt-menu-placement='bottom-end'
        >
          <img src={toAbsoluteUrl('/media/avatars/300-1.jpg')} alt='' />
        </div>
        <HeaderUserMenu />
      </div>

      {config.app?.header?.default?.menu?.display && (
        <div className='app-navbar-item d-lg-none ms-2 me-n3' title='Show header menu'>
          <div
            className='btn btn-icon btn-active-color-primary w-35px h-35px'
            id='kt_app_header_menu_toggle'
          >
            <KTSVG path='/media/icons/duotune/text/txt001.svg' className={btnIconClass} />
          </div>
        </div>
      )}

<div style={{ marginRight: "0.8rem", marginLeft: "0.8rem",  marginTop: "1rem",
}}>
        <div style={{ fontWeight: "bold" }}>Temban</div>
        <div style={{ fontSize: "small", color: "gray" }}>blaise@gmail.com</div>
      </div>
    </div>

    
  )
}

export {Navbar}
