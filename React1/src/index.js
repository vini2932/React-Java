import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils'
import React from 'react'
import  ReactDOM  from 'react-dom'
import App from './App'
import Colocar from './routes'
/*Comentario de reset de commit no git(2)*/ 
ReactDOM.render(

<Colocar></Colocar>
  
    ,
    document.getElementById("root")
    )