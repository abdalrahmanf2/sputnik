# sputnik

To run the client app

```bash
cd apps/client
bun run dev
```

To run the server

```bash
cd apps/server
bun run dev
```

# TODO

- [ ] Setup a proxy to serve vite dist from the server.
- [ ] Setup Drizzle and Neon.
- [ ] Setup Kinde.

# Timeline

## Weeek 1-2

- Set up Hono + PosgresSQL + Drizzle & Kinde Auth (Loging, Logout, Role-Based Access)
- Define DB SChema for Courses.
- Create CRUD API for Courses & Reflect Courses in UI (List Courses, Dedicated Page)

### Delevirables

Authenication is working.
Courses can be created, listed & viewed.
