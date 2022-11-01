import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useState,
} from "react"

const initialContext: {
  sidebarOpen: boolean
  setSidebarOpen: Dispatch<SetStateAction<boolean>>
} = {
  sidebarOpen: null,
  setSidebarOpen: null,
}

const GeneralContext = createContext(initialContext)

export const useGeneral = () => useContext(GeneralContext)

export const GeneralContextProvider: FC = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <GeneralContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      {children}
    </GeneralContext.Provider>
  )
}
