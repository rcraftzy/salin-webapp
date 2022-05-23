import { supabase } from "./supabase"

export const getVocabulary = async () => {
  const { data, error } = await supabase
    .from('vocabulary')
    .select('*')

  return [error, data]
}
