/* @refresh skip */
import { Router, Route, Routes } from "@solidjs/router";
import { createSignal, createContext, useContext } from "solid-js";

// import './index.css'
import Page from './Page'

const TestContext = createContext();

const Routed = () => { 

  const [test, setTest] = createSignal('jo')
 
  setTimeout(() => {
    setTest('helllloooooo')
  }, 5000) 

  return (
    <TestContext.Provider value={{ test }}>
      <Router>
        <Routes>
          <Route path='/nested' component={Page} />
        </Routes>
      </Router>      
    </TestContext.Provider>
  )
}

export default Routed
export function useTest() { return useContext(TestContext); }