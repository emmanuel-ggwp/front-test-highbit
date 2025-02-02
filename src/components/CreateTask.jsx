import React from 'react';
import { useState } from 'react'


import fetchData from '../utils/fetchData'
import LoadingSpinner from '../icons/LoadingSpinner.jsx';

const CreateTask = ({
    refresh
}) => {

    const [title, setTitle] = useState('')

    const [submiting, setSubmiting] = useState(false)

    const processSubmit = (event) => {
        event.preventDefault()

        if (submiting) return

        setSubmiting(true)
        fetchData('/notes/', {
            method: 'POST',
            body: {
                title
            },
        })
            .then((response) => {
                console.info('Task created succesfully', response)
                alert('Task created succesfully')
                refresh()
                setTitle('')
            })
            .catch((e) => {
                console.error('There was an error creating the task', e)
                alert('There was an error creating the task' + e)
            })
            .finally(() => {
                setSubmiting(false)
            })
    }

    console.log({ submiting })

    const buttonClassName = `ml-2 border-2 rounded-lg flex ${submiting ? 'cursor-not-allowed border-gray-500' : 'hover:text-white hover:bg-green-500 border-green-500 p-2 text-green-500'}`;

    return (
        <form className="mt-4 flex p-2" onSubmit={processSubmit}>
            <input
                className="grow border-b-2 border-gray-500 text-black"
                type="text" placeholder="Enter your task here"
                value={title} onInput={e => {
                    setTitle(e.target.value)
                }}
            />
            <button
                disabled={submiting}
                className={buttonClassName}
            >
                {
                    submiting
                        ? <LoadingSpinner />
                        : <svg className="h-6 w-6" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="12" r="9" />  <line x1="9" y1="12" x2="15" y2="12" />  <line x1="12" y1="9" x2="12" y2="15" /></svg>
                }


            </button>
        </form>
    );
};

export default CreateTask;
