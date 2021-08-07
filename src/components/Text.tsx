import React from 'react'
import './styles/Text.scss'

interface TextProps {
  headingTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  headingText: string
  contentText: string
}

export const Text: React.FC<TextProps> = props => {
  const { headingTag, headingText, contentText } = props
  const heading = React.createElement(
    headingTag === undefined ? 'h2' : headingTag,
    { className: 'text__heading' },
    headingText
  )

  return (
    <div className='text'>
      { heading }
      <p className='text__content'>{contentText}</p>
    </div>
  )
}
