import React from 'react'
import './styles/ContactFormField.scss'

interface ContactFormFieldProps {
  description: string
  inputType: 'input' | 'textarea'
  className: string
}

export const ContactFormField: React.FC<ContactFormFieldProps> = props => {
  const { description, inputType, className } = props
  let input: JSX.Element

  switch (inputType) {
    case 'input':
      input = <input
        id={`input-${description}`}
        className='field__user-input field__input'
        type = 'text'
      />
      break
    case 'textarea':
      input = <textarea
        id={`input-${description}`}
        className='field__user-input field__text-area'
        rows={4}
      />
      break
  }

  return (
    <div className={className}>
      <label className='field__label' htmlFor={`input-${description}`}>
        {description}
      </label>
      {input}
    </div>
  )
}
