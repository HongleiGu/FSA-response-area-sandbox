import Icon from '@mui/material/Icon'
import Image from 'next/legacy/image'
import React from 'react'

export const TextCursor = () => (
  <Icon style={{ marginBottom: 3 }}>
    <Image
      src={'/icons/text-cursor.png'}
      alt={'branch icon'}
      width={15}
      height={15}
    />
  </Icon>
)
