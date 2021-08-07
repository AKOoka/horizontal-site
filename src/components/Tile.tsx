import React from 'react'
import './styles/Tile.scss'
import CSS from 'csstype'

export interface TileProps {
  className?: string
  imgUrl?: string
  imgFilter?: string
  backgroundColor?: CSS.Property.BackgroundColor
}

export const Tile: React.FC<TileProps> = props => {
  const { className, imgUrl, imgFilter, backgroundColor, children } = props
  let imgElement: React.DetailedReactHTMLElement<{ className: string }, HTMLElement> | undefined

  if (imgUrl !== undefined) {
    imgElement = React.createElement('img', { src: imgUrl, className: 'tile__image' })

    if (imgFilter !== undefined) {
      imgElement = React.createElement('div', { className: imgFilter }, imgElement)
    }
  }

  return (
    <div className={`tile ${className !== undefined ? className : ''}`}>
      { imgElement }
      {backgroundColor !== undefined &&
        <div className={`tile__background ${backgroundColor}`}/>
      }
      {children !== undefined &&
        <div className='tile__children-wrapper'>
          { children }
        </div>
      }
    </div>
  )
}
