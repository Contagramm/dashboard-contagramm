import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dzmxcjabgrfuqezaswrg.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6bXhjamFiZ3JmdXFlemFzd3JnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc3NDEzNTEsImV4cCI6MjA4MzMxNzM1MX0.Uy46QcIaULUJTsLbhQhw9N66ITMgN32shad4BS81I9I'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function test() {
  const { error } = await supabase.from('weekly_rows').insert({ row: "this is a test string to check type", id: "test-id-123" })
  console.log(JSON.stringify(error, null, 2))
}
test()
