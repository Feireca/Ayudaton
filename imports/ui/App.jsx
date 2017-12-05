import React, {Component} from "react";
import PropTypes from "prop-types";

import AccountsUIWrapper from "./AccountsUser.jsx";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <div id="imagen">

                </div>
                <AccountsUIWrapper/>
            </div>
        )
    }
}

App.propTypes = {

};

export default App;