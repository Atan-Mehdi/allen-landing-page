import logo from '../../assests/allen-logo-1.svg'

const navbar = {
    // marginTop: 0,
    display: "flex",
    justifyContent: "center",
    // paddingLeft: "5%",
    // paddingRight: "5%",
    marginLeft: "8%",
    marginRight: "8%",
}
export default function Navbar() {
    return (
        <div style={navbar}>
            <div>
                <img style={{ margin: "auto" }} src={logo} />
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "25px",
                margin: "auto",
                cursor: "pointer"
            }}>
                <b>Exams</b>
                <b>Programs</b>
                <b>Scholarships</b>
                <b>Test Series</b>
                <b>Study Materials</b>
            </div>

            <div style={{
                display: "flex",
                gap: "30px",
                margin: "auto"
            }}>
                <div>
                    <button style={{
                        height: "40px",
                        width: "120px",
                        borderRadius: "40px",
                        border: "none",
                        color: "#059212",
                        cursor: "pointer"
                    }}>
                        <img style={{
                            height: "12px",
                            marginRight: "8px"
                        }} src="https://img.icons8.com/?size=100&id=30428&format=png&color=000000"></img>
                        <b>Talk to us</b>
                    </button>
                </div>
                <div>
                    <button style={{
                        height: "40px",
                        width: "80px",
                        borderRadius: "40px",
                        backgroundColor: "#9BEC00",
                        cursor: "pointer"
                    }}>Login</button>
                </div>
            </div>

        </div>
    );
}