import React from 'react';
import { CircularProgress, Grid ,Divider } from '@material-ui/core';
import { CreateTodo } from './Create';
import Axios from "axios";
import { Api } from 'config/api';
import { header } from 'config/api';
import ViewTodo from './ViewTodo';

export default function Todo(props) {
    const [view, setView] = React.useState(true);
    const [todo, setTodo] = React.useState([]);
    const [update, setUpdate] = React.useState([]);
    const [loader, setLoader] = React.useState(false);
    const [buck, setBucket] = React.useState([]);
    const id = window.location.search.split("=")[1];
    const childCallBack = (data) =>{
        onLoad()
        setLoader(data)
    }

    const viewChildCallback = (data) =>{
        setUpdate(data);
        setView(false);
    }

    function onLoad() {
        try {
            Axios.get(Api.baseURL, {headers:header})
            .then((data)=>{
            const final = []
           
                data.data.map((x, index)=>{
                    if (x.bucket_id === parseInt(id)) {
                        final.push(x)
                    }
                    
                })
                setTodo(final)
      
            })
            .catch(err=>{
                console.log(err);
            })  
        } catch (error) {
            
        }
        
    }
 
    React.useEffect(()=>{onLoad();
        try {
            Axios.get(Api.bucketURL+`${id}/`, {headers:header})
            .then((data)=>{
                setBucket([data.data])
            })
            .catch(err=>{
                console.log(err);
            })  
        } catch (error) {
            
        }
        
    },[])

    function countPending(val) {
        const final = []
        try {
            todo.map((x, index)=>{
                if(x.bucket_id === parseInt(id) ){
                    if(x.completed === val){
                        final.push(x)
                    }

                }
            })
            return final.length
        } catch (error) {
            
        }
    }

    const countView = [1].map((x, index)=>
        <div style={{textAlign:'center', marginTop:'10%'}} key={index}>
             <hr />
            <p>Total Tasks:  {todo.length}</p>
            <p>Pending Tasks: <strong style={{color:'coral'}}>{countPending(false)}</strong>
            </p>
            <p>Completed Tasks: <strong style={{color:'green'}}>{countPending(true)}</strong></p>
        </div>
    );

    const bucketDetail = buck.map((x, index)=>
        <div style={{textAlign:'center', marginBottom:'5%'}} key={index}>
            <h1>{x.name}</h1>
            <hr />
        </div>
    );
 
    return(
        
    <Grid container spacing={4}>
        <Grid item lg={3} > 
            {bucketDetail}
            <CreateTodo callback={childCallBack} id={id} update={update} view={view} />
            {countView}
        </Grid>
        <Grid item lg={1}>
            <Divider orientation="vertical" />
        </Grid>
        <Grid item lg={7}>
        {loader?<CircularProgress />:todo.length !== 0?<ViewTodo list={todo} callback={childCallBack} viewCallback={viewChildCallback} />:<h3>No Task Present</h3>}
        </Grid>  
    </Grid>
          
    );
}