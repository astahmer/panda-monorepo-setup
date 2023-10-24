import './App.css'
import { css, cx } from 'styled-system/css'
import { Stack } from 'styled-system/jsx'
import { button } from 'styled-system/recipes'

function App() {
  return (
    <>
      <h1 className={css({ fontSize: '4xl', lineHeight: '1.1' })}>Hello from Panda 🐼</h1>
      <h2 className={css({ fontSize: '2xl', my: 4, color: 'yellow.400' })}>module-resolution/with-outdir</h2>
      <Stack>
        <button className={cx(button(), css({ bgColor: 'teal.400', color: 'rgba(0, 0, 0, 0.8)', fontWeight: 'bold' }))}>
          button recipe from ui-lib, with local overrides
        </button>
      </Stack>
    </>
  )
}

export default App
