import React, { FunctionComponent } from 'react';
import PokemonList from './pages/pokemon-list';
import PokemonsDetail from './pages/pokemon-detail';
import { Link, Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import PageNotFound from './pages/page-not-found';
import PokemonEdit from './pages/pokemon-edit';
import PokemonAdd from './pages/pokemon-add';
import Login from './pages/login';
import PrivateRoute from './PrivateRoute';

const App: FunctionComponent = () => {

   const history = createBrowserHistory();

 return (
    <Router history={history}>
       <div>
          {/* Navbar */}
          <nav>
             <div className="nav-wrapper teal">
                <Link to="/" className="brand-logo center">Pokédex</Link>
             </div>
          </nav>
          {/* Route configuration */}
          <Switch>
             <PrivateRoute exact path="/" component={PokemonList} />
             <Route exact path="/login" component={Login} />
             <PrivateRoute exact path="/pokemons" component={PokemonList} />
             <PrivateRoute exact path="/pokemon/add" component={PokemonAdd} />
             <PrivateRoute path="/pokemons/edit/:id" component={PokemonEdit} />
             <PrivateRoute path="/pokemons/:id" component={PokemonsDetail} />
             {/* Error page should be in last position */}
             <Route component={PageNotFound} />
          </Switch>
       </div>
    </Router>
 );
}
  
export default App;