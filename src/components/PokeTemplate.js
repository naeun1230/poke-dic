import './css/PokeTemplate.css'

function PokeTemplate({ children }) {
   return (
      <div className="PokeTemplate">
         <div className="app-title">
            <img src="/images/포켓볼.png" width="30" alt="포켓볼" />
            포켓몬 도감
         </div>
         <div className="content">{children}</div>
      </div>
   )
}

export default PokeTemplate
