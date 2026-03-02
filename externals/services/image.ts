import { Media } from '@api/graphql'
import { getJsonOrEmptyObj } from '@utils/json'
import axios from 'axios'

export const uploadFile = async (
  file: Blob,
  signedConfig: Media,
  fileType: string,
) => {
  const form = new FormData()

  const { fields, url } = signedConfig.post

  Object.keys(getJsonOrEmptyObj(fields)).forEach(key =>
    form.append(key, (fields as any)[key] ?? ''),
  )

  form.append('Content-Type', fileType)
  form.append('file', file)

  const result = await axios.post(url, form, {
    withCredentials: false,
    transformRequest: [
      (data, headers) => {
        // this header must not be present in order to pass CORS
        delete headers?.common?.['Authorization']
        return data
      },
    ],
  })

  const isSuccess = result.status === 200 || result.status === 204

  if (!isSuccess) {
    throw new Error('Upload failed')
  }

  return signedConfig.url
}
