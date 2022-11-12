import React, { useState, useRef } from 'react';
import styles from './List.module.css'
import arr from './db.json'

 
const App = () => {
  
  const dragItem = useRef();
  let ans=arr.arr;
  const dragOverItem = useRef();
  const [list, setList] = useState(ans);
  const [icon,setIcon]=useState(false)
  const [del,setDel]=useState("")
 
  const dragStart = (e, position) => {
    dragItem.current = position;
    console.log(e.target.innerHTML);
    setIcon(true)
  };
 
  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
    setIcon(true)
  };
 
  const drop = (e) => {
    const copyListItems = [...list];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setList(copyListItems);
    setIcon(false)
  };

  const handleClick=(id)=>{
    console.log(id)
    if(id){
      setDel("2px solid blue")
    }
     
  }
 
  return (
    <>
    {
    list&&
    list.map((item, index) => (
      <div style={{display:"flex",alignItems:"center",width:"70%",margin:"50px",border:"1px dotted black",padding:"30px"}}className={styles.tooltip_container}>

      <div style={{height:"40px",width:"50px",border:"1px solid black"}}>{icon? "=" : ""}</div>
      <div style={{backgroundColor:'lightblue', margin:'20px 25%', textAlign:'center', fontSize:'40px',width:"800px",border:del}}
        onDragStart={(e) => dragStart(e, index)}
        onDragEnter={(e) => dragEnter(e, index)}
        onDragEnd={drop}
        className={styles.tooltip}
        onClick={()=>handleClick(item.id)}
        key={index}
        draggable>
          {item.name}<span className={styles.tooltiptop}>Delete</span>
      </div>
      </div>
      ))}
    </>
  );
};
export default App;