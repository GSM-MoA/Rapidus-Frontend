
import { ImageUploadResType } from '@/types/hooks/ImgUploadResType'
import axios from 'axios'
import { useCallback, useState } from 'react'

const useUpload = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const upload = useCallback(async (file: File[]) => {
    setIsLoading(true)

    const formData = new FormData()
    file.forEach((f) => {
      formData.append('file', f)
    })

    try {
      const { data } = await axios.post<ImageUploadResType>('/image', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      setIsLoading(false)

      return data.images
    } catch (e) {
      setIsLoading(false)
    }
  }, [])

  return { upload, isLoading }
}

export default useUpload