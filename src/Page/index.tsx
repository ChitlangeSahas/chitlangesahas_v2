import React, { Component } from 'react'
import { PageContents } from './PageContents'
import { PageRoot } from './Page'
import { StandardFunctionProps } from '../Types'
import { PageHeader } from './PageHeader'
import { PageFooter } from './PageFooter'

interface PageProps extends StandardFunctionProps {}

export class Page extends Component<PageProps> {
  public static Page = PageRoot
  public static PageHeader = PageHeader
  public static Contents = PageContents
  public static Footer = PageFooter

  render() {
    return <PageRoot {...this.props} />
  }
}

export default Page
