import Image from "next/image";
import { BoxBuild, ImageBuild, ImageLogo, LinkBuild, LinkBuildText, SubtitleBuild, TextBuild } from "./build.s";

interface Props {

     buldings: { 
        imageLogo: string, 
        image: string, 
        text: string, 
        subtitle: string,
        link: string,
        length: number,
        height: number
    }[]; 
}

const Buldings = ({buldings}: Props) => {

    return (
        <>
            {buldings.map((build, index) => 
                <BoxBuild key={index}>
                    <ImageLogo src={build.imageLogo} alt="imagem Logo da D&SS" width={build.length} height={build.height}/>
                    <ImageBuild src={build.image} alt="imagem de um prediozão daora" width={390} height={512} />
                    <TextBuild >{build.text}</TextBuild>
                    <SubtitleBuild>{build.subtitle}</SubtitleBuild>
                    <LinkBuild href="/">
                        <LinkBuildText>{build.link}</LinkBuildText>
                        <i><Image src="/assets/image/arrow.png" alt="arrow" width={18.38} height={11.81}/></i>
                    </LinkBuild>
                </BoxBuild>
            )}
        </>
    )   
}

export default Buldings;