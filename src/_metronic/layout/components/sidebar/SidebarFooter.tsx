/* eslint-disable react/jsx-no-target-blank */

const SidebarFooter = () => {
  return (
    <div id='kt_app_sidebar_footer'>
      <a
        href={process.env.REACT_APP_PREVIEW_DOCS_URL}
        target='_blank'
        className='btn btn-flex flex-center btn-custom btn-primary overflow-hidden text-nowrap '
        data-bs-toggle='tooltip'
        data-bs-trigger='hover'
        data-bs-dismiss-='click'
        title='Metronic Docs & Components'
      >
        <span className='btn-label'>Docs & Components</span>
      </a>
    </div>
  )
}

export {SidebarFooter}
