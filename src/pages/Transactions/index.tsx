import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import {
  TransactionsContainer,
  TransactionsTable,
  PriceHighlight,
} from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de Site</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>19/03/2022</td>
            </tr>
            <tr>
              <td width="50%">Mc Donalds</td>
              <td>
                <PriceHighlight variant="outcome">- R$ 29,99</PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>29/03/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
