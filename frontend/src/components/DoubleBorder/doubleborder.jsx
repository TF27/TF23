const Border = ({Text, height, width}) => {

    const reactangle1 = {
        height: height,
        width: width,
        border: '1px solid #ffffff',
        position: 'absolute',
        
    }
    const reactangle2 = {
        height: height,
        width: width,
        border: '1px solid #ffffff',
        marginLeft: '10px',
        marginTop: '10px',
        position: 'absolute',
    }

    return ( 
        <div className="double_border">
            <div class="rectangle1" style={reactangle1}></div>
            <div class="rectangle2" style={reactangle2}>{Text}</div>
        </div>
     );
}
 
export default Border;