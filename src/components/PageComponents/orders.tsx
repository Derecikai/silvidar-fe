import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Source_Sans_3 } from "next/font/google";

const roboto = Source_Sans_3({
  subsets: ["latin"],
  weight: ["500"], // Add weights as needed
  style: ["normal"], // Add styles as needed
});

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "250.00 RON",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "150.00 RON",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "350.00 RON",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "450.00 RON",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "550.00 RON",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "200.00 RON",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "300.00 RON",
    paymentMethod: "Credit Card",
  },
];

export function OrdersProfile() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className={`${roboto.className}text-black w-[100px] `}>
            Id Comandă
          </TableHead>
          <TableHead className={`${roboto.className}text-black`}>
            Status
          </TableHead>
          <TableHead className={`${roboto.className}text-black`}>
            Dată
          </TableHead>
          <TableHead className={`${roboto.className}text-black text-right `}>
            Sumă
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell
              className={`${roboto.className} font-medium text-main-700/80`}
            >
              {invoice.invoice}
            </TableCell>
            <TableCell className={`${roboto.className}  text-main-700/80`}>
              {invoice.paymentStatus}
            </TableCell>
            <TableCell className={`${roboto.className}  text-main-700/80`}>
              {invoice.paymentMethod}
            </TableCell>
            <TableCell
              className={`${roboto.className} text-right  text-main-700/80`}
            >
              {invoice.totalAmount}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell className={roboto.className} colSpan={3}>
            Total
          </TableCell>
          <TableCell className="text-right">2,500.00 RON</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
