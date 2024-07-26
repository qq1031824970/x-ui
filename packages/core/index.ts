import { makeInstaller } from '@o-ui/utils'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import components from './components'
import '@o-ui/theme/index.css'

library.add(fas);
const installer = makeInstaller(components)

export * from '@o-ui/components'
export default installer