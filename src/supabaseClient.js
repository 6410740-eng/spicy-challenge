import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vzbgjvmbkpmfvvklhwti.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6Ymdqdm1ia3BtZnZ2a2xod3RpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE1Nzc5MjEsImV4cCI6MjA4NzE1MzkyMX0.LBW3UT8vpCDn7FXUzczijZ4wbNYWPFtorluEO1EUtXw'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
