import './styles/ContactLinkList.scss'

export const ContactLinkList: React.FC = props => {
  return (
    <div className='contact__link-list'>
      <ul className='link-list'>
        <li className='link-list__row'>
          <a className='link-list__link icon-twitter' href='https://twitter.com/' target='_blank'>twitter</a>
        </li>
        <li className='link-list__row'>
          <a className='link-list__link icon-instagram' href='https://www.instagram.com/' target='_blank'>instagram</a>
        </li>
        <li className='link-list__row'>
          <a className='link-list__link icon-facebook' href='https://www.facebook.com/' target='_blank'>facebook</a>
        </li>
        <li className='link-list__row'>
          <a className='link-list__link icon-snapchat' href='https://www.snapchat.com/' target='_blank'>snapchat</a>
        </li>
      </ul>
    </div>
  )
}
