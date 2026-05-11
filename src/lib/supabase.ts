import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uttfiktdqwnqswsmcbjn.supabase.co'
const supabaseAnonKey = 'sb_publishable_BYzuJPFNSbmoq-azC0zE6Q_-1xgnGPs'

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
)