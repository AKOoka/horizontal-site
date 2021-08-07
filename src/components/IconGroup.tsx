import './styles/IconGroup.scss'

export const IconGroup: React.FC = props => {
  return (
    <div className='icon-group'>
      <div className='icon-group__line'>
        <div className='icon-group__icon-wrapper'>
          <span className='icon-group__icon icon-gem'/>
        </div>
        <div className='icon-group__icon-wrapper icon-group__icon-wrapper_left-margin'>
          <span className='icon-group__icon icon-group__icon_bold icon-camera'/>
        </div>
        <div className='icon-group__icon-wrapper icon-group__icon-wrapper_left-margin'>
          <span className='icon-group__icon icon-group__icon_bold icon-cog'/>
        </div>
      </div>
      <div className='icon-group__line'>
        <div className='icon-group__icon-wrapper icon-group__icon-wrapper_top-margin'>
          <span className='icon-group__icon icon-group__icon_bold icon-paper-plane'/>
        </div>
        <div className='icon-group__icon-wrapper icon-group__icon-wrapper_left-margin icon-group__icon-wrapper_top-margin'>
          <span className='icon-group__icon icon-group__icon_bold icon-chart-bar'/>
        </div>
        <div className='icon-group__icon-wrapper icon-group__icon-wrapper_left-margin icon-group__icon-wrapper_top-margin'>
          <span className='icon-group__icon icon-group__icon_bold icon-code'/>
        </div>
      </div>
    </div>
  )
}
