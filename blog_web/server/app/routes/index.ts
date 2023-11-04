import V1 from "./v1";
import { Express } from "express";

export const routes = [
  {
    url: "/api/v1/users",
    route: V1.usersRoute,
  },
  {
    url: "/api/v1/auth",
    route: V1.authRoute,
  },
  {
    url: "/api/v1/entries",
    route: V1.entriesRoute,
  },
];

export const addRoutes = (app: Express) => {
  routes.forEach((route) => {
    app.use(route.url, route.route);
  });
};
