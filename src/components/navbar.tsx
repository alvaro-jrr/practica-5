import { Link, NavLink } from "react-router-dom";

import { Drawer, DrawerItem } from "./drawer";
import { Button } from "./ui/button";

const routes: Array<{
  title: string;
  to: string;
}> = [
  {
    title: "Ofertas",
    to: "/offers",
  },
];

export function NavBar() {
  return (
    <nav className="w-full">
      <div
        className={
          "container flex items-center justify-between md:grid md:grid-cols-3"
        }
      >
        <Link to="/">
          <p className="font-medium">Práctica 5</p>
        </Link>

        <ul className="hidden md:flex md:justify-center md:gap-2">
          {routes.map((route) => (
            <NavLink
              key={route.to}
              to={route.to}
              className="font-medium text-muted-foreground transition-colors hover:text-primary aria-[current=page]:text-primary"
            >
              {route.title}
            </NavLink>
          ))}
        </ul>

        <div className="flex gap-4 md:justify-end">
          <div className="hidden space-x-2 md:block">
            <Button variant="ghost" asChild>
              <Link to="/login">Iniciar Sesión</Link>
            </Button>

            <Button asChild>
              <Link to="/sign-up">Registrarse</Link>
            </Button>
          </div>

          <div className="block md:hidden">
            <Drawer>
              <DrawerItem title="Iniciar Sesión" to="/login" />
              <DrawerItem title="Registro" to="/sign-up" />

              {routes.map((route) => (
                <DrawerItem key={route.to} title={route.title} to={route.to} />
              ))}
            </Drawer>
          </div>
        </div>
      </div>
    </nav>
  );
}
