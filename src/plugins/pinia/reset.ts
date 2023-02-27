import type { Store } from 'pinia'
import lodash from 'lodash'

// store.$state
// store.$reset
// store.$patch
const reset = ({ store }: { store: Store }) => {
  const initialState = lodash.cloneDeep(store.$state)
  store.$reset = () => store.$patch(initialState) // 重写 $reset
}

export default reset
