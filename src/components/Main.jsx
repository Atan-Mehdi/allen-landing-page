import Slides from "./Slides";




const buttons = {
    color: "#059212",
    margin: "2px",
    borderRadius: "25px",
    fontWeight: "bold",
    border: "none",
    paddingLeft: "25px",
    paddingRight: "25px",
    paddingTop: "15px",
    paddingBottom: "15px",
    cursor: "pointer"
}
export default function () {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            padding: "5%",
            gap: "70px"
        }}>
            <div>

                <div style={{
                    fontSize: "xx-large",
                    fontWeight: "bolder",
                    paddingTop: "10%"

                }}>
                    Your Dream.<br></br>
                    Our Expertise.
                </div>
                <div style={{
                    fontSize: "x-large",
                    fontWeight: "bold",
                    marginTop: "20%"
                }}>
                    What brings you to us today?
                </div>
                <div style={{
                    paddingTop: "20px",
                    display: "flex",
                    gap: "5px"
                }}>
                    <button style={buttons}>NEET</button>
                    <button style={buttons}>JEE</button>
                    <button style={buttons}>Grade 6-10</button>
                </div>

            </div>

            <div>
                <Slides />
            </div>
        </div>
    );
}