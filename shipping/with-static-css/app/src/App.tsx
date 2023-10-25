import './App.css'
import { cx } from '@acme/ui-lib/cx'
import { button } from '@acme/ui-lib/recipes'
import { Button } from 'panda-monorepo-setup-with-static-css-ui-lib'
import 'panda-monorepo-setup-with-static-css-ui-lib/lib.css'

function App() {
  return (
    <>
      <h1>Hello from Panda 🐼</h1>
      <h2>shipping/with-static-css</h2>
      <div>
        <Button visual="funky" shape="square" size="lg">
          Button component from ui-lib (hover to see library specific styles)
        </Button>
        <button className={cx(button({ visual: 'edgy' }), 'app-button')}>button recipe from ui-lib</button>
      </div>
    </>
  )
}

export default App
