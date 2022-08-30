import { useParams } from "react-router-dom";
import { getInvoice } from "./Data/Data";

export default function Invoice() {
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));

  return (
    <main>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        Movie Name: {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
    </main>
  );
}
