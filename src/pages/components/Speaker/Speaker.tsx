import Artyom from "artyom.js/source/artyom";
import Image from "next/image";
import SoundSpeak from "./speaker.png";

interface Speaker{
    children: JSX.Element
    value: string;
}

export function Speaker({children, value}: Speaker) {
    
    function initializerSpeaker(){
        const artyom = new Artyom();
        console.log(value);
        setTimeout(()=>{
            var config: ArtyomProperties;
            config = {
                lang:value,
                listen:false,
                continuous: false,
                soundex: true,
                debug: true,
            }
            artyom.initialize(config).then((result) => {
                console.log("Artyom has been succesfully initialized");
            }).catch((err) => {
                console.error("Artyom couldn't be initialized: ", err);
            });
            setTimeout(()=>{
                const selection = window.getSelection()!.toString().trim();
                speak(artyom, selection);
            }, 250);
        }, 250);
    }
    
    function speak(speaker: Artyom, value: string){
        console.log(speaker);
        console.log(value);
        speaker.say(value);
    }
    return(
        <>
            <div id="text">
                {children}
            </div>
            <div>
                <Image src={SoundSpeak} alt="Clique para escutar" width={100} height={100}
                onClick={initializerSpeaker}></Image>
            </div>
        </>
    );
}


