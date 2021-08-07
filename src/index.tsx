import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './components/App'
import './index.scss'
import { Scroller } from './Scroller'

const root: HTMLElement | null = document.getElementById('root')

if (root === null) {
  throw new Error('no root')
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
)

const scroller = new Scroller()

document.body.append(scroller.context)

scroller.context.append(root)
scroller.setWheelEventValidator((e: WheelEvent): boolean => {
  const target: HTMLElement = e.target as HTMLElement
  return !(
    e.ctrlKey ||
    (target.localName === 'textarea' && (target.clientHeight < target.scrollHeight)) ||
    target.parentElement?.className === 'gallery__image-viewer'
  )
})

if (window.innerWidth > 480) {
  scroller.turnOnAllListeners()
} else {
  scroller.changeScrollDirectionToY()
}

window.onresize = e => {
  if ((e.target as Window).innerWidth > 480) {
    scroller.turnOnAllListeners()
    scroller.changeScrollDirectionToX()
  } else {
    scroller.turnOffAllListeners()
    scroller.changeScrollDirectionToY()
  }
}
