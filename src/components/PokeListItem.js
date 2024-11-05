import './css/PokeListItem.css'
import classnames from 'classnames'

function PokeListItem({ poke, onRemove, onToggle, onEvolve }) {
   const { id, name, img, black } = poke

   return (
      <div className="PokeListItem">
         <img
            src={img}
            className={classnames('img', { black })}
            onDoubleClick={() => {
               onToggle(id)
            }}
            onClick={() => onEvolve(poke.id)}
         />
         <div className="PokeName">
            {name}
            <button
               className="remove"
               onClick={() => {
                  onRemove(id)
               }}
            >
               삭제
            </button>
         </div>
      </div>
   )
}

export default PokeListItem
