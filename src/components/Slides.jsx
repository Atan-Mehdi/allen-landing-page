import { useEffect, useRef, useState } from "react";
import slide1 from "../../assests/slide1.webp"
import slide2 from "../../assests/slide2.webp"
import slide3 from "../../assests/slide3.webp"
import slide4 from "../../assests/slide4.webp"


const images = [slide1, slide2, slide3, slide4];
const delay = 2000;

export default function Slides() {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div>
            <img style={{
                height: "400px"
            }} src={images[index]}></img>
        </div>
    );
}