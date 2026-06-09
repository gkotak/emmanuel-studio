import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'tqrrtmwq',
    dataset: 'production'
  },
  deployment: {
    autoUpdates: true,
    appId: 'fcw5fahc1okc7nrlv1p6k2bw',
  }
})
