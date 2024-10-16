import banner1 from "../../assests/banner1.webp"

export default function Banner() {
    return (
        <div>
            <img style={{
                width: "70%",
                margin: "auto",
                display: "flex",
                justifyContent: "center",
                marginTop: "2%"

            }}
                src={banner1}></img>
        </div>
    );
}