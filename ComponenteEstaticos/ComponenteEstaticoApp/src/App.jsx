import {StaticComponent} from "./components/StaticComponent/StaticComponentApp"
import {ConsumiendoApi} from "./components/ConsumiendoApi/ConsumiendoApi"
import {ConsumiendoApis} from "./components/ConsumiendoApis/ConsumiendoApis"
import {SearchPost} from "./components/ConsumiendoApi/BuscadordePost"
function App() {
 

  return (
    <>
     <StaticComponent/>
     {/*<ConsumiendoApi/>*/}
     <SearchPost/>
     {/*<ConsumiendoApis/>*/}
     

    </>
  )
}

export default App
