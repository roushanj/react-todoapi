import React from 'react';
import { Card, Grid, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import Modal from '@material-ui/core/Modal';
import Checkbox from '@material-ui/core/Checkbox';
import Fade from '@material-ui/core/Fade';
import Axios from 'axios';
import { Api } from 'config/api';
import { header } from 'config/api';

const useStyles = makeStyles(() => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
  }));
  
  

export default function ViewTodo(props) {
    const [open, setOpen] = React.useState(false);
    const [newData, setData] = React.useState({});
    const classes = useStyles();
    const [task, setTask] = React.useState('');
    const [desc, setDesc] = React.useState('');

    const id = window.location.search.split("=")[1];

    const handleChange = (x) => {
    
      props.callback(true)
        const data = {
            "bucket_id": parseInt(id),
            "completed": !x.completed
        }

        Axios.put(Api.baseURL+`${x.id}/`,data, {headers:header})
            .then((data)=>{
                props.callback(false)
            })
            .catch(err=>{
                console.log(err);
            })
    };

    const handleTask = (e) =>{setTask(e.target.value)}
    const handleDesc = (e) =>{setDesc(e.target.value)}
    const handleSubmit = () =>{
        props.callback(true)
        const data = {
            "title": task.length === 0?newData.title:task,
            "content": desc.length === 0?newData.content:desc,
            "bucket_id": parseInt(id),
            "completed": false
        }

        Axios.put(Api.baseURL+`${newData.id}/`,data, {headers:header})
            .then((data)=>{
                setTask('');
                setDesc('');
                props.callback(false)
            })
            .catch(err=>{
                console.log(err);
            })
    }
    const handleOpen = (x) => {
      setData(x)
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleDelete = (id) =>{
        Axios.delete(Api.baseURL+`${id}/`, {headers:header})
            .then((response)=>{
                props.callback(false)
            })
            .catch(err=>{
                console.log(err)
            })
    }

    const TodoViewList = props.list.map((x, index)=>
    <Grid item xs={2} key={index}>
       
        <Card class="todo-card todo-card-1" >
            <Grid container spacing={2}>
                <Grid item xs={12}>
                <div style={{textAlign:'center'}} onClick={()=>handleOpen(x)}>
                    <p style={{overflow:"hidden", textAlign:'center'}} > {x.title}</p>
                    {x.completed?<small style={{color:"green"}}>Done</small>:<small > 3 Days</small>}
                </div>
                
                </Grid>
                <Grid item xs={12}> <Divider /></Grid>
                <Grid item xs={6}>
               
                <div style={{textAlign:'center'}} >
                    <p onClick={()=>handleDelete(x.id)}><DeleteTwoToneIcon color={"secondary"} /></p>
                </div>
                </Grid>
                <Grid item xs={6}>
     
                <div style={{textAlign:'center', marginTop:"12%"}} >
                   
                    <Checkbox
                        style={{color:"green"}}
                        checked={x.completed}
                        onChange={()=>handleChange(x)}
                  
                    />
                    
                </div>
                </Grid>
            </Grid>
            
        </Card>

        
    </Grid> 
    )
    return(
        <Grid container spacing={2} >
         {TodoViewList}
         <Modal
               
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                
            >
                <Fade in={open}>
                <Card class="card3 card3-1" >
                <Grid container spacing={2}>
                    
                    <Grid item xs={12}>
                    <div class="sfields">
                    <div style={{textAlign:"center"}}>
                        <h2>Update Todo</h2>
                    </div>
                    <div class="userinput"><input type="text" class="user-input" placeholder={newData.title} onChange={handleTask} /></div>
                    
                    <div class="userinput"><input type="text"  class="pass-input" placeholder={newData.content} onChange={handleDesc} /></div>
                    <div style={{textAlign:"center"}}><button class="sform-button" onClick={handleSubmit}>Update</button></div>
                    </div>
                    </Grid>
                </Grid>
                </Card>
                </Fade>
            </Modal>
        </Grid>
  
    );
}