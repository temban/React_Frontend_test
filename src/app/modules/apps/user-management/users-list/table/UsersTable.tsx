import {useQueryResponseLoading} from '../core/QueryResponseProvider'
import {UsersListLoading} from '../components/loading/UsersListLoading'
import {KTCardBody, KTSVG, toAbsoluteUrl} from '../../../../../../_metronic/helpers'

const UsersTable = () => {
  const isLoading = useQueryResponseLoading()


  return (
    <KTCardBody className='py-4'>
      <div className='table-responsive'>
        <div className='card-body py-3'>
          {/* begin::Table container */}
          <div className='table-responsive'>
            {/* begin::Table */}
            <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
              {/* begin::Table head */}
              <thead>
                <tr className='fw-bold text-muted'>
                  <th className='w-25px'>
                    {/* <div className='form-check form-check-sm form-check-custom form-check-solid'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value='1'
                        data-kt-check='true'
                        data-kt-check-target='.widget-9-check'
                      />
                    </div> */}
                  </th>
                  <th className='min-w-150px'>New Leads</th>
                  <th className='min-w-140px'>Contacted</th>
                  <th className='min-w-120px'>Not Contacted</th>
                  <th className='min-w-100px text-end'></th>
                </tr>
              </thead>
              {/* end::Table head */}
              {/* begin::Table body */}
              <tbody>
                <tr>
                  <td>
                   
                  </td>
                  <td>
                    <div className='d-flex align-items-center'>
                      <div className='d-flex justify-content-start flex-column'>
                        <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                          Chris Friedkly
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>
                    <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                      +223 
                    </a>
                  </td>
                  <td className='text-end'>
                  <div className='d-flex align-items-center'>
                      <div className='d-flex justify-content-start flex-column'>
                        <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                          chrisfriedkly@gmail.com
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className='d-flex justify-content-end flex-shrink-0'>
                    <a
        href='#'
        className='btn btn-primary btn-active-primary btn-sm'
        data-kt-menu-trigger='click'
        data-kt-menu-placement='bottom-end'
        style={{color: "white", background: "#007bff"}}

      >
        Options
      </a>
      {/* begin::Menu */}
      <div
        className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 fw-bold fs-7'
        data-kt-menu='true' style={{ background: "rgb(255, 246, 230)", borderRadius: "0.4rem", width: "15rem"}}
      >
        {/* begin::Menu item */}
        <div className='menu-item px-3'  style={{ background: "#ff9246",  borderRadius: "0.4rem"}}>
          <a className='menu-link px-3'         style={{color: "white"}}
          >
            Move To Prospect Board
          </a>
        </div>
        {/* end::Menu item */}

        {/* begin::Menu item */}
        <div className='menu-item px-3'>
          <a
            className='menu-link px-3'
            data-kt-users-table-filter='delete_row'
            style={{color: "#000"}}
          >
            Delete
          </a>
        </div>
        {/* end::Menu item */}
      </div>
      {/* end::Menu */}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                   
                  </td>
                  <td>
                    <div className='d-flex align-items-center'>
                      <div className='d-flex justify-content-start flex-column'>
                        <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                          Chris Friedkly
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>
                    <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                      +223 
                    </a>
                  </td>
                  <td className='text-end'>
                  <div className='d-flex align-items-center'>
                      <div className='d-flex justify-content-start flex-column'>
                        <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                          chrisfriedkly@gmail.com
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className='d-flex justify-content-end flex-shrink-0'>
                    <a
        href='#'
        className='btn btn-primary btn-active-primary btn-sm'
        data-kt-menu-trigger='click'
        data-kt-menu-placement='bottom-end'
        style={{color: "white", background: "#007bff"}}

      >
        Options
      </a>
      {/* begin::Menu */}
      <div
        className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 fw-bold fs-7'
        data-kt-menu='true' style={{ background: "rgb(255, 246, 230)", borderRadius: "0.4rem", width: "15rem"}}
      >
        {/* begin::Menu item */}
        <div className='menu-item px-3'  style={{ background: "#ff9246",  borderRadius: "0.4rem"}}>
          <a className='menu-link px-3'         style={{color: "white"}}
          >
            Move To Prospect Board
          </a>
        </div>
        {/* end::Menu item */}

        {/* begin::Menu item */}
        <div className='menu-item px-3'>
          <a
            className='menu-link px-3'
            data-kt-users-table-filter='delete_row'
            style={{color: "#000"}}
          >
            Delete
          </a>
        </div>
        {/* end::Menu item */}
      </div>
      {/* end::Menu */}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                   
                  </td>
                  <td>
                    <div className='d-flex align-items-center'>
                      <div className='d-flex justify-content-start flex-column'>
                        <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                          Chris Friedkly
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>
                    <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                      +223 
                    </a>
                  </td>
                  <td className='text-end'>
                  <div className='d-flex align-items-center'>
                      <div className='d-flex justify-content-start flex-column'>
                        <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                          chrisfriedkly@gmail.com
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className='d-flex justify-content-end flex-shrink-0'>
                    <a
        href='#'
        className='btn btn-primary btn-active-primary btn-sm'
        data-kt-menu-trigger='click'
        data-kt-menu-placement='bottom-end'
        style={{color: "white", background: "#007bff"}}

      >
        Options
      </a>
      {/* begin::Menu */}
      <div
        className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 fw-bold fs-7'
        data-kt-menu='true' style={{ background: "rgb(255, 246, 230)", borderRadius: "0.4rem", width: "15rem"}}
      >
        {/* begin::Menu item */}
        <div className='menu-item px-3'  style={{ background: "#ff9246",  borderRadius: "0.4rem"}}>
          <a className='menu-link px-3'         style={{color: "white"}}
          >
            Move To Prospect Board
          </a>
        </div>
        {/* end::Menu item */}

        {/* begin::Menu item */}
        <div className='menu-item px-3'>
          <a
            className='menu-link px-3'
            data-kt-users-table-filter='delete_row'
            style={{color: "#000"}}
          >
            Delete
          </a>
        </div>
        {/* end::Menu item */}
      </div>
      {/* end::Menu */}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                   
                  </td>
                  <td>
                    <div className='d-flex align-items-center'>
                      <div className='d-flex justify-content-start flex-column'>
                        <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                          Chris Friedkly
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>
                    <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                      +223 
                    </a>
                  </td>
                  <td className='text-end'>
                  <div className='d-flex align-items-center'>
                      <div className='d-flex justify-content-start flex-column'>
                        <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                          chrisfriedkly@gmail.com
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className='d-flex justify-content-end flex-shrink-0'>
                    <a
        href='#'
        className='btn btn-primary btn-sm'
        data-kt-menu-trigger='click'
        data-kt-menu-placement='bottom-end'
        style={{color: "white", background: "#007bff"}}

      >
        Options
      </a>
      {/* begin::Menu */}
      <div
        className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 fw-bold fs-7'
        data-kt-menu='true' style={{ background: "rgb(255, 246, 230)", borderRadius: "0.4rem", width: "15rem"}}
      >
        {/* begin::Menu item */}
        <div className='menu-item px-3'  style={{ background: "#ff9246",  borderRadius: "0.4rem"}}>
          <a className='menu-link px-3'         style={{color: "white"}}
          >
            Move To Prospect Board
          </a>
        </div>
        {/* end::Menu item */}

        {/* begin::Menu item */}
        <div className='menu-item px-3'>
          <a
            className='menu-link px-3'
            data-kt-users-table-filter='delete_row'
            style={{color: "#000"}}
          >
            Delete
          </a>
        </div>
        {/* end::Menu item */}
      </div>
      {/* end::Menu */}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                   
                  </td>
                  <td>
                    <div className='d-flex align-items-center'>
                      <div className='d-flex justify-content-start flex-column'>
                        <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                          Chris Friedkly
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>
                    <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                      +223 
                    </a>
                  </td>
                  <td className='text-end'>
                  <div className='d-flex align-items-center'>
                      <div className='d-flex justify-content-start flex-column'>
                        <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                          chrisfriedkly@gmail.com
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className='d-flex justify-content-end flex-shrink-0'>
                    <a
        href='#'
        className='btn btn-primary btn-sm'
        
        data-kt-menu-trigger='click'
        data-kt-menu-placement='bottom-end'
        style={{color: "white", background: "#007bff"}}

      >
        Options
      </a>
      {/* begin::Menu */}
      <div
        className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 fw-bold fs-7'
        data-kt-menu='true' style={{ background: "rgb(255, 246, 230)", borderRadius: "0.4rem", width: "15rem"}}
      >
        {/* begin::Menu item */}
        <div className='menu-item px-3'  style={{ background: "#ff9246",  borderRadius: "0.4rem"}}>
          <a className='menu-link px-3'         style={{color: "white"}}
          >
            Move To Prospect Board
          </a>
        </div>
        {/* end::Menu item */}

        {/* begin::Menu item */}
        <div className='menu-item px-3'>
          <a
            className='menu-link px-3'
            data-kt-users-table-filter='delete_row'
            style={{color: "#000"}}
          >
            Delete
          </a>
        </div>
        {/* end::Menu item */}
      </div>
      {/* end::Menu */}
                    </div>
                  </td>
                </tr>
              </tbody>
              {/* end::Table body */}
            </table>
            {/* end::Table */}
          </div>
          {/* end::Table container */}
        </div>
      </div>
      {isLoading && <UsersListLoading />}
    </KTCardBody>
  )
}

export {UsersTable}
