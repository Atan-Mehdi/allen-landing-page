

export default function Card({ course, image }) {
    return (
        <div>

            <div style={{
                marginTop: "3%",
                marginBottom: "3%",
                // padding: "2%",
                backgroundColor: "#059212",
                height: "200px",
                width: "250px",
                borderRadius: "10px",
                fontSize: "x-large",
                fontWeight: "bold",
                color: "#06D001",
                padding: "20px",
                cursor: "pointer"

            }}>
                <div>{course}</div>

                <div style={{
                    display: "flex",

                }}>

                    <div style={{
                        display: "flex",
                        justifyContent: "left",
                        gap: "5px",
                        marginTop: "130px"
                    }}>
                        <div>View</div>
                        <img style={{
                            height: "30px",
                            color: "#06D001"
                        }} src="https://img.icons8.com/?size=100&id=99266&format=png&color=06d001" />
                    </div>
                    <div style={{
                        marginLeft: "20%",
                        marginTop: "60px",

                        // height: "500px"
                    }}>
                        <img src={image} />
                    </div>
                </div>
            </div>
        </div>
    );
}