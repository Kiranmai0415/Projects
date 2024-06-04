import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Calculator from '../Calculator/Calculator';
import Editor from '../editor';
import JavaScriptEditor from '../Editor/JavaScript';
import InputTags from '../Components/Input_Tags';
import Semantic_Elements from '../Components/Semantic_Elements';
import Border from '../Components/Border';
import Flexbox from '../Components/Flexbox';
import PseudoElements from '../Components/PseudoElements';
import Section from '../Components/Section';
import Bulb from '../Projects/Bulb';
import ToDoApp from '../ToDoList/ToDo';
import DragAndDrop from '../Drag-n-Drop/DragDrop';
import LoginForm from '../Forms/Login';
import Game from '../Game/Game';

function Routing() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/calc' element={<Calculator />} />
                    <Route path='/editor' element={<Editor />} />
                    <Route path='/javascript' element={<JavaScriptEditor />} />
                    <Route path='/input' element={<InputTags/>}/>
                    <Route path='/semantic' element={<Semantic_Elements/>}/>
                    <Route path='/border' element={<Border/>}/>
                    <Route path='/flexbox' element={<Flexbox/>}/>
                    <Route path='/section' element={<Section/>}/>
                    <Route path='/bulb' element={<Bulb/>}/>
                    <Route path='/pseudoelements' element={<PseudoElements/>}/>
                    <Route path='/todoapp' element={<ToDoApp/>}/>
                    <Route path='/dragdrop' element={<DragAndDrop/>}/>
                    <Route path='/login' element={<LoginForm/>}/>
                    <Route path='/game' element={<Game/>}/>
                    <Route path='/game' element={<Game/>}/>
                    

                </Routes>
            </BrowserRouter>
        </>
    );
} export default Routing