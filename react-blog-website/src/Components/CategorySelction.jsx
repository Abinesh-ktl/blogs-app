import React from 'react'

const CategorySelction = ({onSelectCategory,selectedCategory,activecategory}) => {
    const categories=['Startups',"Security", "AI","Apps","Tech"]
  return (
    <div className='px-4 mb-8 lg:space-x-16 flex flex-wrap items-center border-b-4 py-5 text-gray-600 font-bold'>
        <button onClick={()=>onSelectCategory(null)} className={`lg:ml-12 ${activecategory?"":"active-button"}`}>All</button>
        {
            categories.map((category)=>(
                <button onClick={()=>onSelectCategory(category)}  className={`mr-2 space-x-16 ${activecategory==category?"active-button":""}`}key={category}>{category}</button>
            ))
        }
    </div>
  )
}

export default CategorySelction