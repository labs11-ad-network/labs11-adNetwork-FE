import styled from 'styled-components';

export const ProfileCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    width: 420px;
    min-height: 200px;
    padding: 15px;
    margin: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.35);    
`;

export const ProfileCardTop = styled.div`
    display: flex;
    width: 100%;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    img{
        background-color: #0A88DC;
        width: 120px;
        height: 120px;
        margin: 0 15px 10px 0;
        border-radius: 70px;
        border: 1px solid rgba(0, 0, 0, 0.1)
    }
    div{
        h1{
            font-size: 1rem;
            font-weight: 600;
            margin-top: 5px;
        }
        h2{
            font-size: 1rem;
            font-weight: 500;
            margin-top: 8px;
            color: #7A7A7A;
        }
        h3{
            font-size: 1.2rem;
            margin-top: 4px;
        }
    }
`;

export const ProfileCardBottom = styled.div`
    display: flex;
    justify-content: space-around;
    text-align: center;
    div{
        margin-top: 5px;
        h1{
            font-size: 1.3rem;
            margin: 8px;
        }
        h2{
            font-size: 0.8rem;
        }
    }
`;

export const MainTabContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    width: 100%;
    height: 85vh;
    margin: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.35);    
    
`;

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 35px;
    div{
        display: flex;
        flex-direction: column;
        width: 500px;
        margin: 0 auto;
        h2{
            color: #6F6F6F;
            text-align: center;
            font-size: 1.5rem;
            margin: 10px 0;
        }
        input, button, select{
            font-size: 1.3rem;
            font-weight: 100;
            padding: 15px;
            margin-top: 10px;
            border: 1px solid rgba(0, 0, 0, 0.2);
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.07);
            &::placeholder{
                color: #999999;
            }
        }
        label{
            font-size: 1.2rem;
        }
        button{
            color: #FFFFFF;
            background-color: #0A88DC;
            margin-top: 15px;
            transition: .2s;
            &:hover{
                cursor: pointer;
                background-color: #086FB3;
            }
        }
    }
`;

export const BillingCardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #FFFFFF;
    padding: 15px;
    margin: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.35); 
    div{
        h1{
            font-size: 0.9rem;
            font-weight: 100;
        }
        h2{
            color: #0A88DC;
            font-size: 2rem;
            font-weight: 100;
            margin: 5px 0; 
        }
        button{
            font-size: 0.8rem;
            width: 100%;
            padding: 5px 0;
            background-color: #0A88DC;
            color: #FFFFFF;
            border: unset;
            border-radius: 3px;
            transition: .2s;
            &:hover{
                cursor: pointer;
                background-color: #097AC6;
            }
        }
    }   
`;