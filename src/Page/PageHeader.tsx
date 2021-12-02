import { StandardFunctionProps } from '../Types'

interface PageHeaderProps extends StandardFunctionProps {}

export const PageHeader = (props: PageHeaderProps) => {
  const { children } = props

  return <div>{children}</div>
}

export default PageHeader
