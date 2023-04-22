import {ROUTE} from "../router/routes";

export type TRoutes =
  | { path: ROUTE.AUTHORIZATION }
  | { path: ROUTE.REGISTRATION }
  | { path: ROUTE.CHAT, params: { interlocutorId: string } }

export type TRoutesWithParams = { path: string, params: any };