import React from 'react'

export const Book=(props)=>{
  const {img,title,author}=props.book;
  const clickHandler=(e)=>{
    console.log(e);
    console.log(e.target);
    alert('hello   world')
  } 
   return(
     <article className='book'>
       <img src={img} alt="" />
       <h1 onClick={()=>console.log(title)}>{title}</h1>
       <h4>{author}</h4>
       <button type='button' onClick={clickHandler}>reference example</button>
       
     </article>
   )
};
export default Book
