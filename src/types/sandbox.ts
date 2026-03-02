import React from 'react'
import ReactDOM from 'react-dom'

import { supportedResponseTypes } from '.'

export const RESPONSE_AREA_TYPE_SANDBOX_URL_KEY = 'ra-type-sandbox-url'
export const RESPONSE_AREA_TYPE_SANDBOX_NAME_KEY = 'ra-type-sandbox-name'

export function isResponseAreaSandboxType(type: string): boolean {
  return (
    !!localStorage.getItem(RESPONSE_AREA_TYPE_SANDBOX_NAME_KEY) &&
    type === localStorage.getItem(RESPONSE_AREA_TYPE_SANDBOX_NAME_KEY)
  )
}

export async function fetchSandboxComponent(
  sandboxUrl: string,
): Promise<Response> {
  const response = await fetch(
    `${sandboxUrl.replace(/\/$/, '')}/sandbox-component.iife.js`,
  )

  return response
}

async function loadResponseAreaSandboxComponent() {
  const sandboxUrl = localStorage.getItem(
    RESPONSE_AREA_TYPE_SANDBOX_URL_KEY,
  ) as string

  try {
    const response = await fetchSandboxComponent(sandboxUrl)

    if (!response.ok) {
      throw new Error(
        `Failed to fetch sandbox component: ${response.statusText}`,
      )
    }

    const componentCode = await response.text()

    window.React = React
    window.ReactDOM = ReactDOM

    const script = document.createElement('script')
    script.textContent = componentCode
    document.head.appendChild(script)
  } catch (error) {
    console.error('Failed to load sandbox component:', error)
  }
}

async function initializeResponseAreaSandbox() {
  if (typeof window === 'undefined') return

  const sandboxUrl = localStorage.getItem(RESPONSE_AREA_TYPE_SANDBOX_URL_KEY)
  const sandboxTypeName = localStorage.getItem(
    RESPONSE_AREA_TYPE_SANDBOX_NAME_KEY,
  )

  if (!sandboxUrl || !sandboxTypeName) return

  console.debug('ENABLING RESPONSE_AREA_TYPE_SANDBOX', {
    name: sandboxTypeName,
    url: sandboxUrl,
  })

  await loadResponseAreaSandboxComponent()

  if (!supportedResponseTypes.includes(sandboxTypeName)) {
    supportedResponseTypes.push(sandboxTypeName)
  }

  watchSandboxComponent()
}

function watchSandboxComponent() {
  let lastModified: string | null = null
  const sandboxUrl = localStorage.getItem(
    RESPONSE_AREA_TYPE_SANDBOX_URL_KEY,
  ) as string
  let failCount = 0

  const checkForChanges = async () => {
    try {
      const response = await fetch(
        `${sandboxUrl.replace(/\/$/, '')}/sandbox-component.iife.js`,
        { method: 'HEAD' },
      )
      if (!response.ok) {
        throw new Error(`status=${response.status}`)
      }
      const currentModified = response.headers.get('last-modified')

      if (lastModified && currentModified !== lastModified) {
        await loadResponseAreaSandboxComponent()
        window.dispatchEvent(new Event('ResponseAreaTubReset'))
      }
      lastModified = currentModified
      failCount = 0
    } catch (error) {
      failCount++
      console.error(
        `Error checking sandbox component (${failCount}/10):`,
        error,
      )
    } finally {
      if (failCount < 10) {
        setTimeout(checkForChanges, 500)
      }
    }
  }

  setTimeout(checkForChanges, 500)
}

if (typeof window !== 'undefined') {
  window.document.addEventListener('DOMContentLoaded', () => {
    initializeResponseAreaSandbox()
  })
}
