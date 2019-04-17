import styled from "styled-components";

export const AdContainer = styled.div`
    width: ${props => 
        props.size.includes("horizontal") ? "670px" : 
        props.size.includes("vertical") ? "120px" : 
        props.size.includes("square") && "250px"
    };
    height: ${props => 
        props.size.includes("horizontal") ? "100px" : 
        props.size.includes("vertical") ? "600px" : 
        props.size.includes("square") && "250px"
    };
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
`;