import React from 'react';
import Axios from "axios";
import Bucket from './Bucket';
import { Grid, Divider } from '@material-ui/core';
import { Api } from 'config/api';
import { header } from 'config/api';

import { CreateBucket } from './Create';
import { useHistory } from "react-router-dom";


export default function Dashboard() {
    const [bucket, setBucket] = React.useState([]);
    const [loader, setLoader] = React.useState(false);
    const history = useHistory();

    const callBack = (data) =>{
        onLoad()
        setLoader(data)
    }
    function onLoad() {

        try {
            Axios.get(Api.bucketURL, {headers:header})
            .then((data)=>{
                setBucket(data.data)
            })
            .catch(err=>{
                alert("dede")
                console.log(err);

            }) 
        } catch (error) {
            console.log(error)
        }
        
    }
    React.useEffect(()=>{onLoad()},[])

    const childCallback = (data) =>{history.push(`/admin/todo?id=${data}`)}
    
    return(
 
        <Grid container spacing={4}>
            <Grid item lg={3}>
            <CreateBucket list={bucket} callback={callBack} />
            </Grid> 
            <Grid item lg={1}>
                <Divider orientation="vertical" />
            </Grid>
            <Grid item lg={7}>
            {bucket.length === 0? <h3>No Bucket Found</h3>:<Bucket list={bucket} val={childCallback}/>}
            </Grid>    
        </Grid>
    );
}