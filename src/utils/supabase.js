import { createClient } from '@supabase/supabase-js';

const NEXT_PUBLIC_SUPABASE_URL = "https://mnzzvpcubsxuvfnxugrg.supabase.co"
const NEXT_PUBLIC_SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1uenp2cGN1YnN4dXZmbnh1Z3JnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTAxODcxODYsImV4cCI6MTk2NTc2MzE4Nn0.9h5CUTbOzw4qO7mUYJmxHT8oAGQaf-oP5n07o_PFEpY"

export default createClient(
  NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_API_KEY,
);
