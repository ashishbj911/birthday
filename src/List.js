import React, {useState} from 'react';

const List = ({people}) => {
  return (
     <>
       {people.map((person)=>{
         const {id,name,age,image} = person;
         return <article key={id}>
             <img src={image} alt=""></img>
             <div className="info">
                <h4>{name}</h4>
                <p>{age}</p>
             </div>
         </article>
       })}
     </>
  );
}

export default List;
