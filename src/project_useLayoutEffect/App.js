import {useLayoutEffect, useEffect, useRef} from 'react';

export default function App() {
    const inputRef = useRef(null);

    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    }, []);

    useEffect(() => {
        inputRef.current.value = "Hello!";
    });

    return (
        <div>
            <input ref={inputRef} value="Ákos" style={{width: 400, height: 50}}/>
        </div>
    );
}
