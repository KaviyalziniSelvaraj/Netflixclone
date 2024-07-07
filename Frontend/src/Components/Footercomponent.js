import {Row,Col,Typography} from "antd";
function Footercomponent()
{
    const {Text}=Typography;
    return(<>
        <Row style={{display:"flex",justifyContent:"center",}}>
                <Col xs={24} md={12} xl={6} xxl={6}>
                    <Text style={{color:"grey"}}>Audio Description</Text>
                </Col>
                <Col xs={24} md={12} xl={6} xxl={6}>
                    <Text style={{color:"grey"}}>Help Center</Text>
                </Col>
                <Col xs={24} md={12} xl={6} xxl={6}>
                    <Text style={{color:"grey"}}>Gift Cards</Text>
                </Col>
                <Col xs={24} md={12} xl={6} xxl={6}>
                    <Text style={{color:"grey"}}>Media Center</Text>
                </Col>
            </Row>
    </>)
}
export default Footercomponent;