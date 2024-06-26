import {FC, useEffect} from 'react'
import {ILayout, useLayout} from '../../core'
import {KTSVG} from '../../../helpers'
import { UsersListSearchComponent } from '../../../../app/modules/apps/user-management/users-list/components/header/UsersListSearchComponent'
import clsx from 'clsx'
// import {MenuInner} from './header-menus'

const itemClass = 'ms-1 ms-lg-3'
const btnClass =
  'btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px'
// const userAvatarClass = 'symbol-35px symbol-md-40px'
const btnIconClass = 'svg-icon-1'
const Header: FC = () => {
  const {config} = useLayout()
  useEffect(() => {
    updateDOM(config)
  }, [config])

  return (
    <div style={{ paddingTop: "0.7rem"}}
      id='kt_app_header_menu'
      data-kt-menu='true'
    >

<div style={{display: "flex"}}>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="3rem" height="3rem" fill="currentColor" className="bi bi-filter-left"><path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"></path></svg>
<div>
<UsersListSearchComponent />

  
</div>
</div>
  

      {/* <MenuInner /> */}

    </div>
  )
}

const updateDOM = (config: ILayout) => {
  if (config.app?.header?.default?.fixed?.desktop) {
    document.body.setAttribute('data-kt-app-header-fixed', 'true')
  }

  if (config.app?.header?.default?.fixed?.mobile) {
    document.body.setAttribute('data-kt-app-header-fixed-mobile', 'true')
  }

  if (config.app?.header?.default?.stacked) {
    document.body.setAttribute('data-kt-app-header-stacked', 'true')
  }

  const appHeaderDefaultStickyEnabled = config.app?.header?.default?.sticky?.enabled
  let appHeaderDefaultStickyAttributes: {[attrName: string]: string} = {}
  if (appHeaderDefaultStickyEnabled) {
    appHeaderDefaultStickyAttributes = config.app?.header?.default?.sticky?.attributes as {
      [attrName: string]: string
    }
  }

  const appHeaderDefaultMinimizeEnabled = config.app?.header?.default?.minimize?.enabled
  let appHeaderDefaultMinimizeAttributes: {[attrName: string]: string} = {}
  if (appHeaderDefaultMinimizeEnabled) {
    appHeaderDefaultMinimizeAttributes = config.app?.header?.default?.minimize?.attributes as {
      [attrName: string]: string
    }
  }

  setTimeout(() => {
    const headerElement = document.getElementById('kt_app_header')
    // header
    if (headerElement) {
      const headerAttributes = headerElement
        .getAttributeNames()
        .filter((t) => t.indexOf('data-') > -1)
      headerAttributes.forEach((attr) => headerElement.removeAttribute(attr))

      if (appHeaderDefaultStickyEnabled) {
        for (const key in appHeaderDefaultStickyAttributes) {
          if (appHeaderDefaultStickyAttributes.hasOwnProperty(key)) {
            headerElement.setAttribute(key, appHeaderDefaultStickyAttributes[key])
          }
        }
      }

      if (appHeaderDefaultMinimizeEnabled) {
        for (const key in appHeaderDefaultMinimizeAttributes) {
          if (appHeaderDefaultMinimizeAttributes.hasOwnProperty(key)) {
            headerElement.setAttribute(key, appHeaderDefaultMinimizeAttributes[key])
          }
        }
      }
    }
  }, 0)
}

export {Header}
