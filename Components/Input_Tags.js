import React from 'react'
import '../Stylesheets/inputs.css'

const InputTags = () => {
    return (
        <>
            <h1>INPUT TAGS</h1>
            <div className='input-container'>
                <div className='labels'>
                    <label>text :</label>
                    <input type='text' />
                </div>
                <div className='labels'>
                    <label>Password :</label>
                    <input type='password' />
                </div>
                <div className='labels'>
                    <label>checkbox :</label>
                    <input type='checkbox' />
                    <input type='checkbox' />
                </div>
                <div className='labels'>
                    <label>button :</label>
                    <button>Button</button>
                </div>
                <div className='labels'>
                    <label>email :</label>
                    <input type='email' />
                </div>
                <div className='labels'>
                    <label>file :</label>
                    <input type='file' />
                </div>
                <div className='labels'>
                    <label>image :</label>
                    <input type='image' />
                </div>
                <div className='labels'>
                    <label>number :</label>
                    <input type='number' />
                </div>
                <div className='labels'>
                    <label>range :</label>
                    <input type='range' />
                </div>
                <div className='labels'>
                    <label>search :</label>
                    <input type='search' />
                </div>
                <div className='labels'>
                    <label>time :</label>
                    <input type='time' />
                </div>
                <div className='labels'>
                    <label>date :</label>
                    <input type='date' />
                </div>
                <div className='labels'>
                    <label>datetime :</label>
                    <input type='datetime-local' />
                </div>
                <div className='labels'>
                    <label>week :</label>
                    <input type='week' />
                </div>
                <div className='labels'>
                    <label>month :</label>
                    <input type='month' />
                </div>
                <div className='labels'>
                    <label>url :</label>
                    <input type='url' />
                </div>
                <div className='labels'>
                    <label>submit :</label>
                    <input type='submit' />
                </div>
                <div className='labels'>
                    <label>reset :</label>
                    <input type='reset' />
                </div>
                <div className='labels'>
                    <label>color :</label>
                    <input type='color' value='#0000FF' />
                </div>
                <div className='labels'>
                    <label>like :</label>
                    <button> Like &#x2764;</button>
                </div>
                <div className='labels'>
                    <label>share :</label>
                    <button> Share  &#x1F503;</button>
                </div>
                <div className='labels'>
                    <label>follow :</label>
                    <button> Follow &#x2795;</button>
                </div>


            </div>
        </>
    )
}

export default InputTags