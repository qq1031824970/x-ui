import { makeInstaller } from '@x-anything/utils'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import components from './components'
import printLog from './printLog';
import '@x-anything/theme/index.css'

printLog()

library.add(fas);
const installer = makeInstaller(components)

export * from '@x-anything/components'
export default installer