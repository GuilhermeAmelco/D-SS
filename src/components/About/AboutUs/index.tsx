import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from './aboutus.module.css';

interface Props {

    items: {
        title: string,
        description: string
    }[]
}
const AboutUs = function () {

    const [data, setData] = useState<Props>();
    const url = 'https://raw.githubusercontent.com/GuilhermeAmelco/D-SS/main/public/db.json';

    async function loadDados() {
        await axios.get(url).then(response => {
            console.log(response);
            setData(response.data)
        })
    }

    useEffect(() => {

        loadDados()
    }, [])

    useEffect(() => {

        console.log('data >> ',data);
    }, [data])
    return (
            <ul className={styles.list}>
                
                { data && data.items.map ((data, index) => {

                    return (
                            <li key={index} className={styles.item}>

                                <h1 className={styles.itemTitle}>
                                    <Image src='' alt='' height={32} width={32}/>
                                    <p>{data.title}</p>
                                </h1>
                                <p className={styles.description}>{data.description}</p>
                            </li>
                    )
                })}
            </ul>
    )
}

export default AboutUs;