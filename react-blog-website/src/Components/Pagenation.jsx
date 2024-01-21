import React from 'react'

const Pagenation = ({onPageChange,blogs,CurrentPage,pagesize}) => {
    const totalPage=Math.ceil(blogs.length/pagesize);
    // console.log(totalPage);

    const renderPagenationLinks=()=>{
        return Array.from({length:totalPage},(_,i)=>i+1).map((pagenumber)=>(
            <li className={pagenumber==CurrentPage?"activerPagnination":"" } key={pagenumber}>
                <a href="#" onClick={()=> onPageChange(pagenumber)}>{pagenumber}</a>
            </li>
        ))
    }

  return (
    <ul className='pagination my-8 flex-wrap gap-4'>
        <li>
            <button onClick={()=>onPageChange(CurrentPage-1)} disabled={CurrentPage===1}>previous</button>
        </li>
        <div className='flex gap-1'>
            {renderPagenationLinks()}
        </div>
        <li>
            <button onClick={()=>onPageChange(CurrentPage+1)} disabled={CurrentPage===totalPage} >next</button>
        </li>

    </ul>
  )
}

export default Pagenation