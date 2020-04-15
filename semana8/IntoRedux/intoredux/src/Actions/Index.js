import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import axios from 'axios'


export function createTask(text, id){
    return{
        type: 'CREATE_TASK',
        payload: {
            text: text,
            id: id,
            completa:false
        }
    }
} 

export function addTask(text) {
    return {
        type: 'ADD_TASK',
        payload: {
            text: pendentes
        }

    }
}

export function deleteTask(text) {
    return {
        type: 'Deletar_TAREFA',
        payload: {
            text: deletar
        }

    }
}

export function markTask(text) {
    return {
        type: 'MARK_TASK',
        payload: {
            text: copletas
        }

    }
}






export default Index
