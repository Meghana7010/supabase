import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://knaetxqkxfzehepqqhgf.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtuYWV0eHFreGZ6ZWhlcHFxaGdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY2MDMzNjQsImV4cCI6MjA0MjE3OTM2NH0.v9bD2eOYEYcKZP2nLVt61n4-v6NDWXlH4XC4MQW5xUA'
export const supabase = createClient(supabaseUrl, supabaseKey)

