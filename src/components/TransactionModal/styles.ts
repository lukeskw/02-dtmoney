import styled from "styled-components";
import {darken, transparentize} from 'polished';
export const Container = styled.form `
    h2{
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input{
        width: 100%;
        height: 4rem;

        padding: 0 1.5rem;
        margin-bottom: 1rem;

        border-radius: .25rem;
        border: 1px solid #d7d7d7;
        
        background: #e7e9ee;
        
        font-weight:400;
        font-size: 1rem;


        &::placeholder{
            color: var(--text-body);
        }

        &:focus {
            /* outline: 1px solid #a0a0a0;
            -moz-outline-radius: .25rem;
            border-radius: .25rem; */
            outline:0;
            box-shadow: 0 0 3px 2px #a0a0a0;
        }
    }

    button[type='submit']{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        color: #fff;

        border-radius: .25rem;
        border: 0;

        font-size: 1rem;
        font-weight: 600;
        margin-top: .5rem;
        
        transition: all .5s;
        &:hover {
            filter: brightness(.9);
        }
    }
`;

export const TransactionButtonsContainer = styled.div `

    margin: 0 0 1rem 0;
    display:grid;
    grid-template-columns: repeat(2,1fr);
    gap: .5rem;
`

type RadioButtonProps = {
    isActive: boolean;
    //activeColor: string;
    activeColor: 'green' | 'red';
}

const colors = {
    green: '#12A454',
    red: '#E52E4D'
}

export const RadioButton = styled.button<RadioButtonProps> `
        width: 100%;
        height: 4rem;
        padding: 0 1.5rem;

        border: 1px solid #d7d7d7;
        border-radius: .25rem;
        background: ${(props)=> props.isActive 
            ? transparentize(0.8, colors[props.activeColor])
            : 'transparent'};

        display: flex;
        align-items: center;
        justify-content: center;

        transition: all .5s;

        &:hover {
            filter: brightness(.8);
            //border-color: #aaa;
            border-color: ${darken( .1 , '#d7d7d7')};
        }

        img{
            width: 20px;
            height: 20px;
        }

        span {
            display: inline-block;
            margin: .5rem;

            font-size: 1rem;
            color: var(--text-title);
        }
`