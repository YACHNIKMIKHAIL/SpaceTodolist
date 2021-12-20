import React from 'react';
import {Button, IconButton} from "@mui/material";
import {Delete, ShutterSpeed} from "@mui/icons-material";



export const ButtonRender = (name: string, callback: () => void, className?: string) => {
    if(name==='+'){
        return <IconButton  color="success" onClick={()=>callback()}>
            <ShutterSpeed/>
        </IconButton>

    }
    if(name==='x'){
        return <IconButton aria-label="delete" size="small" onClick={()=>callback()}>
            <Delete fontSize="small" />
        </IconButton>
    }
    if(name==='All'){
        return <Button variant={className?'contained':'text'} onClick={()=>callback()}>All</Button>
    }
    if(name==='Active'){
        return <Button variant={className?'contained':'text'} onClick={()=>callback()}>Active</Button>
    }
    if(name==='Complited'){
        return <Button variant={className?'contained':'text'} onClick={()=>callback()}>Complited</Button>
    }


};

export default ButtonRender;