import React from 'react'

const Button = ({
    children,//here children is the text of the button
    type = 'button',
    bgColor = 'bg-darkGreen',
    textColor = 'text-white',
    className = '',
    ...props
}) => {
  return (
    <div>
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className} `} {...props}>
            {children}
        </button>
    </div>
  )
}

export default Button