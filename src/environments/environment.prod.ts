// Production environment config
// These placeholders are replaced at build time by GitHub Actions
// using repository secrets — see .github/workflows/ci.yml
export const environment = {
  production: true,
  supabaseUrl: '%%SUPABASE_URL%%',
  supabaseAnonKey: '%%SUPABASE_ANON_KEY%%'
};
