import React, { useContext, useRef } from 'react'

const ControlIdContext = React.createContext({
  nextIdNumber: 1,
})

// By wrapping the app in a provider, the generated ids will reset each time
// that the app re-renders from scratch. This is useful for SSR.
export const ControlIdProvider = ({ children }) => {
  let ref = useRef({ nextIdNumber: 1 })

  return (
    <ControlIdContext.Provider value={ref.current}>
      {children}
    </ControlIdContext.Provider>
  )
}

export function useControlId(id) {
  let context = useContext(ControlIdContext)
  return id || 'input-' + context.nextIdNumber++
}

export default useControlId
