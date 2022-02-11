import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import HikingsS1 from "../components/hikings-s1";
import HikingsS2 from "../components/hikings-s2";
import HikingsS3 from "../components/hikings-s3";

class Hikings extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <HikingsS1/>
                <HikingsS2/>
                <HikingsS3/>
            </Container>    
        );
    }
}

export default Hikings;