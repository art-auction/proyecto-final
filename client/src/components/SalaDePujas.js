import React, {Component} from 'react'
import styled from '@emotion/styled';
import cx from 'classnames';

const Message = styled.div`
    padding: 3px 5px;
    border-radius: 5px;
    margin:5px;
    &.me{
        background: lightgreen;
        align-self: flex-end;
    }
    &.server{
        background: lightgray;
        color: black;
        align-self: flex-start;
    }
`

const MessagesFlow =  styled.div`
    border: 1px solid red;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
`

export default class SalaDeSubasta extends Component{
//constructor


render(){
    return(null)
}





} //= connect(state=>({Message}))