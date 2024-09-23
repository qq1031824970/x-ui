import { makeInstaller } from '@x-anything/utils'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import components from './components'
import '@x-anything/theme/index.css'

library.add(fas);
const installer = makeInstaller(components)

export * from '@x-anything/components'
export default installer