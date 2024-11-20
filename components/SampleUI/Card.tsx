import React from 'react'

interface CardProps {
  children?: React.ReactNode
  text: string
  image?: {
    url: string
    position: 'right' | 'left'
  }
}
function Card ({ children, text, image }: CardProps) {
  return (
    <div
      className={`card w-[70vw] flex ${
        image && image?.position === 'left' ? 'flex-row-reverse' : 'flex-row'
      }`}
    >
      {image && (
        <div>
          <img src={image.url} alt='' />
        </div>
      )}
      <p>{text}</p>
      {children}
    </div>
  )
}

export default Card
