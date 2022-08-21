import React,{useId, useState, useMemo, useTransition} from 'react'
import StudentList from './StudentList';
import studentListData from '../Mocks/studentList.json'

export default function Form() {
    const id = useId();
    //moi lan render se tao ra cac ID khac nhau
    console.log({id});
    const [searchInput, setSearchInput] = useState('');
    const [filterText, setFilterText] = useState('');
    const [isPending, startTransition] = useTransition();

    const data = useMemo(() => {
        return studentListData.map((student) => {
            const index = student.indexOf(filterText);
            return index === -1 ? (<p>{student}</p>
            ):(
            <p>
                {student.slice(0,index)}
                <span style={{backgroundColor:'yellow'}}>{student.slice(index, index + filterText.length)}</span>
                {student.slice(index + filterText.length)}
            </p>
            );
        } )
    },[filterText])

    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
        startTransition(() => {
            setFilterText(e.target.value)
        })
    }


  return (
    <>
        <h3>Form</h3>
        <label htmlFor={id}>Search Name:</label>
        <input type='text' name='name' id={id} value={searchInput} onChange={handleSearchInputChange}></input>
        {isPending ? <p>Loading...</p>:<StudentList data = {data}/>}
        
    </>
  )
}
