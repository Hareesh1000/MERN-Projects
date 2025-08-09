import React, { useState,useEffect, use } from 'react'

import axios from 'axios'

function TodoList() {

    const [todoitems,setToDoItem] = useState([]);

    const[todoinput,setToDoInput] = useState("")

    const[itemStyle,setitemStyle] = useState({});

    const [starStyle,setStarStyle] = useState({})



 useEffect(()=>{

        axios.get('http://localhost:8000/dummy')
        .then(res=>{
            console.log(res.data);
            setToDoItem(res.data);
        }).catch(err=>{
            console.log(err);
        })



    },[])



    //  useEffect(()=>{

    //     axios.get('http://localhost:8000/dummy')
    //     .then(res=>{
    //         console.log(res.data);
    //         setToDoItem(res.data);
    //     }).catch(err=>{
    //         console.log(err);
    //     })
    // },[]);

    //  const deleteToDo = (index) => {
    //         setitemStyle({color:"red",textDecoration:"line-through"})
    // }


const starItem = (id) => {
  setStarStyle(prevStyles => ({
    ...prevStyles,
    [id]: { color: "red" }
  }));


}



const deleteToDo = (id) => {
  axios.delete(`http://localhost:8000/dummy/${id}`)
    .then(() => {
      setToDoItem(prevItems => prevItems.filter(item => item._id !== id));
      
    })
    .catch(err => console.log(err));
};


    const showToDoList = todoitems.map(
        (item,index)=>(
            
                    <div className='toDoItemSection' key={item._id} style={itemStyle} id={item}>
                        <i class="fa-regular fa-circle-check"id='circleCheck' onClick={()=>{deleteToDo(item._id)}}></i>
                        <p >{item.todo_item}</p>
                       <a onClick={()=>{starItem(item._id)}} style={starStyle[item._id]}> <i class="fa-regular fa-star" id='itemStar' ></i></a>

                    </div>
        )
    );

   

    // const submitItem = () => {

    //         let prevState = todoitems;
    //         setToDoItem (
    //             ()=> {
    //                return [...prevState,todoinput]
    //             }
    //         )
    //         setToDoInput("");
            
    // }

    const submitItem = () => {
//   if (todoinput.trim() === "") return;

  axios.post('http://localhost:8000/dummy', { todo_item: todoinput })
    .then(() => {
                 let prevState = todoitems;
            setToDoItem (
                ()=> {
                   return [...prevState,todoinput]
                }
            )
      setToDoInput("");
      axios.get('http://localhost:8000/dummy')
        .then(res => setToDoItem(res.data));
    })
    .catch(err => console.log(err));
}


  return (
    <div className='todoListSection'>
            <div className='toDoListItem'> 
{/* 
                    <div className='toDoItemSection'>
                        <i class="fa-regular fa-circle-check"id='circleCheck' ></i>
                        <p>lsdjfhdasfjuhbasdjfb</p>
                       <div> <i class="fa-regular fa-star" id='itemStar'></i></div>

                    </div> */}
                    {/* {todoitems.length >0 ? showToDoList : <div></div>} */}
                    {showToDoList}
                  

                </div>

            <div className='todoListInput'>
                <input type='text' id='inputTextField' placeholder='Add Something here'
                value={todoinput} onChange={(e)=> {setToDoInput(e.target.value)}
                
                }/> 
                <button id='addbutton'><i id='plusIcon' class="fa-solid fa-plus" onClick={submitItem}></i></button>
                {/* <button onClick={submitItem}>Submit</button> */}
            </div>

    </div>
    
  )
}

export default TodoList