import { makeInstaller } from '@x-ui/utils'
import components from './components'
import '@x-ui/theme/index.css'

const installer = makeInstaller(components)

export * from '@x-ui/components'
export default installer