import styled from "styled-components"


export const Container = styled.div`
    background-color: ${props => props.active ? '#0077B5' :  '#0f0'};
    height: 570px;
    padding: 45px; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`