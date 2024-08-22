import logo from './logo.svg';
import './App.css';
import React,{Component} from "react";

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      color:"black"
    }
  }
  componentDidMount() {
    setTimeout(()=>{
      this.setState({color:"pink"})
    },2000);
  }
  render() {
    return(
        <div
            style={{
              backgroundColor: this.state.color,
              paddingTop: 100,
              width: 400,
              height: 80,
              margin: 'auto'
            }}
        >
        </div>
    )
  }

}

export default App;
