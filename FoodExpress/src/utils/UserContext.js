import { createContext } from "react";

const UserContext = createContext({
    loggedUser: "UserName",
})

export default UserContext