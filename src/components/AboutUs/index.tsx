import axios from "axios";
import { useEffect, useState } from "react";

const AboutUs = function() {

    const [data, setData] = useState([]);
    const url = 'http://localhot:3000/';

    async function loadDados {
        await axios.get(url+'items').then(response => setData(response.data))
    }

    useEffect(() => {

        loadDados()
    }, [])
    return (
        <>
            <ul>
                {data.map((data) => {

                    return (
                        <>
                            <li>
                                <h1>{data.title}</h1>
                                <p>{data.description}</p>
                            </li>
                        </>
                    )
                })}
            </ul>
        </>
    )
}

export default AboutUs;