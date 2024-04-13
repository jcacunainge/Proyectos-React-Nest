import { currencies } from "../data"

export default function CriptoSearchForm() {
    return (
        <form className="form">
            <div className="field">
                <label htmlFor="currency">Moneda:</label>
                <select
                    name="currency"
                    id="currency"
                >
                     <option value=""> -- Seleccione --</option>
                    {currencies.map(currencies => (
                         <option key={currencies.code} value={currencies.code}>{currencies.name}</option>
                       
                    ))}
                </select>
            </div>

            <div className="field">
                <label htmlFor="currency">Criptomoneda:</label>
                <select
                    name="currency"
                    id="currency"
                >
                    <option
                        value=""
                    > -- Seleccione --
                    </option>
                </select>
            </div>

            <input className="btn" type="button" value="Cotizar" />

        </form>
    )
}
