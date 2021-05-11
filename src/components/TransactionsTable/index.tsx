import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable(){
  
    useEffect(()=>{
        api.get('/transactions')
        .then(response=> console.log(response.data))
    }, [])
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de Site</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>15/05/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">-R$1.100</td>
                        <td>Moradia</td>
                        <td>17/05/2021</td>
                    </tr>
                    <tr>
                        <td>Luz</td>
                        <td className="withdraw">-R$100</td>
                        <td>Despesas</td>
                        <td>12/05/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}