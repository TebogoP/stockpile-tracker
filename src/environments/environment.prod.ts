// environment.prod.ts  used during production build (ng build)
// Values here are injected at build time by GitHub Actions via secrets
export const environment = {
  production: true,
  supabaseUrl: 'https://uhkqghmnfejdrcomqztk.supabase.co',
  supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVoa3FnaG1uZmVqZHJjb21xenRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQxNzU5NDMsImV4cCI6MjA4OTc1MTk0M30.n1HKHj7uGoIZH6L6TPfUSO3f5y5bO5JVFizbfnUnnhk'
};
