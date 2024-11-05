import './css/PokeInsert.css'
import { MdAddBox } from 'react-icons/md'
import React, { useState, useCallback } from 'react'

function PokeInsert({ onInsert }) {
   const [value, setValue] = useState('')
   const onChange = useCallback((e) => setValue(e.target.value), [])

   const onSubmit = useCallback(
      (e) => {
         e.preventDefault()
         onInsert(value)
         setValue('')
      },
      [value, onInsert]
   )

   return (
      <form className="PokeInsert" onSubmit={onSubmit}>
         <input placeholder="포켓몬 이름을 입력해주세요." value={value} onChange={onChange} />
         <button type="submit">
            <MdAddBox />
         </button>
      </form>
   )
}

export default PokeInsert
