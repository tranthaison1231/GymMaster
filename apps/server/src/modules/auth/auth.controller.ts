import { Hono } from "hono";

export const router = new Hono();

router
  .post("/sign-up", async (c) => {
    const { email, password } = await c.req.json();
    return c.json({ message: "Sign up successfully!" });
  })
  .get("/sign-in", async (c) => {
    return c.json({ message: "SUCCESS" });
  });
