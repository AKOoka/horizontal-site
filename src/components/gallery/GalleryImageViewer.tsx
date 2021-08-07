import './styles/GalleryImageViewer.scss'

interface GalleryImageViewerProps {
  imgUrl: string
  isShowingImg: boolean
  changeShowingImg: (status: boolean) => void
}

export const GalleryImageViewer: React.FC<GalleryImageViewerProps> = props => {
  const { imgUrl, isShowingImg, changeShowingImg } = props

  return (
    <>
      <div className={`gallery__image-viewer${!isShowingImg ? ' gallery__image-viewer_hidden' : ''}`}>
        <div
          className='image-viewer__background'
          onClick={() => changeShowingImg(false)}
        />
        <button
          className='image-viewer__close-button'
          onClick={() => changeShowingImg(false)}
        />
        <img
          src={imgUrl}
          className='image-viewer__image'
        />
      </div>
    </>
  )
}
