
import './app.css'
import './index.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import RestaurantList from './components/HotelList'
import RestaurantDetail from './components/RestauranDetails'


import { Route, Switch } from 'wouter'
import HeaderComponent from './components/Header'


const client = new QueryClient()

function App() {

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <QueryClientProvider client={client}>
        <Switch>
          <Route path='/' component={RestaurantList}></Route>
          <Route path='/restaurant/:id' component={RestaurantDetail}></Route>
        </Switch>
      </QueryClientProvider>
    </>
  )
}

export default App
