import { initializeApp, getApps, getApp } from 'firebase/app'
import { GoogleAuthProvider, OAuthProvider, getAuth } from 'firebase/auth'

import { Environment } from '../parameters/environment'

const firebaseConfig = {
  apiKey: Environment.FIREBASE_API_KEY,
  authDomain: Environment.FIREBASE_AUTH_DOMAIN,
  projectId: Environment.FIREBASE_PROJECT_ID,
  storageBucket: Environment.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: Environment.FIREBASE_MESSAGING_SENDER_ID,
  appId: Environment.FIREBASE_APP_ID,
}

// Prevent multiple Firebase initializations
const firebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp()
export const firebaseAuth = getAuth(firebaseApp)

export const firebaseGoogleAuthProvider = new GoogleAuthProvider()

export const firebaseMicrosoftAuthProvider = new OAuthProvider('microsoft.com')
firebaseMicrosoftAuthProvider.setCustomParameters({
  prompt: 'select_account',
})

export const firebaseImperialAuthProvider = new OAuthProvider('microsoft.com')
firebaseImperialAuthProvider.setCustomParameters({
  tenant: '2b897507-ee8c-4575-830b-4f8267c3d307',
})
