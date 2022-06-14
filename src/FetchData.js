import React, {useState} from 'react'
import axios from 'axios'
function FetchData() {

    const [alldata, setData] = useState([]);
    const [alldatadata, setDataData] = useState([]);


    const fetchData = () => {
        var x = document.getElementsByClassName("clickButton");
        for (var i=0;i<x.length;i+=1){
                x[i].style.display = 'none';  
        }
        axios.get("https://reqres.in/api/users?page=2")
        .then((response)=>{
            console.log(response.data.data)
            setData(response.data.data)
        })
    }

    const fetchDataData = () => {
        
        axios.get("https://reqres.in/api/users/2")
        .then((response)=> {
            console.log(response.data.data)
            setDataData(response.data.data)
        })

        var x = document.getElementsByClassName("container");
        for (var i=0;i<x.length;i+=1){
            if (x[i].style.display == 'none'){
                x[i].style.display = 'block';
            }           
            // else{
            //     x[i].style.display = 'none'
            // }
          }
          
    }

  return (
    <>
        <button className='clickButton' type="" onClick={fetchData} style = {{display:'block'}}>Click here to get user buttons</button>
        <div>
                        <div className="container" style={{padding: "10px", display: "none", border: "3px solid black", marginRight:"70%"}}>
                            <div className="card" style={{width: "18rem"}}>
                                <div className="card-body" >
                                    <img src={alldatadata.avatar} alt=""/>
                                    <h3 className="card-title">Name: {alldatadata.first_name} {alldatadata.last_name}</h3>
                                    <h4 className="card-subtitle mb-2 text-muted">Email: {alldatadata.email}</h4>
                                    <h4>ID: {alldatadata.id}</h4>
                                    
                                </div>
                            </div>
                        </div>
            {
                alldata.map((value, index)=>{
                    return(
                        <div style = {{display:"inline-block", margin: '20px 20px 20px 0'}}>
                        <button style ={{fontSize:'24px'}} onClick={fetchDataData}>{index+1}</button>
                        </div>
                        );
                    
                    })      
        }
        
        </div>
    </>
  )
}

export default FetchData