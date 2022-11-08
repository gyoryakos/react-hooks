import {useCallback, useState} from 'react';
import Child from './Child';

export default function App() {
    const [data, setData] = useState("Yo, pls sub to the channel!");
    const [toggle, setToggle] = useState(false);

    const returnComment = useCallback(
        (name) => {
            return data + name;
        },
        [data]
    );

    console.log("data: " + data);

    return (
         <div>
            <Child returnComment={returnComment} />
            <button
                onClick={() => {
                    setToggle(!toggle);
                }}
            >
                {" "}
                Toggle
            </button>
            {toggle && <h1>toggle</h1>}
        </div>
    );
}