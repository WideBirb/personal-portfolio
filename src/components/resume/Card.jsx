import React from 'react'

const Card = (props) => {
  return (
    <div className="timeline__item">
        <i className={props.icon}></i>
        <span className="timeline__date text-zinc-400 mt-3 mb-6 max-w-[50ch]">{props.year}</span>
        <h3 className="timeline__title text-1xl lg:text-2xl lg:leading-tight font-semibold">{props.title}</h3>
        <p className="timeline__text  text-zinc-200 mt-1 mb-2">{props.desc}</p>
    </div>
  )
}

export default Card