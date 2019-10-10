import styled from 'styled-components'

const Container = styled.div `
    img{
        width: 100%;
        box-shadow: 5px 0px 12px grey;
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
        margin-bottom: -5px;
    }

    .info{
        padding: 40px;
        background-color: #509FE5;
        color: #fff;
        margin-bottom: 10%;
        box-shadow: 1px 5px 12px grey;
        border-bottom-left-radius: 30px;
        border-bottom-right-radius: 30px;
    }

    .info:hover{
        opacity: 0.7;
    }
`

export {Container}