import { ThemeProvider, createTheme } from "@mui/material/styles"
import { useMemo } from "react"
import { themeSettings } from "./theme"
import { CssBaseline } from "@mui/material"

function App() {
  const theme = useMemo(()=> createTheme(themeSettings), [])
  return (
    <>
      <div className="app"></div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        hi
      </ThemeProvider>
    </>
  )
}

export default App
