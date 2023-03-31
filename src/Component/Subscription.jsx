import { useState } from "react";

function Subscription(){
    const [name, setName] = useState('Jegathish');

    const Subscribe = () => {
        setName('Thanks for subscribing!');
    };

    return(
        <div>
            <h2>{name}</h2>
            <button onClick={Subscribe}>Subscribe</button>
        </div>
    );
}

export default Subscription;