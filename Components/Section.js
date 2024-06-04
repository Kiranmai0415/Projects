import React from 'react'

const Section = () => {
    return (
        <>
            <div>
                <h2> I am Section tag</h2>
                <Section className="home" id="home">
                    <div className='home_content'>
                        <h3>Hello, I am</h3>
                        <h1>UR Kiranmai</h1>
                        <h3>and I'm a<span className='text'></span></h3>
                        <p>
                            I am a React Js Developer
                            developing and designing web applications using React JS.
                            integrating REST APIs, and implementing React-Router for single-page applications.
                            oriented and passionate about writing clean and efficient code.
                        </p>

                    </div>
                </Section>
            </div>
        </>
    )
}

export default Section