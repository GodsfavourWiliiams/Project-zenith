import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://jgxlmjwbasjwumhvhgsu.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpneGxtandiYXNqd3VtaHZoZ3N1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU5NTY2MjEsImV4cCI6MjAwMTUzMjYyMX0.K9-bOR1QH03KopxdwO8d74d9Q6jIJxO4ZTNub1L8XNw'
);
