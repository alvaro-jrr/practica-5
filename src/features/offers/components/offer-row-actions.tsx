import { Ellipsis, ExternalLink } from "lucide-react";
import { CellContext } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { OfferType } from "@/models/offer";
import { PostulationForm } from "./postulation-form";

export function OfferRowActions({ row }: CellContext<OfferType, unknown>) {
  return (
    <div className="flex justify-end">
      <Dialog>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
            >
              <Ellipsis className="h-4 w-4" />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-[160px]">
            <DialogTrigger asChild>
              <DropdownMenuItem>
                <ExternalLink className="mr-2 h-4 w-4" />

                <span>Aplicar</span>
              </DropdownMenuItem>
            </DialogTrigger>
          </DropdownMenuContent>
        </DropdownMenu>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Postulación</DialogTitle>

            <DialogDescription>
              Aplicando a "{row.original.title}"
            </DialogDescription>
          </DialogHeader>

          <PostulationForm />
        </DialogContent>
      </Dialog>
    </div>
  );
}
