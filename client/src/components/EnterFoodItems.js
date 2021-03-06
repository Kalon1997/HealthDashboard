import React, { useState } from 'react'
import Select from 'react-select'
import Nutri from './nutri.json'
import classes from './EnterFoodItems.module.css'
const customStyles = {
    option: (provided, state) => ({
        ...provided,
        borderBottom: '1px solid white',
        color: state.isDisabled ? '#F1FAEE' : '#1D3557',
        fontWeight: 'bolder',
        padding: 20,
        backgroundColor: state.isFocused ? '#457B9D' : '#A8DADC',
        hover: "green"
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';
        return { ...provided, opacity, transition };
    }
    }
var cusDivIndex = -1;
var cusInpIndex = -1;
var finalNutriIntake = {
    totalCalorieIntake : 0,
    totalCarbohydrateIntake:0,
    totalProteinIntake:0,
    totalOtherIntake:0
}
var finalfood = []
var list = [];
    Nutri.map((i) => (
        list.push({
           key: i.name+"_",
           id: i.name,  //in one gram only
           label: i.name+i.emoji,
           cal: i.kcal,
           emoji: i.emoji,
           carb: i.carbInG,
           prot: i.proteinInG,
           otherN: (1 - i.carbInG - i.proteinInG),
           isdisabled: false 
       })
    ))




const EnterFoodItems = props => {
  const [newmeal, setnewmeal] = useState([])
//   const [customNewmeal, setCustomNewmeal] = useState([])

  const divArr = [
    { 
        divId:0,
        inputs:{
            itemName:
            {
                type: "text",
                id:0,
                value: "",
                placeholder: "Name ?"
            },
            itemCal:
            {
                type: "number",
                id:0,
                value: "",
                placeholder: "kcal ?"
            }
        }
    }
  ];
  const [cusDiv, setCusDiv] = useState([])
  const [cusItemName, setCusItemName] = useState()
  const [cusCal, setCusCal] = useState()
//   const [cusCarb, setCusCarb] = useState()
//   const [cusProt, setCusProt] = useState()
//   const [cusQty, setCusQty] = useState()
  
    // const storeit =  (e) => {
    //     e.preventDefault();
    // }

    const handleChangeForName = (index, event) => {
        event.preventDefault();
        setCusDiv( s => {
            const newArr = s.slice();
            newArr[index].inputs.itemName.value = event.target.value;
            return newArr;
        })
    }
    const handleChangeForCal = (index, event) => {
        event.preventDefault();
        setCusDiv( s => {
            const newArr = s.slice();
            newArr[index].inputs.itemCal.value = event.target.value;
            return newArr;
        })
    }
    
    return (
        <center>
            <Select
                styles={customStyles} 
                width='200px'
                menuColor='green'
                isOptionDisabled={(option) => option.isdisabled}
                options={list}
                onChange={
                    
                    e => {
                         finalfood.push(
                             {
                                id:e.id,
                                label:e.label,
                                cal:e.cal,
                                qty:1,
                                carb: e.carb,
                                prot: e.prot,
                                otherN: e.otherN,
                            }
                        )

                    
                    // console.log(finalfood)
                        setnewmeal(prev => [
                            ...prev,
                            {
                                id:e.id,
                                label:e.label,
                                cal:e.cal,
                                qty:1,
                                carb: e.carb,
                                prot: e.prot,
                                otherN: e.otherN,
                            }
                        ])
                        e.isdisabled = true
                        e.target.value = null  // this to unselect
                       
                    }
                    }
            >
            </Select>
            <button className={classes.btn} onClick={(e) => {
                e.preventDefault();

                setCusDiv( (s) => {
                    return [
                        ...s,     
                        { 
                            divId: cusDivIndex+1,
                            inputs:{
                                itemName:{
                                    type: "text",
                                    id: cusInpIndex+1,
                                    value: cusItemName,
                                    placeholder: cusInpIndex+1
                                },
                                itemCal:{
                                    type: "number",
                                    id: cusInpIndex+2,
                                    value: cusItemName,
                                    placeholder: cusInpIndex+2
                                }
                            },
                            
                        }
                    ];
                })
            }}>Didn't find your food in list ? ???</button>
            {
        cusDiv.map((item, key) => {
            return (
                <div className={classes.cusDivClass}
                    key={key}
                    id={item.divId}
                    
                >
                    <input type={item.inputs.itemName.type}
                    value={cusItemName}
                    id={item.inputs.itemName.id}
                    placeholder={item.inputs.itemName.placeholder}
                    onChange={(event)=>handleChangeForName(item.divId,event)} >   
                    </input>

                    <input type={item.inputs.itemCal.type}
                    value={cusCal}
                    id={item.inputs.itemCal.id}
                    placeholder={item.inputs.itemCal.placeholder}
                    onChange={(event)=>handleChangeForCal(item.divId,event)} >   
                    </input>

                </div>
            )
        })



            }
            <br></br>
            {newmeal.map(i => (<p>{i.label} <input placeholder='Enter in grams...' className='mx-3' type="number" onChange={e => {
             e.preventDefault();
             var editedindex =  finalfood.findIndex(itemm => itemm.id === i.id);
          
            //    console.log(editedindex)
               finalfood[Number(editedindex)].qty = e.target.value
            //    console.log(finalfood)
               
            }}></input><button style={{marginLeft: "2rem"}} onClick={ e => {
                e.preventDefault();
                var editedindex =  finalfood.findIndex(itemm => itemm.id === i.id);
                finalfood.splice(editedindex,1);
                const newList = newmeal.filter((item) => item.id !== i.id);
                setnewmeal(newList);
                const listIndex = list.findIndex((item)=>item.id === i.id)
                list[listIndex].isdisabled = false;
            }} className={classes.btn}>???</button> <br  /></p>))}
                

        
           
            <button className={classes.btn} onClick={ e => {
                e.preventDefault();
                console.log(finalfood)
                for(var j =0; j<finalfood.length; j++) {
                    finalNutriIntake.totalCalorieIntake+= Number(finalfood[j].cal * finalfood[j].qty);
                    finalNutriIntake.totalCarbohydrateIntake += (finalfood[j].carb * finalfood[j].qty);
                    finalNutriIntake.totalProteinIntake += (finalfood[j].prot * finalfood[j].qty);
                    finalNutriIntake.totalOtherIntake += (finalfood[j].otherN * finalfood[j].qty);  
                }
                console.log(finalNutriIntake)
                }  
  
                
            }>Get Nutrients ! </button>
            <br />
            
            <br />
            <b>Total Calorie in the meal is <span className='text-success' >{}</span></b>
            <br />
            <br />
            
        </center>
    )
}
export default EnterFoodItems;


//https://www.freecodecamp.org/news/build-dynamic-forms-in-react/?msclkid=87b3e7d6ce8211ec912001d5a5bf0cb7