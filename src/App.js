
import CurrencyFilter from './features/currencyFilter/CurrencyFilter';
import Inventory from './features/inventory/Inventory';


const App = ({state, dispatch}) => {

  return (
    <div>
      <h2>REDUX CODE STORE</h2>
      <Inventory 
        allProducts={state.inventory} 
        dispatch={dispatch}
        currencyFilter={state.currencyFilter}
      />
      <CurrencyFilter 
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
    </div>
  );
}

export default App;
