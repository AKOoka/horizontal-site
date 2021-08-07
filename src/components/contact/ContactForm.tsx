import { ContactFormField } from './ContactFormField'
import './styles/ContactForm.scss'

export const ContactForm: React.FC = props => {
  return (
    <form className='contact__form'>
      <ContactFormField inputType='input' className='field_width_half' description='Name'/>
      <ContactFormField inputType='input' className='field_width_half' description='Email'/>
      <ContactFormField inputType='textarea' className='field_width_full' description='Message'/>
      <button className='form__button'>SEND MESSAGE</button>
    </form>
  )
}
