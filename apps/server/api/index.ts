// import { Hono } from 'hono'
// import { handle } from 'hono/vercel'

// export const runtime = 'edge'

// const app = new Hono().basePath("/api")

// app.get('/', (c) => {
//   return c.json({
//     message: 'Hello Next.js!',
//   })
// })

// export default handle(app)

export { default } from "../public/index";