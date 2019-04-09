import styled from "styled-components";

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  width: 400px;
  height: auto;
  padding: 25px;
  margin: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.35);
  table{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    max-height: 530px;
    overflow-y: hidden;
    h1{
      margin: 15px;
      font-size: 1rem;
      text-align: center;
    }
  }
  @media(max-width: 1745px){
    box-sizing: border-box;
    width: 100%;
  }
`;

export const TableHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 10px 10px 10px;
    margin: 0 10px 5px 10px;
    border-bottom: ${props => props.bottomBorder && `1px solid rgba(0, 0, 0, 0.15)`};
    h2{
        font-size: 1.2rem;
        margin-bottom: 5px;
        font-weight: 100;
        i{
            font-size: 1rem;
            margin-left: 5px;
        }
    }
    h3{
        font-size: 0.85rem;
        color: #7F8081;
    }
    .percentage{
        color: #0CB200;
    }
`;

export const TableRow = styled.tr`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  td{
    padding: 0 10px;
    font-weight: 100;
    font-size: 1rem;
    h4{
      font-weight: 100;
      font-size: 1rem;
    }
    p{
      margin-top: 3px;
      font-size: 0.85rem;
      color: #7F8081;
    }
  }
`;