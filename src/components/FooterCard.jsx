

export default function FooterCard({ name, contents }) {
    return (
        <div>
            <div style={{
                fontSize: "medium",
                fontWeight: "bold",
                marginTop: "1%"

            }}>
                {name}
            </div>
            <div style={{
                fontSize: "small",
                marginTop: "10px"

            }}>
                {contents.map((item, index) => (
                    <div style={{
                        fontSize: "small",
                        marginTop: "15px"

                    }} key={index}>{item}</div>
                ))}
            </div>
        </div>
    );
}