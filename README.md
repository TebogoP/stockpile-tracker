# Stockpile Tracker

A personal stockpile management app — track quantities of toiletries, household items, and more.
Each user has their own private stockpile. Every add/reduce action is logged as a transaction.

**Live app:** *(coming in v0.4)*

---

## Tech stack

| Layer     | Technology                          |
|-----------|-------------------------------------|
| Frontend  | Angular 17+ (TypeScript, SCSS)      |
| Auth + DB | Supabase (PostgreSQL + RLS)         |
| Hosting   | GitHub Pages                        |
| CI/CD     | GitHub Actions                      |
| Testing   | Jasmine + Karma (unit), TDD         |

---

## Version history

### v0.1 — Project scaffold ✅
- Angular 19 app created inside GitHub repo root
- Node `.gitignore` in place
- GitHub Actions CI pipeline (build + test on every push)
- Supabase SDK installed
- Angular environment files configured
- GitHub Secrets injected at build time
- README established

### v0.2 — Auth *(planned)*
- Supabase project connected
- Email/password login and registration
- Angular route guards protecting the dashboard

### v0.3 — Core CRUD *(planned)*
- Add items to your stockpile
- Adjust quantities (add stock / reduce stock)
- Delete items
- Per-user data enforced by Supabase Row Level Security

### v0.4 — Transaction log + JSON export *(planned)*
- Every quantity change is recorded in a transactions table
- Export your stockpile as a JSON file at any time

### v1.0 — Polish + live deploy *(planned)*
- Full CI/CD pipeline deploying to GitHub Pages
- Production environment configuration

---

## Local development

### Prerequisites
- Node.js v18+
- Angular CLI: `npm install -g @angular/cli`

### Run locally
```bash
git clone https://github.com/TebogoP/stockpile-tracker.git
cd stockpile-tracker
npm install
ng serve
```
Open http://localhost:4200

### Run tests
```bash
ng test
```

---

## Project structure *(grows with each version)*
```
src/
  app/
    core/          # services, guards, interceptors
    features/      # stockpile, auth — one folder per feature
    shared/        # reusable components
  environments/    # environment config (local vs production)
```

---

## Contributing
This is a personal learning project. See commit history for step-by-step progress.