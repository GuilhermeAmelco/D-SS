import Image from "next/image";
import styles from "./build.module.css";

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

const Buldings = function({buldings}: Props){

    return (
        <>
            {buldings.map((build, index) => 
                <div key={index} className={styles.boxBuild}>
                    <Image className={styles.imageLogo} src={build.imageLogo} alt="imagem Logo da D&SS" width={build.length} height={build.height}/>
                    <Image className={styles.image} src={build.image} alt="imagem de um prediozão daora" width={390} height={512} />
                    <h3 className={styles.buildText}>{build.text}</h3>
                    <p className={styles.subtitle}>{build.subtitle}</p>
                    <a className={styles.link} href="/">
                        <p>{build.link}</p>
                        <i className="arrow"><Image src="/assets/image/arrow.png" alt="arrow" width={18.38} height={11.81}/></i>
                    </a>
                </div>
            )}
        </>
    )   
}

export default Buldings;