import React from 'react'
import "../Stylesheets/PseudoElements.css"

const PseudoElements = () => {
    return (
        <>
            <h2>PseudoElements</h2>
            <div className='elements_container'>
                <p className='element1'>  1. <mark>::first-line</mark> You can use the ::first-line pseudo-element to add a special effect to the first line of a text. Some more text. And even more, and more, and more, and more, and more, and more, and more, and more, and more, and more, and more, and more.</p>
                <p className='element2'>  2. <mark>::first-letter</mark> You can use the ::first-line pseudo-element to add a special effect to the first line of a text. Some more text. And even more, and more, and more, and more, and more, and more, and more, and more, and more, and more, and more, and more.</p>
                <p className='element3'>  3. <mark>::before</mark> &#x1F61C; You can use the ::first-line pseudo-element to add a special effect to the first line of a text. Some more text. And even more, and more, and more, and more, and more, and more, and more, and more, and more, and more, and more, and more.</p>
                <p className='element4'>  4. <mark>::after</mark> You can use the ::first-line pseudo-element to add a special effect to the first line of a text. Some more text. And even more, and more, and more, and more, and more, and more, and more, and more, and more, and more, and more, and more. &#x1F61C;</p>
                 <p className='element5'> 
                 5. <mark>::marker</mark> 
                   

                    <ol>
                        <li>First</li>
                        <li>Second</li>
                    </ol>
                    </p>
                <p className='element6'>  6. <mark>::selection</mark> You can use the ::first-line pseudo-element to add a special effect to the first line of a text. Some more text. And even more, and more, and more, and more, and more, and more, and more, and more, and more, and more, and more, and more.</p>

            </div>
        </>
    )
}

export default PseudoElements