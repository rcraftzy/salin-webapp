import { supabase } from "./supabase"

const prefix = import.meta.env.VITE_SUPABASE_STORAGE_URL

export const uploadVideo = async ({ videoFile }) => {
  const filename = window.crypto.randomUUID()

  const { data, error } = await supabase.storage
    .from('videos')
    .upload(`uploads/${filename}.mp4`, videoFile)

  const file = data?.Key ? `${prefix}${data.Key}` : ''
  return [error, file]
}

export const publishVideo = async ({ videoSrc, description }) => {
  const { data, error } = await supabase
    .from('videos')
    .insert([
      {
        title: 'lala',
        user_id: '1',
        description,
        src: videoSrc
      }
    ])

  return [error, data]
}
export const getVideos = async () => {
  const { data, error } = await supabase
    .from('videos')
    .select('*')
  return [error, data]
}

export const getVocabulary = async () => {
  const { data, error } = await supabase
    .from('vocabulary')
    .select('*')

  return [error, data]
}

export const getWords = async () => {
  const { data, error } = await supabase
    .from('word')
    .select(`*, vocabulary:id_vocabulary (
      id,
      title,
      icon,
      sound
    )`)
    .eq('id_vocabulary', '1')
  console.log({error, data})

  return [error, data]
}
