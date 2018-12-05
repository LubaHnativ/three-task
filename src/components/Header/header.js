import React, {Component} from "react";
import "./header.css"

class Header extends Component{

constructor(props){
    super(props);

    this.addTask = this.props.onTaskAdd.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.textInput = React.createRef();

    this.state = {
        value: "Your task"
    }
}

addingHandler(){
if (this.state.value.trim()){
    this.addTask(this.state.value);
        this.setState({
            value: ""
        })
    }
else alert("Enter value")
}

changeHandler(e) {
    this.setState({
        value: e.target.value
    })
}

render(){
    return(
        <div className="header">
            <div className="input-container">
                <input
                type="text"
                className="add-input"
                value={this.state.value}
                onChange={ (e) => {this.changeHandler(e) }}
                ref={this.textInput}
                />

                <button
                className="add-btn"
                onClick={() => {this.addingHandler();
                                this.textInput.current.focus();}
                }>
                Add
                </button>
             </div>
         </div>
    )
}
}

export default Header;