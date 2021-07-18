import React,{lazy,Suspense} from 'react';
import { Route, Switch } from 'react-router';
import ShoppingContainer from './components/shopping/ShoppingContainer';
import ShoppingDashboard from './components/shopping/pages/shoppingDashboard/ShoppingDashboard';
const ShoppingHistory = lazy(() => import('./components/shopping/pages/shoppingHistory/ShoppingHistory'));
const ShoppingListAdd = lazy(() => import('./components/shopping/pages/shoppingListAdd/ShoppingListAdd'));

function App() {
  return (
    <div className='App'>
      <ShoppingContainer/>
      <Suspense fallback={<div>Loading component...</div>}>
        <Switch>
          <Route exact path='/dashboard'  component={ShoppingDashboard} />
          <Route exact path='/history' component={ShoppingHistory} />
          <Route exact path='/add'component={ShoppingListAdd} />
          <Route path='/' component={ShoppingDashboard} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
