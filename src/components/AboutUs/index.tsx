import axios from "axios";
import { useEffect, useState } from "react";

interface Props {

    title: string,
    description: string
}
const AboutUs = function () {

    const [data, setData] = useState<Props[]>([]);
    const url = 'http://localhot:3000/';

    async function loadDados() {
        await axios.get(url + 'db.json').then(response => {
            console.log(response);
            setData(response.data)
        })
    }

    useEffect(() => {

        loadDados()
    }, [])
    return (
            <ul>
                {data.map((data, index) => {

                    return (
                            <li key={index}>

                                <h1>{data.title}</h1>
                                <p>{data.description}</p>
                            </li>
                    )
                })}
            </ul>
    )
}

export default AboutUs;