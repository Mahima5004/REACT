import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            // count1: 1,
            // count2: 2
            user: {
                name: "Dummy",
                location: "DummyPlace",
            }
        
        }
        console.log("Constructor called")
    }
    
   async componentDidMount() {
       console.log("Component Did Mounted")
       const userdata = await fetch("https://api.github.com/users/Mahima5004");
       const jsonUserData = await userdata.json();
       console.log(jsonUserData)

       this.setState({
           user : jsonUserData
       })
    }

    componentDidUpdate() {
        console.log("Component updated");
    }

    componentWillUnmount() {
        console.log("Component Unmounted")
    }

    render() {

        console.log("Component Rendered")

        // const {count1, count2} = this.state //destructuring the object
        const { name, location, avatar_url } = this.state.user;
       
        return (
            <div className="user-class">
                <h2>Hi there this is a Class based component</h2>
                <img src={avatar_url} alt="avatar_url" />
                <h3>{name}</h3>
                <h4>{location}</h4>
                {/* <p>Count : {count1}</p>
                <button
                    onClick={() => {
                        this.setState({
                            count1: this.state.count1 + 1,
                        })
                }}
                >Update the count</button> */}
                <div>
                    <UserContext.Consumer>
                        {
                            ({ loggedUser }) => 
                                <h2 className="font-bold">{loggedUser}</h2>
                        }
                    </UserContext.Consumer>
                </div>
                
            </div>
        )
   }
}

export default UserClass
