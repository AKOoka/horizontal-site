import { GalleryInteractiveImage } from './GalleryInteractiveImage'
import { useState } from 'react'
import { GalleryImageViewer } from './GalleryImageViewer'
import './styles/Gallery.scss'
import gallery01 from '../../images/gallery/01.jpg'
import gallery02 from '../../images/gallery/02.jpg'
import gallery03 from '../../images/gallery/03.jpg'
import gallery04 from '../../images/gallery/04.jpg'
import gallery05 from '../../images/gallery/05.jpg'
import gallery06 from '../../images/gallery/06.jpg'
import gallery07 from '../../images/gallery/07.jpg'
import gallery08 from '../../images/gallery/08.jpg'
import gallery09 from '../../images/gallery/09.jpg'

export const Gallery: React.FC = props => {
  const [imgUrl, changeImgUrl] = useState<string>('')
  const [isShowingImg, changeShowingImg] = useState<boolean>(false)

  const changeImg = (url: string): void => {
    changeImgUrl(url)
    changeShowingImg(true)
  }

  return (
    <div className='gallery'>
      <GalleryImageViewer imgUrl={imgUrl} isShowingImg={isShowingImg} changeShowingImg={changeShowingImg}/>
      <GalleryInteractiveImage imgLocation='img1' imgUrl={gallery01} changeImgUrl={changeImg}/>
      <GalleryInteractiveImage imgLocation='img2' imgUrl={gallery02} changeImgUrl={changeImg}/>
      <GalleryInteractiveImage imgLocation='img3' imgUrl={gallery03} changeImgUrl={changeImg}/>
      <GalleryInteractiveImage imgLocation='img4' imgUrl={gallery04} changeImgUrl={changeImg}/>
      <GalleryInteractiveImage imgLocation='img5' imgUrl={gallery05} changeImgUrl={changeImg}/>
      <GalleryInteractiveImage imgLocation='img6' imgUrl={gallery06} changeImgUrl={changeImg}/>
      <GalleryInteractiveImage imgLocation='img7' imgUrl={gallery07} changeImgUrl={changeImg}/>
      <GalleryInteractiveImage imgLocation='img8' imgUrl={gallery08} changeImgUrl={changeImg}/>
      <GalleryInteractiveImage imgLocation='img9' imgUrl={gallery09} changeImgUrl={changeImg}/>
    </div>
  )
}
