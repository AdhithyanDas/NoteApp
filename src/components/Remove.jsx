import React from 'react'
import { useDispatch } from 'react-redux'
import { removeNote } from '../redux/slice/noteSlice'

function Remove({ remove }) {

    const dispatch = useDispatch()

    return (
        <>
            <button className='btn' onClick={() => { dispatch(removeNote(remove.time)) }}><i className="fa-regular fa-trash-can fs-5" style={{ color: 'red' }} /></button>
        </>
    )
}

export default Remove