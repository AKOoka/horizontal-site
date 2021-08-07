import { ContactForm } from './ContactForm'
import { ContactLinkList } from './ContactLinkList'
import { Text } from '../Text'
import { Tile } from '../Tile'
import './styles/Contact.scss'

export const Contact: React.FC = props => {
  return (
    <div className='contact'>
      <Tile className='tile-contact' backgroundColor='gradient-dark-purple'>
        <Text
          headingText="Contact"
          contentText="Sed vel nibh libero. Mauris et lorem pharetra massa lorem turpis congue pulvinar. Vivamus sed feugiat finibus. Duis amet bibendum amet sed. Duis mauris ex, dapibus sed ligula tempus volutpat magna etiam."
        />
      </Tile>
      <ContactForm />
      <ContactLinkList />
    </div>
  )
}
