const Border = ({Text, height, width, fontsize, Color, family, fontColor}) => {

    const reactangle1 = {
        height: height,
        width: width,
        border: '1px solid',
        borderColor: Color,
        position: 'absolute',
        
    }
    const reactangle2 = {
        height: height,
        width: width,
        border: '1px solid',
        borderColor: Color,
        marginLeft: '10px',
        marginTop: '10px',
        position: 'absolute',
        fontSize: fontsize,
        fontFamily: family,
        color: fontColor,
    }

    return ( 
        <div className="double_border">
            <div class="rectangle1" style={reactangle1}></div>
            <div class="rectangle2" style={reactangle2}>{Text}</div>
        </div>
     );
}
 
export default Border;