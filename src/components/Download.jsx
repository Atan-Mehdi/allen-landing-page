import download from "../../assests/downloadApp.webp"

export default function Download() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center"
        }}>
            <img style={{
                height: "500px"
            }} src={download} />
        </div>
    );
}