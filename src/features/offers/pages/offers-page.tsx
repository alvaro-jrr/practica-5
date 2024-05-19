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
    ></Section>
  );
}
