import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            count1: 1,
            count2: 2
        }
     }

    render() {

        const {count1, count2} = this.state //destructuring the object
       
        return (
            <div className="user-class">
                <h2>Hi there this is a Class based component</h2>
                <h3>{this.props.name}</h3>
                <h4>{this.props.address}</h4>
                <p>Count : {count1}</p>
                <button
                    onClick={() => {
                        this.setState({
                            count1: this.state.count1 + 1,
                        })
                }}
                >Update the count</button>
            </div>
        )
   }
}

export default UserClass
