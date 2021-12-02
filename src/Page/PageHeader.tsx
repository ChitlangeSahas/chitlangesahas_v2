import { StandardFunctionProps } from '../Types'

interface PageHeaderProps extends StandardFunctionProps {}

export const PageHeader = (props: PageHeaderProps) => {
  const { children } = props

  return (
    <div className={'cs-header'}>
      <h1 className={'cs-signature'}>SAHAS CHITLANGE</h1>
      {children}
    </div>
  )
}

export default PageHeader
