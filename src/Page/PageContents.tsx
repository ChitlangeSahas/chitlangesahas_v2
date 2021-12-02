import { StandardFunctionProps } from '../Types'

interface PageContentProps extends StandardFunctionProps {}
export const PageContents = (props: PageContentProps) => {
  const { children } = props

  return <div>{children}</div>
}

export default PageContents
