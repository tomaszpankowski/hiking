import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import CampsS1 from "../components/camps-s1";
import CampsS2 from "../components/camps-s2";
import CampsS3 from "../components/camps-s3";
import CampsS4 from "../components/camps-s4";

class Camps extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <CampsS1/>
                <CampsS2/>
                <CampsS3/>
                <CampsS4/>
            </Container>    
        );
    }
}

export default Camps;