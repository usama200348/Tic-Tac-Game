import { useRef, useState } from 'react'
import './ticTac.css'
import Circleicon from '../Assets/circle.png'
import Crossicon from '../Assets/cross.png'

let data=["","","","","","","","",""];

const TicTac=()=>{

    let[count,setCount]=useState(0)
    let[lock,setLock]=useState(false)
    let titleRef =useRef(null)
    let box1=useRef(null)
    let box2=useRef(null)
    let box3=useRef(null)
    let box4=useRef(null)
    let box5=useRef(null)
    let box6=useRef(null)
    let box7=useRef(null)
    let box8=useRef(null)
    let box9=useRef(null)
    let boxArray=[box1,box2,box3,box4,box4,box5,box6,box7,box8,box9]
    
const toogle=(e,num)=>{
if(lock){
    return 0;
}
if(count%2==0){
    e.target.innerHTML = `<img src='${Crossicon}'>`;
        data[num] = 'x';
        setCount(count + 1);
}
else{
    e.target.innerHTML = `<img src='${Circleicon}'>`;
        data[num] = 'o';
        setCount(count + 1);

}
checkWin()
}

const checkWin=()=>{
    if(data[0]==data[1] && data[1]==data[2] && data[2]!==""){
checkWon(data[2])
    }
    else if(data[3]==data[4] && data[4]==data[5] && data[5]!==""){
        checkWon(data[5])
    }
    else if(data[6]==data[7] && data[7]==data[8] && data[8]!==""){
        checkWon(data[8])
    }
    else if(data[0]==data[3] && data[3]==data[6] && data[6]!==""){
        checkWon(data[6])
    }
    else if(data[1]==data[4] && data[4]==data[7] && data[7]!==""){
        checkWon(data[7])
    }
    else if(data[2]==data[5] && data[5]==data[8] && data[8]!==""){
        checkWon(data[8])
    }
    else if(data[0]==data[4] && data[4]==data[8] && data[8]!==""){
        checkWon(data[8])
    }
    else if(data[0]==data[1] && data[1]==data[2] && data[2]!==""){
        checkWon(data[2])
    }
    else if(data[2]==data[4] && data[4]==data[6] && data[6]!==""){
        checkWon(data[6])
    }
    if (count === 9 && !data.some(square => square === '')) {
        checkWon();
}}

const checkWon=(winner)=>{
    setLock(true)
    if(winner=='x'){
        titleRef.current.innerHTML=`Congratulations: <img src='${Crossicon}'> Wins `
    }
    else if(winner =='o'){
        titleRef.current.innerHTML=`Congratulations: <img src='${Circleicon}'> `
    }
}


const reset=()=>{
    setLock(false);
    data=["","","","","","","","",""];
    <h1 className="title" >Tic Tac Game <span>In React</span></h1>
    boxArray.map((e)=>{
        e.current.innerHTML=""
    })
}

    return(
    <div className='container'>
<h1 className="title" ref={titleRef}>Tic Tac Game <span>In React</span></h1>
    <div className="board">
        <div className="row1">
            <div className="boxes" ref={box1} onClick={(e)=>{toogle(e,0)}}></div>
            <div className="boxes" ref={box2} onClick={(e)=>{toogle(e,1)}}></div>
            <div className="boxes" ref={box3} onClick={(e)=>{toogle(e,2)}}></div>
        </div>
        <div className="row2">
            <div className="boxes" ref={box4} onClick={(e)=>{toogle(e,3)}}></div>
            <div className="boxes" ref={box5} onClick={(e)=>{toogle(e,4)}}></div>
            <div className="boxes" ref={box6} onClick={(e)=>{toogle(e,5)}}></div>
        </div>
        <div className="row3">
            <div className="boxes" ref={box7} onClick={(e)=>{toogle(e,6)}}></div>
            <div className="boxes" ref={box8} onClick={(e)=>{toogle(e,7)}}></div>
            <div className="boxes" ref={box9} onClick={(e)=>{toogle(e,8)}}></div>
        </div>
    </div>
    <button className='reset' onClick={()=>{reset()}}>Reset</button>
    </div>
)
}

export default TicTac;