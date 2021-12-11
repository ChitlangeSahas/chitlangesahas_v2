import { StandardFunctionProps } from '../Types'
import { CSSProperties, useState } from 'react'
import { GoThreeBars, GoX } from 'react-icons/all'
import { IconContext } from 'react-icons'
import { GREY } from '../constants'

import SideBar from './SideBar'

interface PageHeaderProps extends StandardFunctionProps {}

export const PageHeader = (props: PageHeaderProps) => {
  const [sideBarOpen, setSideBarOpen] = useState(false)
  const { children } = props

  const logoStyle = {
    fontSize: '20px',
  } as CSSProperties

  const showSideBar = () => {
    setSideBarOpen(!sideBarOpen)
  }

  const icon = sideBarOpen ? (
    <GoX onClick={showSideBar} />
  ) : (
    <GoThreeBars onClick={showSideBar} />
  )

  const hamburgerMenu = (
    <IconContext.Provider
      value={{ color: GREY, size: '1.5em', style: { cursor: 'pointer' } }}
    >
      {icon}
    </IconContext.Provider>
  )

  return (
    <div className={'cs-header'}>
      <h3 className={'cs-signature'} style={logoStyle}>
        SAHAS CHITLANGE
      </h3>
      {hamburgerMenu}
      <SideBar visibility={sideBarOpen} />
      {children}
    </div>
  )
}

export default PageHeader
