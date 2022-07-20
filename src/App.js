import './App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Index from "./components/index";


class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Index />} />
                    </Routes>
                </Router>
            </div>
        );
    }
}

export default App;