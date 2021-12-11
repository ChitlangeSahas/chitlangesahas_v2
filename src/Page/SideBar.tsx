import React from 'react'
import { StandardFunctionProps } from '../Types'
import './SideBarStyle.scss'

interface SideBarProps extends StandardFunctionProps {
  visibility: boolean
}

const SideBar = (props: SideBarProps): JSX.Element => {
  const { visibility } = props

  if (visibility) {
    return (
      <div className={'sidebar'}>
        <h4>WORK</h4>
        <h4>RESUME</h4>
        <h4>ETC</h4>
      </div>
    )
  }
  return <></>
}

export default SideBar
