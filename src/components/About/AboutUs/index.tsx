import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Description, ItemAbout, ItemAboutTitle, ListAboutUs } from "./aboutUs.s";

interface Props {
    items: {
        title: string,
        description: string,
        image: string,
    }[]
}

const AboutUs = function() {

    const images = [{

        image:'assets/svg/mission.svg'
    }, {
        
        image:'assets/svg/vision.svg'
    }, {

        image: 'assets/svg/values.svg'
    }]
    
    const [data, setData] = useState<Props>();
    const url = 'https://raw.githubusercontent.com/GuilhermeAmelco/D-SS/main/public/db.json';

    async function loadDados() {
        await axios.get(url).then(response => {
            setData(response.data)
        })
    }

    useEffect(() => {

        loadDados();
    }, [])

    useEffect(() => {

        console.log('data >> ',data);
    }, [data])
    return (
            <ListAboutUs>
                
                { data && data.items.map ((data, index) => {
                    
                    return (
                            <ItemAbout>

                                <ItemAboutTitle>
                                    <Image src={images[index].image} alt='' height={50} width={50} />
                                    <p>{data.title}</p>
                                </ItemAboutTitle>
                                <Description>{data.description}</Description>
                            </ItemAbout>
                    )
                })}
            </ListAboutUs>
    )
}

export default AboutUs;