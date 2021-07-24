import styled from 'styled-components'


export const Container = styled.main`  
    background-color: #9b4dee;
    height: 100vh;
    position:relative;
`
export const SubContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 40px;
    margin: 40px;
    border-radius: 20px;
    background-color:#ffff;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

`

export const Form = styled.form`
    width: 100%;
    max-width: 991px;
    margin:  0 auto;
    
`
export const InputWrapper = styled.div` 
    margin-bottom: 10px;    
`

export const ErrorMessage = styled.span`
    display:block; 
    color: red;
    font-size:0.725rem;
    margin-top: 2.5px;
    margin-bottom: 5px;
`
export const Button = styled.button`
    margin-top: 10px;
    background-color: #9b4dee;
    color: #fff;
    padding: 10px 15px;
    border: none;
    border-radius: 12px;
    transition: .2s;
    &:hover{
        color: #9b4dee;
    background-color: #fff;
    }
`
export const Label = styled.label`
    color: #293e52;
    margin-right:5px;
    display:block;
    margin-bottom: 3px;
`

export const Input = styled.input`
    border-color: #293e52;
border-width: 1px;
padding: 5px 10px;

`