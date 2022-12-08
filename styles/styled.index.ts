import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  margin: 0 auto;
`;
export const Back = styled.section`
  background-image: url("/back2.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  height: 100vh;
`;
export const Contant = styled.div`
//width: 236px;
 /* display: flex;
 justify-content: space-around; */
`;
export const Box = styled.div`
display: flex;
justify-content: space-around;
margin-top: 20px;
`;
export const Input = styled.input`
width: 250px;
height: 40px;
border: 2px solid #ec3237;
border-radius: 20px;
padding-left: 20px;

&:focus-visible {
       outline: 2px solid #FFCA40;
    }
`;
export const Button = styled.button`
padding: 10px 10px 10px 15px;
border-radius: 20px;
border: 2px solid #ec3237;
background-color: #FFCA40 ;
margin-left: 5px;

:disabled {
    background: #FFFFFF;
    color: #CCCCCC;
    border: 2px solid #CCCCCC;
    cursor: auto;
  }
`;
