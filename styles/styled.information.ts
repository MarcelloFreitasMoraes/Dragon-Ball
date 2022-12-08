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
export const Text = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
margin-top: 20px;
`;
export const Link = styled.div`
margin-top: -10px;
margin-left: 20px;
`;
export const Voltar = styled.img`
width: 80px;
height: 80px;
cursor: pointer;
`;
export const Box = styled.img`
  display: flex;
  background:#000000;
  margin: 70px;
  height: 300px;
`;
export const Name = styled.img`
color: #fff;
  text-align: center;
  font-size: 20px;
`;
export const Img = styled.img`
 width: 300px;
  height: 300px;
`;
export const Characters = styled.div`
  padding: 5px 10px;
  width: 370px;
  margin: 5px 5px;
  background:#000000;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
`;

export const BlockApparition = styled.div`
    color: white;
    margin: 10px;
    font-size: 15px;
    background: #222; 
    border-radius: 10px;
    padding: 10px;
    width: 22%;
    @media (max-width: 600px){
        width: auto;
    }
    p {
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        margin-top: 0px;
    }
    li {
        padding-bottom: 10px;
    }
`;

export const BlockHeroInterno = styled.div`
    color: white;
    margin: 26px;
    font-size: 16px;
    background: #222; 
    border-radius: 10px;
    display: flex;
    padding: 10px;
    width: 95%;
    
    img{
        width: 280px;
        height: 280px;
        margin: 10px;
        border-radius: 10px;
        margin-right: 25px;
        @media (max-width: 600px){
            margin-right: 10px;
        }
    }
    @media (max-width: 600px){
        flex-direction: column;
        margin-top: 20px;
        align-items: center;
    }
`;

export const ContentApparition  = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
@media (max-width: 600px){
    flex-direction: column;
}
`;
export const BlockTxt = styled.div`
    h1{
        font-size: 42px;
        margin-top: 10px;
        text-align: center;
    }
    
`;