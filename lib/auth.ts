import { verifyJwt } from "@/lib/jwt";

export async function getAuthUser(req: Request) {
  const authHeader = req.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) return null;

  const token = authHeader.split(" ")[1];
  const decoded = verifyJwt(token);

  return decoded;
}
