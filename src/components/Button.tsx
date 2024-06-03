import React from 'react'

type ButtonProp = {
    title: string
}

const Button = ({title}: ButtonProp) => {
    return (
        <button className="bg-[#FFFAEB] hover:bg-yellow-400 text-[#090916] font-bold py-3 px-5 text-xl leading-6">
           {title} hello
        </button>
    )
}
export default Button