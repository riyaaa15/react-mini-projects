export default function Price({oldPrice, newPrice}){
    let oldStyle = {
        textDecoration: "line-through"
    };

    let newStyle = {
        fontWeight: "bold"
    };

    let style = {
        background: "#e0c367",
        height: "43px",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "35px"
    };

    return(
        <div style={style}>
        <span style={oldStyle}>{oldPrice}</span>
        <span  style={newStyle}>{newPrice}</span>
        </div>
    );
};