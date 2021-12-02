import React from 'react'
import './App.css'
import Page from './Page/'

function App() {
  return (
    <div className="App">
      <Page>
        <Page.PageHeader>
          <h2>Page Header</h2>
        </Page.PageHeader>
        <Page.Contents>
          <h2>Page contents</h2>
        </Page.Contents>
        <Page.Footer>
          <h3>Page footer</h3>
        </Page.Footer>
      </Page>
    </div>
  )
}

export default App
