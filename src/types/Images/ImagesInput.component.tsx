import { Close as CloseIcon } from '@mui/icons-material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { uploadFile } from '@services/image'
import { GraphqlSdk } from '@services/sdk'
import NextImage from 'next/image'
import React, { useRef, useState } from 'react'

import { BaseResponseAreaProps } from '../base-props.type'

import { CONSTRAINTS, ImagesConfig, ImagesAnswer } from './Images.schema'

type ImagesInputProps = Omit<
  BaseResponseAreaProps,
  'config' | 'handleChange'
> & {
  config?: ImagesConfig
  handleChange: (answer: ImagesAnswer) => void
}

export const ImagesInputComponent: React.FC<ImagesInputProps> = ({
  config,
  answer,
  handleChange,
  typesafeErrorMessage,
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [uploading, setUploading] = useState(false)
  const typedAnswer = (Array.isArray(answer) ? answer : []) as ImagesAnswer
  const cfg = config || {
    maxImages: CONSTRAINTS.maxImages.default,
    allowedTypes: CONSTRAINTS.allowedTypes.default,
    maxSizeMb: CONSTRAINTS.maxSizeMb.default,
    resizeMaxSide: CONSTRAINTS.resizeMaxSide.default,
  }
  const { maxImages, allowedTypes, maxSizeMb } = cfg

  const resizeImage = (file: File, maxSide: number): Promise<Blob> => {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.onload = () => {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        if (!ctx) {
          reject(new Error('Canvas context not available'))
          return
        }

        let { width, height } = img
        if (maxSide > 0 && Math.max(width, height) > maxSide) {
          const ratio = maxSide / Math.max(width, height)
          width = Math.round(width * ratio)
          height = Math.round(height * ratio)
        }

        canvas.width = width
        canvas.height = height
        ctx.drawImage(img, 0, 0, width, height)
        canvas.toBlob(blob => {
          if (blob) {
            resolve(blob)
          } else {
            reject(new Error('Failed to create blob'))
          }
        }, file.type)
      }
      img.onerror = reject
      img.src = URL.createObjectURL(file)
    })
  }

  const handleFiles = async (files: FileList | null) => {
    if (!files) return
    const arr: ImagesAnswer = []
    const resizeMaxSide = cfg.resizeMaxSide || 0

    setUploading(true)
    try {
      const sdk = await GraphqlSdk()

      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        if (!file) continue
        if (allowedTypes && !allowedTypes.includes(file.type)) {
          alert(`Unsupported file type: ${file.type}`)
          continue
        }

        let blob: Blob
        if (resizeMaxSide > 0) {
          blob = await resizeImage(file, resizeMaxSide)
        } else {
          blob = file
        }

        if (
          blob.size >
          (maxSizeMb || CONSTRAINTS.maxSizeMb.default) * 1024 * 1024
        ) {
          alert(`File ${file.name} exceeds the limit ${maxSizeMb} MB`)
          continue
        }

        try {
          const res = await sdk.CreateSignedMedia({
            input: { contentType: file.type },
          })
          const url = await uploadFile(
            blob,
            res.student_createSignedImage,
            file.type,
          )

          arr.push({
            url,
            name: file.name,
            type: file.type,
            size: blob.size,
            comment: '',
          })
        } catch (err) {
          console.error(`Failed to upload ${file.name}:`, err)
          alert(`Failed to upload ${file.name}`)
        }
      }
    } finally {
      setUploading(false)
    }

    if (arr.length > 0) {
      const newAnswer = [...typedAnswer, ...arr].slice(
        0,
        maxImages || CONSTRAINTS.maxImages.default,
      )
      handleChange(newAnswer)
    }
  }

  const handleRemove = (idx: number) => {
    const newAnswer = [...typedAnswer]
    newAnswer.splice(idx, 1)
    handleChange(newAnswer)
  }

  const handleCommentChange = (comment: string, idx: number) => {
    const newAnswer = [...typedAnswer]
    const item = newAnswer[idx]
    if (item) {
      newAnswer[idx] = { ...item, comment } as ImagesAnswer[number]
    }
    handleChange(newAnswer)
  }

  return (
    <Box>
      <input
        ref={inputRef}
        type="file"
        accept={allowedTypes?.join(',') || 'image/*'}
        multiple
        style={{ display: 'none' }}
        onChange={e => handleFiles(e.target.files)}
        data-testid="images-input"
      />
      <Button
        variant="contained"
        onClick={() => inputRef.current?.click()}
        disabled={
          uploading ||
          typedAnswer.length >= (maxImages || CONSTRAINTS.maxImages.default)
        }>
        {uploading ? 'Uploading…' : 'Add images'}
      </Button>
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 1 }}>
        {typedAnswer.map((img, idx) => (
          <Box
            key={idx}
            sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
            <Box sx={{ position: 'relative', width: 100, height: 100 }}>
              <NextImage
                src={'url' in img ? img.url : img.data}
                alt={img.name}
                fill
                unoptimized
                style={{
                  objectFit: 'cover',
                  borderRadius: 8,
                  border: '1px solid #ccc',
                }}
              />
              <IconButton
                size="small"
                onClick={() => handleRemove(idx)}
                aria-label="Delete photo"
                sx={{
                  position: 'absolute',
                  top: 2,
                  right: 2,
                  bgcolor: 'background.paper',
                  '&:hover': { bgcolor: 'grey.200' },
                }}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </Box>
            <TextField
              size="small"
              multiline
              rows={2}
              value={img.comment || ''}
              onChange={e => handleCommentChange(e.target.value, idx)}
              placeholder="Comment (optional)"
              aria-label={`Comment for ${img.name}`}
              sx={{ width: 100 }}
            />
          </Box>
        ))}
      </Box>
      {typesafeErrorMessage && (
        <Typography color="error" variant="caption" sx={{ mt: 0.5 }}>
          {typesafeErrorMessage}
        </Typography>
      )}
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ display: 'block', mt: 0.5 }}>
        Maximum {maxImages || CONSTRAINTS.maxImages.default} photos, types:{' '}
        {(allowedTypes || []).join(', ')}, max{' '}
        {maxSizeMb || CONSTRAINTS.maxSizeMb.default} MB/file
      </Typography>
    </Box>
  )
}

export const HMR = true // ensure HMR triggers on parent imports
