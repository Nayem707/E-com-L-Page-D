let invoices = [
  {
    id: 1,
    name: "Santa Monica",
    number: 1995,
    amount: "$10,800",
    due: "12/05/1995",
    image:
      "https://images.theconversation.com/files/368263/original/file-20201109-22-lqiq5c.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
  },
  {
    id: 2,
    name: "Stankonia",
    number: 2000,
    amount: "$8,000",
    due: "10/31/2000",
    image:
      "https://images.theconversation.com/files/368263/original/file-20201109-22-lqiq5c.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
  },
  {
    id: 3,
    name: "Ocean Avenue",
    number: 2003,
    amount: "$9,500",
    due: "07/22/2003",
    image:
      "https://images.theconversation.com/files/368263/original/file-20201109-22-lqiq5c.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
  },
  {
    id: 4,
    name: "Tubthumper",
    number: 1997,
    amount: "$14,000",
    due: "09/01/1997",
    image:
      "https://images.theconversation.com/files/368263/original/file-20201109-22-lqiq5c.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
  },
  {
    id: 5,
    name: "Wide Open Spaces",
    number: 1998,
    amount: "$4,600",
    due: "01/27/1998",
    image:
      "https://images.theconversation.com/files/368263/original/file-20201109-22-lqiq5c.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
  },
  {
    id: 6,
    name: "Open Spaces",
    number: 1990,
    amount: "$4,605",
    due: "01/27/1994",
    image:
      "https://images.theconversation.com/files/368263/original/file-20201109-22-lqiq5c.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
  },
  {
    id: 7,
    name: "Spaces Wide Open ",
    number: 1994,
    amount: "$4,601",
    due: "01/27/1995",
    image:
      "https://images.theconversation.com/files/368263/original/file-20201109-22-lqiq5c.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
  },
  {
    id: 9,
    name: "Wide Spaces",
    number: 1991,
    amount: "$4,6007",
    due: "01/25/1991",
    image:
      "https://images.theconversation.com/files/368263/original/file-20201109-22-lqiq5c.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
  },
];

export function getInvoices() {
  return invoices;
}

export function getInvoice(number) {
  return invoices.find((invoice) => invoice.number === number);
}
