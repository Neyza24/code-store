
import Cart from './features/cart/Cart';
import CurrencyFilter from './features/currencyFilter/CurrencyFilter';
import Inventory from './features/inventory/Inventory';
import SearchTerm from './features/searchTerm/SearchTerm';
import { getFilteredProducts } from './utilities/utilities';


const App = ({state, dispatch}) => {

  const visibleAllProducts = getFilteredProducts(state.inventory, state.searchTerm);

  return (
    <div>
      <h2>REDUX CODE STORE</h2>
      <SearchTerm 
        searchTerm={state.searchTerm}
        dispatch={dispatch}
      />
      <Inventory 
        allProducts={visibleAllProducts} 
        dispatch={dispatch}
        currencyFilter={state.currencyFilter}
      />
      <CurrencyFilter 
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
      <Cart 
        cart={state.cart}
        dispatch={dispatch}
        currencyFilter={state.currencyFilter}
      />
    </div>
  );
}

export default App;
