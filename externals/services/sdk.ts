import { getSdk } from '@api/graphql-sdk'
import { firebaseAuth } from '@services/firebase'
import { GraphQLClient } from 'graphql-request'

import { Environment } from '../parameters/environment'

export const GraphqlSdk = async () => {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  }

  const idToken = await firebaseAuth.currentUser?.getIdToken()

  if (idToken) {
    headers['Authorization'] = `Bearer ${idToken}`
  }

  const client = new GraphQLClient(Environment.GRAPHQL_URL, { headers })

  const sdk = getSdk(client)
  return sdk
}
