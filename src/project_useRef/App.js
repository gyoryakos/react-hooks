import React, {useRef} from 'react';

export default function App() {
    const inputRef = useRef(null);

    const addRef = () => {
        inputRef.current.value = "";            
     };

     
    return (
        <div>
            <h1>Change Name</h1>
            <input type="text" placeholder='Ex...' ref={inputRef}/>
            <button onClick={addRef}>Change Name</button>
        </div>
    );
}
