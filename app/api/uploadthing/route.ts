import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "./core";

const routeHandler = createRouteHandler({ router: ourFileRouter });

export const GET = routeHandler.GET;
export const POST = routeHandler.POST;
