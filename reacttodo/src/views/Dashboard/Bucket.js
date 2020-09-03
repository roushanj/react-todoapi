import React from 'react';
import { Card, Grid } from '@material-ui/core';

export default function Bucket(props) {
    
    const handleCallback = (data) =>{
        props.val(data)
    }
 

    const BucketList = props.list.map((x, index)=>
    <Grid item xs={3}>
        <Card class="card card-1" onClick={()=>handleCallback(x.id)}>
            {x.name}
        </Card>
    </Grid> 
    )
    return(
        <Grid container spacing={3}>
            {BucketList}    
        </Grid>
          
      
    );
}