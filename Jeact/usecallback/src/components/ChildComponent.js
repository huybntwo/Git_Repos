import React,{useCallback, useEffect, useState} from 'react'

export default function ChildComponent({getData}) {
    const [comments, setCommments] = useState([])

    useEffect(() => {
        console.log('Child Component - useEffect - getData')
        getData('comments')
        .then((res) => res.json())
        .then((res) => {
          const comments = res.data;
          setCommments(comments)
        });
    },[getData])

  return (
    <div>
        <p>ChildComponent</p>
        <p>{JSON.stringify(comments)}</p>
    </div>   
  )
}
