import logoImg from '../../assets/logo.svg';
import { Container, Wrapper } from './styles'

export function Header () {
    return (
        <Container>
            <Wrapper>
                <img src={logoImg} alt="logo-dtmoney"/>
                <button type="button" >
                    Nova Transação
                </button>
            </Wrapper>
        </Container>
    )
}