import React from 'react'
import DocumentMeta from 'react-document-meta'
import debug from 'debug'
import HeadNavigation from '~/src/app/components/containers/HeadNavigation'
import style from './App.module.scss'
import img from '~/src/assets/avatar.jpeg'
import './App.css'

const log = {
  app: debug('App.es'),
}

const metaData = {
  title: 'Breko Hub',
  description: 'Breko Hub minimal boilerplate application',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,redux,react-router,koa,universal,babel,es7,hmr,webpack',
    },
  },
}

class App extends React.Component {

  render() {
    log.app('render')
    return (
      <main className={style.app}>
        <DocumentMeta {...metaData} />
        <HeadNavigation />
        <img src={img} alt='mee' width='70' style={{ float: 'right' }} />
        <h1>The App</h1>
        Page: {this.props.children}
      </main>
    )
  }
}

export default App