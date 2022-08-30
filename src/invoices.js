import { NavLink, Outlet } from "react-router-dom";
import { getInvoices } from "./Data/Data";

let activCss = ({ isActive }) => {
  return {
    display: "block",
    margin: "1rem 0",
    color: isActive ? "red" : "",
  };
};

export default function Invoices() {
  let invoices = getInvoices();

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {invoices.map((invoice) => (
          <NavLink
            style={activCss}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
