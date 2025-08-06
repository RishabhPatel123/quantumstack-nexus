import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Contact form submission
export const submitContactForm = async (data: {
  name: string
  email: string
  message: string
}) => {
  const { data: result, error } = await supabase
    .from('contacts')
    .insert([data])
    .select()
  
  return { data: result, error }
}