// import { useState } from 'react'
import {navigateToUrl} from "single-spa"
import './App.css'

function App() {

    return (
        <>
            <div className="header">
                <li><a href="/service/" onClick={navigateToUrl}>Service</a></li>
                <li><a href="/engage/" onClick={navigateToUrl}>Engage</a></li>
                <div style={{marginLeft: 'auto'}}>Plivo CX</div>
            </div>
            <div className="container">
                <div className="content">
                    <div id="service"></div>
                    <div id="engage"></div>
                </div>
            </div>
        </>
    )
}

export default App
