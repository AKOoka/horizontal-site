import './styles/GalleryInteractiveImage.scss'

interface GalleryInteractiveImageProps {
  imgUrl: string
  imgLocation: string
  changeImgUrl: (imgUrl: string) => void
}

export const GalleryInteractiveImage: React.FC<GalleryInteractiveImageProps> = props => {
  const { imgUrl, imgLocation, changeImgUrl } = props

  return (
    <div
      className='interactive-image__wrapper img-filter'
      style={{ gridArea: imgLocation }}
      onClick={() => changeImgUrl(imgUrl)}
    >
      <img
        className='gallery__interactive-image img-filter'
        src={imgUrl}
      />
    </div>
  )
}
