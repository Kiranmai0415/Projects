import React from 'react';
import "./Editors.css"

function JavaScriptEditor() {

    return (
        <>
            <div>
                <h2>JAVASCRIPT EDITOR</h2>
                <div className='container'>
                    <div className='practice'>
                        <div className='questions'>
                            <h4>JavaScript Questions </h4>
                        </div>
                        <div className='codingarea'>
                            <h4>Coding Practice</h4>
                            <textarea
                            className='textarea'
                                placeholder='Enter your javascript code here'
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default JavaScriptEditor;
