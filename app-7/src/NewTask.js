import React, {Component} from 'react'


class NewTask extends Component {
    constructor() {
        super();
        this.state = {
            input: ''
        }
        this.handleAdd = this.handleAdd.bind(this)
    }
    inputChange(val) {
        this.setState({input: val})
    }
    handleAdd() {
        this.props.add(this.state.input)
        this.setState({input: ''})
    }
    
    
    
    
    render() {
        return (
        <div>
            <input placeholder='Enter new task' value={this.state.input} onChange={(e) => this.inputChange(e.target.value)} />
            <button onClick={this.handleAdd}>Add</button>
        </div>
        )
    }
}


export default NewTask;