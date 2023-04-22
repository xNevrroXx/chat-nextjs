import {TRoutes, TRoutesWithParams} from "@/models/TRoutes";

function createPath (args: TRoutes): string {
  if (!args.hasOwnProperty("params")) return args.path;

  console.log("args: ", args);
  return Object.entries((args as TRoutesWithParams).params).reduce(
    (acc: string, [param, value]) =>
      acc.replace(`:${param}`, value + ""),
    args.path);
}

export {createPath};