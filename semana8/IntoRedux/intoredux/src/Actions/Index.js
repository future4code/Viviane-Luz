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
        type: 'ADICIONAR_TAREFA',
        payload: {
            text: completas
        }

    }
}
export function deleteTask(text) {
    return {
        type: 'Deletar_TAREFA',
        payload: {
            text: pendentes
        }

    }
}

export function markTask(text) {
    return {
        type: 'Marcar_TAREFA',
        payload: {
            text: todas
        }

    }
}





export default Index
