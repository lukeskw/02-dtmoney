import logoImg from '../../assets/logo.svg';
import { Container, Wrapper } from './styles'

type HeaderProps = {
    onOpenTransactionModal: () => void;
}

export function Header ({ onOpenTransactionModal }: HeaderProps) {
    return (
        <Container>
            <Wrapper>
                <img src={logoImg} alt="logo-dtmoney"/>
                <button type="button" onClick={onOpenTransactionModal} >
                    Nova Transação
                </button>
                
            </Wrapper>
        </Container>
    )
}