import styled from "styled-components";


export const Container = styled.div `
    /* display: flex;
    align-items: center;
    justify-content: center; */

    margin-top: 4rem;
    //background: var(--text-body);
    border-radius: .25rem;

    table {
        width: 100%;
        border-spacing: 0 0.5rem;

        th{
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }
        td{
            background: var(--shape);
            border: 0;
            padding: 1rem 2rem;
            border-radius: .25rem;
            font-weight: 400;
            color: var(--text-body);
            
            &:first-child{
                color: var(--text-title);
            }
            
            &.deposit{
                color: var(--green);
            }

            &.withdraw {
                color: var(--red);
            }
        }
    }
`