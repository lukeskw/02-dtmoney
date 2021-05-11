import styled from 'styled-components'

export const Container = styled.header `
background: var(--blue);

`

export const Wrapper = styled.div `
display: flex;
align-items: center;
justify-content: space-between;

max-width: 1100px;
margin: 0 auto;

padding: 2rem 1rem 12rem;

button{
    font-size: 1rem;
    color: var(--shape);
    background: var(--blue-light);
    border: 0;

    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    

    transition: filter 0.5s;
    &:hover {
        filter: brightness(.9);
    }
    
}
`