import React, {useState} from "react";
import  Select from "react-select";
let counter= 0;

function SelectOption(){

  const [options, setOptions]= useState([{label: "name", value: "Akinyemi", id: 1}, {label: "profession", value: "Doctor", id: 2}, {label: "hobby", value: "Gaming", id: 3}]);
  const [label, setLabel]= useState("");
  const [value, setValue]= useState("");
  const [id, setId]= useState(0);

  const [title, setTitle]= useState("");
  const [content, setContent]= useState("");
  const [id1, setId1]= useState("");
  const [multiOptions, setMultiOptions]= useState([]);

  const updateOptions= (e) =>{
      e.preventDefault();
      setOptions(prevOptions => {
          return [{label, value, id}, ...prevOptions]
      })

      setLabel("");
      setValue("");
      setId("");
  } 

  const displayInfo=(filter)=> {
      setTitle(filter.label);
      setContent(filter.value);
      setId1(filter.id);
  }
  
   const multipleOptions=(filter)=> {
       
    // if(filter[counter] === undefined){
    //     return;
    // }
        setMultiOptions(prevOptions => {
            return [{label: filter[counter].label, value: filter[counter].value, id: filter[counter].id}, ...prevOptions]
        })
      
   counter++;       
   }

   const customStyles= {
       option: (provided, state)=> (
           {...provided, color: state.isSelected ? "red" : "blue"}
       ),
       menu: (provided, state)=> (
           {width: "200px"}
       ), 
       controls: ()=> {
           return {color: "green"}
       }

   }



    return(
          <div className="select">
              <Select options={options} styles={customStyles} onChange={(e) => {displayInfo(e)}}></Select>
                 
              <div>
                  <h3>Title: <span>{title}</span></h3>
                  <h3>Content: <span>{content}</span></h3>
                  <h3>Id: <span>{id1}</span></h3>
              </div>

              <Select options={options} isMulti onChange={(e)=> {multipleOptions(e)}}></Select>
              {multiOptions.map(option=> (
                  <div key={Math.random()}>
                    <h3>Title: <span>{option.label}</span></h3>
                    <h3>Content: <span>{option.value}</span></h3>
                    <h3>Id: <span>{option.id}</span></h3>
                  </div>   
               ))}


              <form style={{textAlign: "center", marginTop: "300px"}} onSubmit={updateOptions}>
                  <input type="text" value={label} onChange={(e)=> {setLabel(e.target.value) }} placeholder="Enter The Label Here!"/>
                  <input type="text" value={value} onChange={(e)=> {setValue(e.target.value) }} placeholder="Enter The Value Here!"/>
                  <input type="number" value={id} onChange={(e)=> {setId(e.target.value)}} placeholder="Enter The Id Here!"/>
                  <p><button type="submit">Submit</button></p>
              </form>
          </div>
    );
}


export default SelectOption;