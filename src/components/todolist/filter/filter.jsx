import './filter.scss'

export const Filter = ({filter,setFilter, setSort}) => {
    return (
        <div className="filter">
            <h2>Filtrar:</h2>
            <div className='filter-container'>
                <div className="filter-container-options">
                    <p>Status:</p>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="All">Todas</option>
                        <option value="Completed">Completas</option>
                        <option value="Incomplete">Incompletas</option>
                    </select>
                </div>
                <div className='filter-container-btn'>
                    <p>Ordem alfabetica:</p>
                    <button onClick={() => setSort("Acs")}>Acs</button>
                    <button onClick={() => setSort("Desc")}>Desc</button>
                </div>
            </div>
        </div>
    )
}