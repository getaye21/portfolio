// supabase-config.js
const SUPABASE_URL = 'https://vedehlwosfutknqhguiv.supabase.co'; // Get from Supabase dashboard
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVydnZia3B3Y29vb3pveWt5cHVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYzOTM2MDYsImV4cCI6MjA4MTk2OTYwNn0.zINGtyLi6zV-lf33QVwhhNJahnA0_nwLWkw7_d7Y8fE';

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
