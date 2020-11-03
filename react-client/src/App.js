import React, { Component } from "react";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App" id="page">
                <div id="sidebar">
                    <div id="logoSection">
                        <img
                            id="logo"
                            src="https://groceries-tpab.s3-us-west-1.amazonaws.com/kcLogo.png"
                        ></img>
                        <div id="sublogo">Groceries</div>
                    </div>
                    <div id="divider"></div>
                    <div id="navButtons">
                        <div className="navButton">Nav Button 1</div>
                        <div className="navButton">Nav Button 2</div>
                        <div className="navButton">Nav Button 3</div>
                    </div>
                </div>

                <div id="content">
                    <div id="contentHeader">
                        <div id="contentTitle">Groceries</div>
                        <div id="searchBar">
                            <input
                                type="text"
                                id="searchInput"
                                placeholder="Search"
                            />
                        </div>
                    </div>

                    <div id="contentBody"></div>
                </div>
            </div>
        );
    }
}

export default App;
