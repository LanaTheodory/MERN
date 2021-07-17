import React, { Component } from 'react';
    
    
class PersonComponent extends Component {
    constructor(props){
    super(props);
    this.state = {
        age : this.props.age
    }
    }
    render() {
        const {firstName , lastName , hairColor} = this.props;
        const {age} = this.state;
        return <div>
            <h1>{lastName} ,{firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick= { () => this.setState({ age : parseInt(age)  + 1} )} >Birthday Button for {lastName} {firstName} </button>
        </div>
    }
}
    
export default PersonComponent;


