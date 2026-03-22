// environment.ts  used during local development (ng serve)
// Never commit real secrets here  the anon key is safe, but service_role is not
export const environment = {
  production: false,
  supabaseUrl: 'https://uhkqghmnfejdrcomqztk.supabase.co',
  supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVoa3FnaG1uZmVqZHJjb21xenRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQxNzU5NDMsImV4cCI6MjA4OTc1MTk0M30.n1HKHj7uGoIZH6L6TPfUSO3f5y5bO5JVFizbfnUnnhk'
};
