import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
  
const PageNotFound: FunctionComponent = () => {
  
  return (
    <div className="center">
      <img src="https://www.pokepedia.fr/images/thumb/4/4d/M%C3%A9lof%C3%A9e-RFVF.png/595px-M%C3%A9lof%C3%A9e-RFVF.png" alt="Page non trouvée"/>
      <h1>Hey, cette page n'existe pas !</h1> 
      <Link to="/" className="waves-effect waves-teal btn-flat">
        Retourner à l'accueil
      </Link>
    </div>
  );
}
  
export default PageNotFound;