import React, {useEffect, useState} from 'react';
import axios from "axios";

export default function App() {
    const [data, setData] = useState("");

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then(resonse => setData(resonse.data[0].email));
            console.log("API WAS CALLED");
    }, []);

    return (
        <div>{data}</div>
    );
}
