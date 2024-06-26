import React from 'react';
import { KTSVG } from '../../../helpers';
import { useLayout } from '../../core';

const btnIconClass = 'svg-icon-1';

const Navbar2 = () => {
  const { config } = useLayout();
  return (
    <div className='app-navbar flex-shrink-0 d-flex'>
      {/* Text at the left end */}
      <div style={{ marginRight: "40rem",  marginTop: "1rem",
}}>
        <div style={{ fontWeight: "bold" }}>Leads</div>
        <div style={{ fontSize: "small", color: "gray" }}>view all leads</div>
      </div>

      <span style={{
        marginRight: "8rem",
        marginTop: "0.5rem",
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#9c27b0',
        color: 'white',
        width: '86px',
        height: '30px',
        borderRadius: "5px"
      }}>
        1146 x 120
      </span>

      <div style={{ marginTop: "1.3rem", marginRight: "1rem" }} 
        className='card-toolbar'
        data-bs-toggle='tooltip'
        data-bs-placement='top'
        title='Click to add a user'>
        <a style={{ width: "14rem", color: "#ff9246", border: "2px solid #ff9246", background: "white" }}
          href='#'
          className='btn btn-sm btn-light-warning'
          data-bs-toggle='modal'
          data-bs-target='#kt_modal_invite_friends'>
          Download
        </a>
      </div>

      <div style={{ marginTop: "1.2rem" }}
        className='card-toolbar'
        data-bs-toggle='tooltip'
        data-bs-placement='top'
        data-bs-trigger='hover'
        title='Click to add a user'>
        <a style={{ width: "14rem", color: "white", background: "#ff9246" }}
          href='#'
          className='btn btn-sm'
          data-bs-toggle='modal'
          data-bs-target='#kt_modal_invite_friends'>
          <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
          Add Leads
        </a>
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
    </div>
  );
};

export { Navbar2 };
