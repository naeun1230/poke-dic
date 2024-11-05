import './css/PokeList.css'
import PokeListItem from './PokeListItem'

function PokeList({ pokes, onRemove, onToggle, onEvolve }) {
   return (
      <div className="PokeList">
         {pokes.map((poke) => (
            <PokeListItem poke={poke} key={poke.id} onRemove={onRemove} onToggle={onToggle} onEvolve={onEvolve} />
         ))}
      </div>
   )
}

export default PokeList
