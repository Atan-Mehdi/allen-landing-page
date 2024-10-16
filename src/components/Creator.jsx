

const icons = {
    padding: "10px",
    fontSize: "20px",
    color: "black"

}
export default function CreatorFooter() {
    return (
        <div>
            <div style={{
                margin: "auto",
                width: "75%",
                height: "1px",
                backgroundColor: "black"

            }}>

            </div>
            <div style={{
                marginLeft: "15%",
                marginRight: "15%",
                marginTop: "2%",
                marginBottom: "2%",
                display: "flex",
                justifyContent: "space-between",
                padding: "1%",
                letterSpacing: "1px",
                fontSize: "medium",
                fontWeight: "bold",

            }} >

                <div >Made with Love by Atan.</div>
                <div style={{
                    // padding: "100px"
                }}>
                    <a style={icons} href="https://www.instagram.com/username_atan" target="_blank"><i class="fab fa-instagram"></i></a>
                    <a style={icons} href="https://www.twitter.com/atan_mehdi" target="_blank"><i class="fab fa-twitter"></i></a>
                    <a style={icons} href="https://www.linkedin.com/in/atan-mehdi-7261071bb" target="_blank"><i
                        class="fab fa-linkedin"></i></a>
                    <a style={icons} href="https://github.com/Atan-Mehdi" target="_blank"><i class="fab fa-github"></i></a>

                </div>
            </div>
        </div>
    );
}