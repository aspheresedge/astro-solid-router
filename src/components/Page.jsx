import { createSignal } from 'solid-js'
// import './App.css'
import { useTest } from './Routed'

function Page() {

  const testctx = useTest()
  if(!testctx) throw new Error('nope...')

  const [count, setCount] = createSignal(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          {/* <img src={viteLogo} class="logo" alt="Vite logo" /> */}
        </a>
        <a href="https://solidjs.com" target="_blank">
          {/* <img src={solidLogo} class="logo solid" alt="Solid logo" /> */}
        </a>
      </div>
      <h1>Vite + Solid</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count()}, and context data is {testctx.test()}
        </button>
        <p>
          Edit <code>src/Page.jsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Solid logos to learn more
      </p>
    </>
  )
}

export default Page
