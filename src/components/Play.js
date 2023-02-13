import React, { useEffect, useState } from 'react'
import './Play.css'
export default function Play() {
    const cross = 3;
    const [availableNumbers,setAvailableNumbers]  = useState([])
    const [fillSlots,setFillSlots] = useState([])
    const [userPoints,setUserPoints] = useState(0);
    const [aiPoints,setAiPoints] = useState(0);
    console.log(availableNumbers);
    console.log(fillSlots);
    const [isUserTurn,setIsUserTurn] = useState(true);
    const reset = ()=>{
        setFillSlots([...Array.from({length:cross*cross},()=>0)]);
        resetColor();
        setIsUserTurn(true)
    }
    const checkEach = (a,b,c)=>{
        const dp = 15-(fillSlots[a]+fillSlots[b]+fillSlots[c]);
        let unAnswered = [];
        if(fillSlots[a]==0)
            unAnswered.push(a);
        if(fillSlots[b]==0)
            unAnswered.push(b);
        if(fillSlots[c]==0)
            unAnswered.push(c);
        return [dp,unAnswered,[a,b,c]]
    }
    const resetColor  = ()=>{
        for(let i=0;i<9;i++){
            document.getElementById(i).classList.remove('win1','win2','win3');
        }
    }
    const validDateAll = ()=>{
        //row check
        const row1 = checkEach(0,1,2);
        const row2 = checkEach(3,4,5);
        const row3 = checkEach(6,7,8);
        //column check
        const column1 = checkEach(0,3,6);
        const column2 = checkEach(1,4,7);
        const column3 = checkEach(2,5,8);
        //diagonal check
        const backWard = checkEach(0,4,8);
        const forward = checkEach(2,4,6);
        console.log(row1,row2,row3);
        console.log(column1,column2,column3);
        console.log(forward,backWard);
        //row
        if(row1[0] === 0 && row1[1].length===0){
            document.getElementById(row1[2][0]).classList.add("win1");
            document.getElementById(row1[2][1]).classList.add("win2");
            document.getElementById(row1[2][2]).classList.add("win3");
            setUserPoints(pre=>pre+1)
            alert("hurrey! you won");
        }
        else if(row2[0] === 0 && row2[1].length===0){
            document.getElementById(row2[2][0]).classList.add("win1");
            document.getElementById(row2[2][1]).classList.add("win2");
            document.getElementById(row2[2][2]).classList.add("win3");
            setUserPoints(pre=>pre+1)
            alert("hurrey! you won");
        }
        else if(row3[0] === 0 && row3[1].length===0){
            document.getElementById(row3[2][0]).classList.add("win1");
            document.getElementById(row3[2][1]).classList.add("win2");
            document.getElementById(row3[2][2]).classList.add("win3");
            setUserPoints(pre=>pre+1)
            alert("hurrey! you won");
        }
        //column
        else if(column1[0] === 0 && column1[1].length===0){
            document.getElementById(column1[2][0]).classList.add("win1");
            document.getElementById(column1[2][1]).classList.add("win2");
            document.getElementById(column1[2][2]).classList.add("win3");
            setUserPoints(pre=>pre+1)
            alert("hurrey! you won");
        }
        else if(column2[0] === 0 && column2[1].length===0){
            document.getElementById(column2[2][0]).classList.add("win1");
            document.getElementById(column2[2][1]).classList.add("win2");
            document.getElementById(column2[2][2]).classList.add("win3");
            setUserPoints(pre=>pre+1)
            alert("hurrey! you won");
        }
        else if(column3[0] === 0 && column3[1].length===0){
            document.getElementById(column3[2][0]).classList.add("win1");
            document.getElementById(column3[2][1]).classList.add("win2");
            document.getElementById(column3[2][2]).classList.add("win3");
            setUserPoints(pre=>pre+1)
            alert("hurrey! you won");
        }
        //diagonal
        else if(backWard[0] === 0 && backWard[1].length===0){
            document.getElementById(backWard[2][0]).classList.add("win1");
            document.getElementById(backWard[2][1]).classList.add("win2");
            document.getElementById(backWard[2][2]).classList.add("win3");
            setUserPoints(pre=>pre+1)
            alert("hurrey! you won");
        }
        else if(forward[0] === 0 && forward[1].length===0){
            document.getElementById(forward[2][0]).classList.add("win1");
            document.getElementById(forward[2][1]).classList.add("win2");
            document.getElementById(forward[2][2]).classList.add("win3");
            setUserPoints(pre=>pre+1)
            alert("hurrey! you won");
        }
        // setIsUserTurn(true);

    }
    const checkForAnyEmptyRowAndColumn = ()=>{
        const solPlaces = [];
        for(let i = 0;i<cross*cross;i++){
            //row check
            const row = parseInt(i/cross);
            if(fillSlots[row*cross]===0 && fillSlots[row*cross+1]===0 && fillSlots[row*cross+2]===0){
                //col check
                const column = i%cross;
                if(fillSlots[column]===0 && fillSlots[column+3]===0 && fillSlots[column+6]===0){
                    console.log(row,column);
                    console.log(row,row+1,row+2)
                    console.log(column,column+3,column+6)
                    if(i===0 || i===8){

                        if(fillSlots[0]===0 && fillSlots[4]===0 && fillSlots[8]===0){
                            solPlaces.push(i);
                        }
                    }
                    else if(i===2 || i===6){
                        if(fillSlots[2]===0 && fillSlots[4]===0 && fillSlots[6]===0){
                            solPlaces.push(i);
                        }
                    }
                    else if(i===4){
                        if(fillSlots[0]===0 && fillSlots[4]===0 && fillSlots[8]===0 && fillSlots[2]===0 && fillSlots[4]===0 && fillSlots[6]===0){
                            solPlaces.push(i);
                        }
                    }
                    else{
                        solPlaces.push(i);
                    }
                }
            }
        }
        if(solPlaces.length==0)
            return -1;
        else{
            return solPlaces[Math.floor(Math.random() * solPlaces.length)]
        }
    }
    const getAllPossibleCrosses = ()=>{
        const row1 = checkEach(0,1,2);
        const row2 = checkEach(3,4,5);
        const row3 = checkEach(6,7,8);
        //column check
        const column1 = checkEach(0,3,6);
        const column2 = checkEach(1,4,7);
        const column3 = checkEach(2,5,8);
        //diagonal check
        const backWard = checkEach(0,4,8);
        const forward = checkEach(2,4,6);
        const allSlostsBoxes = [];
        allSlostsBoxes.push(row1);
        allSlostsBoxes.push(row2);
        allSlostsBoxes.push(row3);
        allSlostsBoxes.push(column1);
        allSlostsBoxes.push(column2);
        allSlostsBoxes.push(column3);
        allSlostsBoxes.push(backWard);
        allSlostsBoxes.push(forward);
        return allSlostsBoxes;
    }
    const AIUser = ()=>{
        console.log("its me AI");
        //step1:CheckForWinningBox
        //row check
        const allSlostsBoxes = getAllPossibleCrosses();
        console.log(allSlostsBoxes);
        for(let k=0;k<allSlostsBoxes.length;k++){
            if(allSlostsBoxes[k][1].length===1){
                if(!fillSlots.includes(allSlostsBoxes[k][0]) && allSlostsBoxes[k][0]<=9 && allSlostsBoxes[k][0]>0){
                    fillSlots[allSlostsBoxes[k][1][0]] = allSlostsBoxes[k][0];
                    setFillSlots([...fillSlots]);
                    document.getElementById(allSlostsBoxes[k][2][0]).classList.add("win1");
                    document.getElementById(allSlostsBoxes[k][2][1]).classList.add("win2");
                    document.getElementById(allSlostsBoxes[k][2][2]).classList.add("win3");
                    setAiPoints(pre=>pre+1)
                    alert("hey AI WON!");
                    // document.getElementById(allSlostsBoxes[k][1])
                    return;
                }
            }
        }     
        //select number and slot
        //step:2 -> check for 0% winning state means select row column and diagonal empty
        const place = checkForAnyEmptyRowAndColumn();
        console.log("avil places",place);
        if(place>=0){
            const avail = [1,2,3,4,5,6,7,8,9];
            for(let j=0;j<fillSlots.length;j++){
                if(fillSlots[j]!==0)
                    avail.splice(avail.indexOf(fillSlots[j]),1);
            }
            console.log(avail);
            fillSlots[place] = avail[Math.floor(Math.random() * avail.length)] //need random select;
            setFillSlots([...fillSlots]);
            setIsUserTurn(true);
            return;
        }
        //step:3 -> check every value and get less possibility of user to win
        console.log("under third step")
        for(let i=0;i<cross*cross;i++){
            
            if(fillSlots[i]===0){
                for(let k=1;k<10;k++){
                    if(!fillSlots.includes(k)){
                        fillSlots[i] = k;
                        console.log(fillSlots)
                        const allSlostsBoxes = getAllPossibleCrosses();
                        let j = 0;
                        for(j=0;j<allSlostsBoxes.length;j++){
                            if(k==1){
                                console.log(allSlostsBoxes);
                                console.log(allSlostsBoxes[j][1].length)
                                console.log(allSlostsBoxes[j][0],fillSlots.includes(allSlostsBoxes[j][0]))
                            }
                            //if user has a chance the break the k value;
                            if(allSlostsBoxes[j][1].length==1 && (!fillSlots.includes(allSlostsBoxes[j][0]) && allSlostsBoxes[j][0]<10 && allSlostsBoxes[j][0]>0)){
                                // alert('break')
                                console.log("on",allSlostsBoxes[j],k)
                                fillSlots[i] = 0;
                                break;
                            }
                        }
                        if(j==allSlostsBoxes.length){
                            setIsUserTurn(true);
                            setFillSlots([...fillSlots]);
                            return;
                            
                        }
                    }
                }
            }
        }
        //step:4 -> if there is no option select any block and keep any number
        for(let i = 0;i<9;i++){
            if(fillSlots[i]==0){
                for(let k=1;k<10;k++){
                    if(!fillSlots.includes(k)){
                        fillSlots[i] = k;
                        break;
                    }
                }
            }
        }
        // validDateAll();
        setIsUserTurn(true);
    }
    useEffect(()=>{
        setAvailableNumbers([...Array.from({length: cross*cross}, (_, i) => i + 1)]);
        setFillSlots([...Array.from({length:cross*cross},()=>0)]);
    },[])
  return (
    <div>
        <div className='Header' style={{display:'flex',justifyContent:'space-around'}}>
            <div style={{float:'left'}}>Your Points - {userPoints}</div>
            <h3>{(isUserTurn)?"Your Turn":'AI Turn'}</h3>
            <div style={{float:'right'}}>Your Points - {aiPoints}</div>
        </div>    
        <div style={{width:'100vw',height:'100vh',display:'flex',alignItems:'center'}}>
            <div className='container' style={{width:'30%',marginLeft:'auto',marginRight:'auto'}}>
                {
                    availableNumbers.map((val,key)=>{
                        return (
                            <input style={{width:'30%',height:'30px',textAlign:'center'}} key={key} id={key} type='number' disabled={fillSlots[key]!==0 && true} value={(fillSlots[key]!=0)?fillSlots[key]:''} onChange={(e)=>{
                                if(e.target.value>cross*cross || e.target.value<=0){
                                    alert(`hey range is between 1 - ${cross*cross}`);
                                }
                                else if(fillSlots.includes(parseInt(e.target.value))){
                                    alert("duplicate values are not allowed!");
                                }
                                else if(!isUserTurn){
                                    alert("please let AI to Keep its choice!");
                                }
                                else{
                                    fillSlots[key] = parseInt(e.target.value);
                                    setFillSlots([...fillSlots]);
                                    setIsUserTurn(false);
                                    validDateAll()
                                    AIUser()
                                }
                            }}/>
                        )
                    })
                    
                }
                <button className="btn btn-warning" style={{marginTop:'5px',backgroundColor:'#FFC101',padding:'5px 13px 5px 13px',border:'none'}} onClick={()=>{
                    reset();
                }}>Reset</button>
            </div>
        </div>
    </div>
  )
}
