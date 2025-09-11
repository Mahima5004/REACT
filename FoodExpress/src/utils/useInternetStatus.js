import { useEffect, useState } from "react";


const useInternetStatus = () => {


    const [internetStatus, setInternetStatus] = useState(true);

    useEffect(() => {
        window.addEventListener("online", () => {
            console.log("Online")
            setInternetStatus(true);
        })

        window.addEventListener("offline", () => {
            console.log("Offline")
            setInternetStatus(false);
        })
    },[])

    return internetStatus;
}

export default useInternetStatus;