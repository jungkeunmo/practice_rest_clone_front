import React from "react";
import axios from "axios";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            recieveData: null,
        };
    };

    _btnClickHandler = async() => {
        const result = await axios.get("http://localhost:4000/api/call");

        this.setState((prevState) => {
            return { recieveData: result.data};
        });
    };

    render() {
        return <div>
            {this.state.recieveData ? (this.state.recieveData) : (<button onClick={() => this._btnClickHandler()}>REST NAME</button>)}
        </div>
    };
};

export default App;
