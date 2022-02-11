import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import TipsS1 from "../components/tips-s1";
import TipsS2 from "../components/tips-s2";
import TipsS3 from "../components/tips-s3";
import TipsS4 from "../components/tips-s4";

class Tips extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <TipsS1/>
                <TipsS2/>
                <TipsS3/>
                <TipsS4/>
            </Container>    
        );
    }
}

export default Tips;