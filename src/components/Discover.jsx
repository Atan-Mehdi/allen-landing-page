import Card from "./Card";


export default function Discover() {
    return (
        <div>

            <div style={{
                display: "flex",
                justifyContent: "left",
                gap: "50px",
                marginTop: "2%"
            }}>
                <Card course="JEE" image={"https://img.icons8.com/?size=100&id=Mx7zl9gyhcVu&format=png&color=000000"} />
                <Card course="NEET" image={"https://img.icons8.com/?size=100&id=d9dUxoiSvqBS&format=png&color=000000"} />
            </div>
            <div>
                <Card course="Grade 6-10" image={"https://img.icons8.com/?size=100&id=v0SojsFKBZQW&format=png&color=000000"} />
            </div>
        </div>
    );
}