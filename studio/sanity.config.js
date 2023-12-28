import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import BrandLogo from './src/logo'
import {myStructure} from './deskStructure'

export default defineConfig({
  name: 'default',
  title: 'jani-web',

  projectId: 'yle0uork',
  dataset: 'production',
  studio: {
    components: {
      logo: BrandLogo,
    },
  },

  plugins: [deskTool({structure: myStructure}), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
