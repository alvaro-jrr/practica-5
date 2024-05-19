import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { OfferForm } from "../components/offer-form";
import { DataTable } from "@/components/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { OfferType } from "@/models/offer";
import { DataTableColumnHeader } from "@/components/data-column-header";
import { OfferRowActions } from "../components/offer-row-actions";

const columns: Array<ColumnDef<OfferType>> = [
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Título" />
    ),
    cell: ({ row }) => row.original.title,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "salary",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Salario (USD)" />
    ),
    cell: ({ row }) => (
      <div className="font-mono">{row.original.salary.toFixed(2)}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "actions",
    cell: (row) => <OfferRowActions {...row} />,
    enableSorting: false,
    enableHiding: false,
  },
];

export function OffersPage() {
  return (
    <Section
      headerProps={{
        title: "Ofertas",
        actions: (
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary">Crear</Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Creación de Oferta</DialogTitle>
              </DialogHeader>

              <OfferForm />
            </DialogContent>
          </Dialog>
        ),
      }}
    >
      <DataTable
        columns={columns}
        data={[{ title: "React Developer", description: "", salary: 1200.0 }]}
      />
    </Section>
  );
}
