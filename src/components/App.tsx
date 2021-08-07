import { Tile } from './Tile'
import { Text } from './Text'
import { IconGroup } from './IconGroup'
import { Contact } from './contact/Contact'
import { Gallery } from './gallery/Gallery'

import './styles/App.scss'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

export const App: React.FC = () => {
  return (
    <div className='app__wrapper'>
      <div className='app__background'/>
      <div className='app'>
        <Tile className='tile-one' imgUrl={pic01} imgFilter='img-filter'/>
        <Tile className='tile-two' backgroundColor='gradient-purple-to-yellow'>
          <Text
            headingTag='h1'
            headingText='Hello, my name is Dima'
            contentText='Mauris et ligula arcu. Proin dapibus convallis accumsan. Lorem maximus hendrerit orci, sit amet elementum massa hendrerit sed. Donec et ullamcorper ligula. Suspendisse amet potenti.'
          />
        </Tile>
        <Tile
          className='tile-three'
          imgUrl={pic02}
          imgFilter='img-filter-tined'
          backgroundColor='gradient-grey-right'
        >
          <Text
            headingText='Sed etiam aenean'
            contentText='Mauris et ligula arcu. Proin dapibus convallis accumsan. Lorem maximus hendrerit orci, sit amet elementum massa hendrerit sed. Donec et ullamcorper ligula. Suspendisse amet potenti. Ut pretium libero eleifend euismod sed tristique. Quisque dictum magna risus, id ultricies justo sagittis vitae. Sed id odio tempor, porttitor elit amet, gravida hendrerit fringilla lorem ipsum dolor.'
          />
        </Tile>
        <Tile className='tile-four' backgroundColor='gradient-purple'>
          <Text
            headingText='Amet lorem'
            contentText='Sed vel nibh libero. Mauris et lorem pharetra massa lorem turpis congue pulvinar. Vivamus sed feugiat finibus. Duis amet bibendum amet sed. Duis mauris ex, dapibus sed ligula tempus volutpat magna etiam.'
          />
          <IconGroup/>
        </Tile>
        <Tile
          className='tile-five'
          imgUrl={pic03}
          imgFilter='img-filter-tined'
          backgroundColor='gradient-grey-left'
        >
          <Text
            headingText='Magna amet tempus'
            contentText='Mauris a cursus velit. Nunc lacinia sollicitudin egestas bibendum, magna dui bibendum ex, sagittis commodo enim risus sed magna nulla. Vestibulum ut consequat velit. Curabitur vitae libero lorem. Quisque iaculis porttitor blandit. Nullam quis sagittis maximus. Sed vel nibh libero. Mauris et lorem pharetra massa lorem turpis congue pulvinar.'
          />
        </Tile>
        <Tile className='tile-six' backgroundColor='gradient-red'>
          <Text
            headingText='Elit integer'
            contentText='Sed vel nibh libero. Mauris et lorem pharetra massa lorem turpis congue pulvinar. Vivamus sed feugiat finibus. Duis amet bibendum amet sed. Duis mauris ex, dapibus sed ligula tempus volutpat magna etiam.'
          />
        </Tile>
        <Gallery/>
        <Contact/>
      </div>
    </div>
  )
}
