import { 
    Html,
    useGLTF,
    Center,
    Float,
    PresentationControls, 
    Text
} from "@react-three/drei"

const Experience = () => {
    const computer = useGLTF('https://threejs-journey.com/resources/models/macbook_model.gltf')
    return <>
    <PresentationControls 
        global
        rotation={ [ 0.13, 0.8, 0 ] }
        polar={ [ -0.4, 0.2 ] }
        azimuth={ [ -1, 0.75 ] }
        config={ { mass: 2, tension: 400 } }
        snap={ { mass: 4, tension: 400 } }
    >
        <Float rotationIntensity={ 0.4 } >
            <rectAreaLight 
                width={ 2.5 } 
                height={ 1.65 } 
                intensity={ 100 } 
                color={"#2f4678"} 
                rotation={ [0.1, Math.PI, 0] } 
                position={ [ 0, 0.55, -1.15 ] }
            />
            <primitive object={computer.scene} position-y={ -1.2 }>
                <Html
                    transform
                    wrapperClass="htmlScreen"
                    distanceFactor={ 1.17 }
                    position={ [ 0, 1.56, -1.4 ] }
                    rotation-x={ -0.256 }
                >
                    <iframe src={"https://rafael-anguiano.vercel.app/"}/>
                </Html>
            </primitive>
            <Text
                font="./bangers-v20-latin-regular.woff"
                fontSize={ 1 }
                position={ [ 2, 0.75, 0.75 ] }
                rotation-y={ - 1.25 }
                maxWidth={ 2 }
                // textAlign="center"
            >
                RAFAEL ANGUIANO
            </Text>
        </Float>
    </PresentationControls>
    </>
}

export default Experience