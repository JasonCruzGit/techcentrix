# TechCentrix

Transforming Ideas Into Reality — technology solutions, services, and support for your business (CCTV, solar, IT, software, technical support).

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/JasonCruzGit/techcentrix.git
```

2. Install dependencies:

```bash
npm i
```

3. Run the development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

## Database (MySQL)

The app uses **MySQL** with **Prisma** for the contact form and any future data.

### Setup

1. Create a MySQL database (local or hosted, e.g. [PlanetScale](https://planetscale.com), [Railway](https://railway.app), or your own server).

2. Copy env example and set your connection string:

```bash
cp .env.example .env
```

Edit `.env` and set:

```env
DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"
```

Example: `mysql://root:mypass@localhost:3306/techcentrix`

3. Create tables (first time):

```bash
npx prisma db push
```

Or use migrations:

```bash
npm run db:migrate
```

4. On **Vercel**, add `DATABASE_URL` in Project → Settings → Environment Variables, then redeploy.

### Scripts

- `npm run db:push` – sync schema to DB (no migration history)
- `npm run db:migrate` – create and run migrations

## Deploy

- **Vercel**: Connect this repo at [vercel.com](https://vercel.com) for automatic deployments.
- **GitHub Pages**: Pushes to `main` trigger the workflow in `.github/workflows/deploy.yml`.

## License

MIT
