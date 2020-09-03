import React from 'react';
import { Card, Grid } from '@material-ui/core';
import Axios from "axios";
import { Api } from 'config/api';
import { header } from 'config/api';


export function CreateBucket(props) {
   
    const [desc, setDesc] = React.useState('');
    const [task, setTask] = React.useState('');
    const handleTask = (e) =>{setTask(e.target.value)}
    const handleDesc = (e) =>{setDesc(e.target.value)}

    const handleSubmit = () =>{
        props.callback(true)
        const data = {
            "name": task,
            "about": desc
        }

        Axios.post(Api.bucketURL,data, {headers:header})
            .then((data)=>{
                setTask('');
                setDesc('');
                props.callback(false)
            })
            .catch(err=>{
                console.log(err);
            })
    }
 
    return(
        <Grid container spacing={3}>
           <Grid item xs={3}>
                <Card class="card2 card2-1">
                <div class="sfields">
                    <div style={{textAlign:"center"}}>
                        <h2>Create Bucket</h2>
                    </div>
                    <div class="userinput"><input type="text" class="user-input" placeholder="Bucket Title" onChange={handleTask} /></div>
                    <div class="userinput"><input type="text" class="pass-input" placeholder="Any Descriptions ?" onChange={handleDesc} /></div>
                    <div style={{textAlign:"center"}}><button class="sform-button" onClick={()=>handleSubmit()}>Create</button></div>
                </div>
                </Card>
            </Grid>   
        </Grid>
          
      
    );
}

export function CreateTodo(props) {
    const [task, setTask] = React.useState('');
    const [desc, setDesc] = React.useState('');
    const handleTask = (e) =>{setTask(e.target.value)}
    const handleDesc = (e) =>{setDesc(e.target.value)}
    const handleSubmit = () =>{
        props.callback(true)
        const data = {
            "title": task,
            "content": desc,
            "bucket_id": props.id,
            "completed": false
        }

        Axios.post(Api.baseURL,data, {headers:header})
            .then((data)=>{
                setTask('');
                setDesc('');
                props.callback(false)
            })
            .catch(err=>{
                console.log(err);
            })
    }
 
    return(

     <Grid container spacing={3}>
        <Grid item xs={3}>
             <Card class="card2 card2-1">
             <div className="sfields">
                 <div style={{textAlign:"center"}}>
                     <h2>Create Todo</h2>
                 </div>
                 <div className="userinput"><input type="text" value={task} className="user-input" placeholder="Task Name" onChange={handleTask} /></div>
                 
                 <div className="userinput"><input type="text" value={desc} className="pass-input" placeholder="Short Description" onChange={handleDesc} /></div>
                 <div style={{textAlign:"center"}}><button className="sform-button" onClick={handleSubmit}>Create</button></div>
             </div>
             </Card>
         </Grid>   
     </Grid>
    );
}