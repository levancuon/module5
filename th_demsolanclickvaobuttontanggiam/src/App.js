import {Component} from "react";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
        }
    }

    increase = () => {
    this.setState({number: this.state.number + 1})
  }
  decrease = () => {
    this.setState({number: this.state.number - 1})
  }

  render() {
      return(
          <div>
            <button onClick={this.decrease}>Decrease</button>
            <p>{this.state.number}</p>
            <button onClick={this.increase}>Increase</button>
          </div>
      )
  }

}

export default App;
