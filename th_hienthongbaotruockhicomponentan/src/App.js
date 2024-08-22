import React, {Component} from "react";
import Hello from "./Hello";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true,
        }
    }

    delete = () => {
        this.setState({display: false})
    }

    render() {
        let comp;
        if (this.state.display) {
            comp = <Hello/>
        }
        return (
            <div>
                {comp}
                <button onClick={this.delete}>
                    Xóa component này
                </button>
            </div>
        )
    }
}

export default App;