import { currenciesData } from '../../data';
import { setCurrency } from './currencyFilterSlice';

const CurrencyFilter = ({ currencyFilter, dispatch }) => {

    const onClickHandler = (currency) => {
        dispatch(setCurrency(currency));
    }

    return (
        <div>
            <h3>Choose a currency</h3>
            {
                currenciesData.map(currency => (
                    <button
                        className={`currency-button ${currencyFilter === currency && 'selected'
                            }`}
                        key={currency}
                        onClick={() => onClickHandler(currency)}
                    >
                        {currency}
                    </button>
                ))
            }
        </div>
    )

}

export default CurrencyFilter;