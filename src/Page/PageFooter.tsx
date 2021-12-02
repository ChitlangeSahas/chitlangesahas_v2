import { StandardFunctionProps } from '../Types'

interface PageFooterProps extends StandardFunctionProps {}
export const PageFooter = (props: PageFooterProps) => {
  const { children } = props

  return <div>{children}</div>
}

PageFooter.displayName = 'PageFooter'
