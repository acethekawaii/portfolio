import React from 'react'

function SkillContainer({category, list}) {
  return (
    <div className='border-1 border-gray h-auto'>
      <h1 className='border-b-1 border-gray p-2 font-bold text-white'>{category}</h1>
      <p className='p-2 font-thin text-sm sm:text-md'>{list}</p>
    </div>
  )
}

export default SkillContainer