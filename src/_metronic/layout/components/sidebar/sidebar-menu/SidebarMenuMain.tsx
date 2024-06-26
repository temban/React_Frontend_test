/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'

const SidebarMenuMain = () => {
  const intl = useIntl()

  return (
    <>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: "3rem", marginTop: "3rem" }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1.5rem" height="1.5rem" fill="currentColor" className="bi bi-bar-chart">
        <path d="M4 11H2v3h2zm5-4H7v7h2zm5-5v12h-2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z"></path>
      </svg>
      <SidebarMenuItem
        to='/o'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
      />
    </div>
      
      {/* <SidebarMenuItem
        to='/builder'
        icon='/media/icons/duotune/general/gen019.svg'
        title='Layout Builder'
        fontIcon='bi-layers'
      /> */}
      <div className='cuter'>
      </div>

      <div style={{  }}>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.5rem" height="1.5rem" fill="currentColor">
  <rect x="4" y="10" width="2" height="10"/>
  <rect x="8" y="6" width="2" height="14"/>
  <rect x="12" y="8" width="2" height="12"/>
  <rect x="16" y="4" width="2" height="16"/>
</svg>  <SidebarMenuItem to='/builder' title='Admin & Payroll' fontIcon='bi-layers' />
</div>

<div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1.5rem" height="1.5rem" fill="currentColor" className="bi bi-building"><path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"></path></svg>
  <SidebarMenuItem to='/p' title='Operation & Transport' fontIcon='bi-layers' />
</div>

<div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1.5rem" height="1.5rem" fill="currentColor" className="bi bi-briefcase"><path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5"></path></svg>
  <SidebarMenuItem to='/6' title='Legal' fontIcon='bi-layers' />
</div>

<div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1.5rem" height="1.5rem" fill="currentColor" className="bi bi-graph-up-arrow"><path fillRule="evenodd" d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"></path></svg>
  <SidebarMenuItem to='/o' title='Finance & Accounting' fontIcon='bi-layers' />
</div>

<div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
<svg aria-hidden="true" focusable="false" data-prefix="fas" width="1.5rem" height="1.5rem" data-icon="handshake-angle" className="svg-inline--fa fa-handshake-angle " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M544 248v3.3l69.7-69.7c21.9-21.9 21.9-57.3 0-79.2L535.6 24.4c-21.9-21.9-57.3-21.9-79.2 0L416.3 64.5c-2.7-.3-5.5-.5-8.3-.5H296c-37.1 0-67.6 28-71.6 64H224V248c0 22.1 17.9 40 40 40s40-17.9 40-40V176c0 0 0-.1 0-.1V160l16 0 136 0c0 0 0 0 .1 0H464c44.2 0 80 35.8 80 80v8zM336 192v56c0 39.8-32.2 72-72 72s-72-32.2-72-72V129.4c-35.9 6.2-65.8 32.3-76 68.2L99.5 255.2 26.3 328.4c-21.9 21.9-21.9 57.3 0 79.2l78.1 78.1c21.9 21.9 57.3 21.9 79.2 0l37.7-37.7c.9 0 1.8 .1 2.7 .1H384c26.5 0 48-21.5 48-48c0-5.6-1-11-2.7-16H432c26.5 0 48-21.5 48-48c0-12.8-5-24.4-13.2-33c25.7-5 45.1-27.6 45.2-54.8v-.4c-.1-30.8-25.1-55.8-56-55.8c0 0 0 0 0 0l-120 0z"></path></svg>
  <SidebarMenuItem to='/u' title='Business Developement & Partnership' fontIcon='bi-layers' />
</div>

 </div>

<div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1.5rem" height="1.5rem" fill="currentColor" className="bi bi-megaphone"><path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 75 75 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0m-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233q.27.015.537.036c2.568.189 5.093.744 7.463 1.993zm-9 6.215v-4.13a95 95 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A61 61 0 0 1 4 10.065m-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68 68 0 0 0-1.722-.082z"></path></svg>
<SidebarMenuItemWithSub
        to='/crafted/widgets'
        title='Marketing & Communication'
        fontIcon='bi-layers'
      >
        <SidebarMenuItem to='/apps/user-management/users' title='Leads' hasBullet={true} />
        <SidebarMenuItem to='/q' title='Prospected' hasBullet={true} />
        <SidebarMenuItem to='/s' title='Campaigns' hasBullet={true} />
      </SidebarMenuItemWithSub>
      </div>   

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1.5rem" height="1.5rem" fill="currentColor" className="bi bi-chat-left-text"><path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"></path><path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"></path></svg> 
<SidebarMenuItem
        to='/d'
        title='Message & Meetings'
        fontIcon='bi-layers'
      />
 </div>

<div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
<svg aria-hidden="true" focusable="false" width="1.5rem" height="1.5rem" data-prefix="fas" data-icon="arrow-rotate-left" className="svg-inline--fa fa-arrow-rotate-left " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M125.7 160H176c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z"></path></svg>          
<SidebarMenuItem
        to='/f'
        title='Apps & Intergration'
        fontIcon='bi-layers'
      />
 </div>

      <div className='cuter' style={{marginBottom: "2rem", marginTop: "1rem"}}>
      </div>


      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1.5em" height="1.5em" fill="currentColor" className="bi bi-question-circle-fill"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247m2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"></path></svg>
      <div style={{ paddingTop: '0.1rem'}}>
      <SidebarMenuItem
        to='/v'
        title='Help'
        fontIcon='bi-layers'
      />
 </div>
 </div>

 <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1.5em" height="1.5em" fill="currentColor" className="bi bi-gear"><path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"></path><path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"></path></svg>
      <SidebarMenuItem
        to='/h'
        title='Settings'
        fontIcon='bi-layers'
      />
 </div>

<div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: "5rem"}}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1.5rem" height="1.5reem" fill="currentColor" className="bi bi-box-arrow-right"><path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"></path><path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"></path></svg>
<SidebarMenuItem
        to='/y'
        title='Logout'
        fontIcon='bi-layers'
      />

 </div>

      <span
      style={{
        color: 'grey',
        position: 'fixed',
        bottom: '1rem', // Adjust the value to your preference
        left: '1rem',   // Adjust the value to your preference
      }}
    >
      @2024 LIMS. All Rights Reserved
    </span>
 
    </>
  )
}

export {SidebarMenuMain}
