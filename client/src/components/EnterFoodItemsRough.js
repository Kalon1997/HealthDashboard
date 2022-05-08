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
var cusIndex = -1;
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
  const [customNewmeal, setCustomNewmeal] = useState([])

  const divArr = [
    { 
        itemName:{
            type: "text",
            id:0,
            value: "",
            placeholder: "Name ?"
        },
        itemCal:{
            type: "number",
            id: 0,
            value: 0,
            placeholder: "kcal ?"
        },
        itemQty:{
            type: "number",
            id: 0,
            value: 0,
            placeholder: "Qty in g ?"
        },
        itemCarb:{
            type: "number",
            id: 0,
            value: 0,
            placeholder: "Carb/g ?"
        },
        itemProt:{
            type: "number",
            id: 0,
            value: 0,
            placeholder: "protein/g ?"
        }
    }
  ];
  const [cusDiv, setCusDiv] = useState(divArr)
  const [cusItemName, setCusItemName] = useState()
  const [cusCal, setCusCal] = useState()
  const [cusCarb, setCusCarb] = useState()
  const [cusProt, setCusProt] = useState()
  const [cusQty, setCusQty] = useState()
  
    // const storeit =  (e) => {
    //     e.preventDefault();
    // }
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
                    var newCusIndex = ++cusIndex;
                    return [
                        ...s,
                        
                        { 
                            itemName:{
                                type: "text",
                                id: newCusIndex,
                                value: "",
                                placeholder: "Name?"
                            },
                            itemCal:{
                                type: "number",
                                id: newCusIndex,
                                value: 0,
                                placeholder: "kcal?"
                            },
                            itemQty:{
                                type: "number",
                                id: newCusIndex,
                                value: 0,
                                placeholder: "qtyingrams?"
                            },
                            itemCarb:{
                                type: "number",
                                id: newCusIndex,
                                value: 0,
                                placeholder: "carbingrams?"
                            },
                            itemProt:{
                                type: "number",
                                id: newCusIndex,
                                value: 0,
                                placeholder: "proingrams?"
                            }
                        }
                    ];
                })
            }}>Add ➕</button>
            {
        cusDiv.map((item, key) => {
            return (
                <div className={classes.cusDivClass}
                    id={key}
                >
                    <input type={item.itemName.type}
                    value={item.itemName.value}
                    id={item.itemName.id}
                    placeholder={item.itemName.placeholder}>
                    </input>

                    <input type={item.itemCal.type}
                    value={item.itemCal.value}
                    id={item.itemCal.id}
                    placeholder={item.itemCal.placeholder}>
                    </input>

                    <input type={item.itemQty.type}
                    value={item.itemQty.value}
                    id={item.itemQty.id}
                    placeholder={item.itemQty.placeholder}>
                    </input>

                    <input type={item.itemQty.type}
                    value={item.itemQty.value}
                    id={item.itemQty.id}
                    placeholder={item.itemQty.placeholder}>
                    </input>

                    <input type={item.itemCarb.type}
                    value={item.itemCarb.value}
                    id={item.itemCarb.id}
                    placeholder={item.itemCarb.placeholder}>
                    </input>

                    <input type={item.itemProt.type}
                    value={item.itemProt.value}
                    id={item.itemProt.id}
                    placeholder={item.itemProt.placeholder}>
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
            }} className={classes.btn}>❌</button> <br  /></p>))}
                

        
           
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