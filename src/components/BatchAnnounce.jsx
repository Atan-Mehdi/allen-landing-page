import { useEffect, useRef, useState } from "react";
import batch1 from "../../assests/batch1.webp"
import batch2 from "../../assests/batch2.webp"
import batch3 from "../../assests/batch3.webp"
import batch4 from "../../assests/batch4.webp"
import batch5 from "../../assests/batch5.webp"


const images = [batch1, batch2, batch3, batch4, batch5];
const delay = 2000;

export default function BatchAnnounce() {
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
        <div style={{
            display: "flex",
            justifyContent: "center",
            padding: "5%"
        }}>
            <img style={{
                height: "200px",

            }} src={images[index]}></img>
        </div>
    );
}