import styled from 'styled-components';

export const GraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  width: 100%;
  height: auto;
  padding: 25px;
  margin: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.35);
  @media(max-width: 1200px){
    box-sizing: border-box;
    padding: 15px;
    margin: 15px 0;
  }   
`;

export const GraphHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 10px 10px 10px;
    margin: 0 10px 10px 10px;
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

export const PieLabels = styled.div`
    display: flex;
    margin: 10px;
    .label {
      display: flex;
      align-items: center;
      margin-right: 10px;
      .circle {
        width: 10px;
        height: 10px;
        border-radius: 5px;
      }
      .chrome {
        background-color: #0088fe;
      }
      .firefox {
        background-color: #ffbb28;
      }
      .safari {
        background-color: #00c49f;
      }
      .edge {
        background-color: #ff8042;
      }
      .other {
        background-color: gray;
      }
      .no-data{
        background-color: #ECEFF1;
      }
      p {
        margin-left: 5px;
        font-size: 0.7rem;
      }
    }
`;