import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'drvlyrec',   // Replace with your actual project ID
  dataset: 'production',
  apiVersion: '2025-05-15',       // Use your API version or latest
  useCdn: true,
})