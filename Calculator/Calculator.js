import React, { useState } from 'react'
import "./Calculator.css"

const Calculator = () => {
    const [inputValue, setInputValue] = useState('');

    const handleNumber = (number) => {
        setInputValue(prevValue => prevValue + number);

    }
    const handleOperator = (operator) => {
        if(inputValue !== '' && !isNaN(inputValue[inputValue.length -1])) {
            setInputValue(prevValue => prevValue + operator);

        }
    }
    const handleEquals = () => {
        try {
            const result = eval(inputValue);
            setInputValue(result.toString());
        } catch (error) {
            setInputValue('Error');
        }
    };
    const handleClear =() => {
        setInputValue('');
    }
    return (
        <>
            <div className='calculator-main'>
                <div className='heading'>
                    <span>Calculator</span>
                    <span>
                        <label><input type='checkbox' name='theme' />
                            <span className='btn'></span></label>
                    </span>
                </div>
                <div id='result'>
                    <div className='history'>
                        <p id='history-value'></p>
                    </div>
                    <div className='output'>
                        <input id='output-value' value={inputValue} readOnly />
                    </div>
                </div>
                <div id='keyboard'>
                    <div className='group'>
                        <div className='top-section'>
                            <button className='operator' id='clear' onClick={()=>handleClear()}>C</button>
                            <button className='operator' id='backspace'>back</button>
                            <button className='operator' id='%'  onClick={()=>handleOperator('%')} >%</button>
                            <button className='operator' id='/'  onClick={()=>handleOperator('/')} >/</button>
                        </div>
                        <div className='sections'>
                            <div className='middle-section'>
                                <div>
                                    <button className='number' id='7' onClick={() => handleNumber('7')}>7</button>
                                    <button className='number' id='8' onClick={() => handleNumber('8')}>8</button>
                                    <button className='number' id='9' onClick={() => handleNumber('9')}>9</button>
                                    <button className='operator' id='*'  onClick={()=>handleOperator('*')} >*</button>
                                </div>
                                <div>
                                    <button className='number' id='4' onClick={() => handleNumber('4')}>4</button>
                                    <button className='number' id='5' onClick={() => handleNumber('5')}>5</button>
                                    <button className='number' id='6' onClick={() => handleNumber('6')}>6</button>
                                    <button className='operator' id='-'  onClick={()=>handleOperator('-')} >-</button>
                                </div>
                                <div>
                                    <button className='number' id='1' onClick={() => handleNumber('1')}>1</button>
                                    <button className='number' id='2' onClick={() => handleNumber('2')}>2</button>
                                    <button className='number' id='3' onClick={() => handleNumber('3')}>3</button>
                                    <button className='operator' id='+' onClick={()=>handleOperator('+')} >+</button>
                                </div>
                                <div>
                                    <button className='number' id='0' onClick={() => handleNumber('0')}>0</button>
                                    <button className='number' id='00' onClick={() => handleNumber('00')}>00</button>
                                    <button className='number' id='.' onClick={() => handleNumber('.')}>.</button>
                                    <button className='operator' id='=' onClick={() => handleEquals()}>=</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Calculator