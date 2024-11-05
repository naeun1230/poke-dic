import React, { useState, useRef, useCallback } from 'react'
import PokeTemplate from './components/PokeTemplate'
import PokeInsert from './components/PokeInsert'
import PokeList from './components/PokeList'

function App() {
   const evolveData = {
      삐: [
         { name: '삐', img: '/images/삐.png' },
         { name: '삐삐', img: '/images/삐삐.png' },
         { name: '픽시', img: '/images/픽시.png' },
      ],
      고라파덕: [
         { name: '고라파덕', img: '/images/고라파덕.png' },
         { name: '골덕', img: '/images/골덕.png' },
      ],
      쫀도기: [
         { name: '쫀도기', img: '/images/쫀도기.png' },
         { name: '바우첼', img: '/images/바우첼.png' },
      ],
      야돈: [
         { name: '야돈', img: '/images/야돈.png' },
         { name: '야도란', img: '/images/야도란.png' },
      ],
      파오리: [
         { name: '파오리', img: '/images/파오리.png' },
         { name: '창파나이트', img: '/images/창파나이트.png' },
      ],
      식스테일: [
         { name: '식스테일', img: '/images/식스테일.png' },
         { name: '나인테일', img: '/images/나인테일.png' },
      ],
      루리리: [
         { name: '루리리', img: '/images/루리리.png' },
         { name: '마릴', img: '/images/마릴.png' },
         { name: '마릴리', img: '/images/마릴리.png' },
      ],
      모다피: [
         { name: '모다피', img: '/images/모다피.png' },
         { name: '우츠동', img: '/images/우츠동.png' },
         { name: '우츠보트', img: '/images/우츠보트.png' },
      ],
      발챙이: [
         { name: '발챙이', img: '/images/발챙이.png' },
         { name: '수륙챙이', img: '/images/수륙챙이.png' },
         { name: '강챙이', img: '/images/강챙이.png' },
      ],
      미뇽: [
         { name: '미뇽', img: '/images/미뇽.png' },
         { name: '신뇽', img: '/images/신뇽.png' },
         { name: '망나뇽', img: '/images/망나뇽.png' },
      ],
      먹고자: [
         { name: '먹고자', img: '/images/먹고자.png' },
         { name: '잠만보', img: '/images/잠만보.png' },
      ],
      치코리타: [
         { name: '치코리타', img: '/images/치코리타.png' },
         { name: '베이리프', img: '/images/베이리프.png' },
         { name: '메가니움', img: '/images/메가니움.png' },
      ],
      토게피: [
         { name: '토게피', img: '/images/토게피.png' },
         { name: '토게틱', img: '/images/토게틱.png' },
         { name: '토게키스', img: '/images/토게키스.png' },
      ],
   }

   const [pokes, setPokes] = useState([
      {
         id: 1,
         name: '고라파덕',
         img: '/images/고라파덕.png',
         black: false,
         evolutionStage: 0,
      },
      {
         id: 2,
         name: '데덴네',
         img: '/images/데덴네.png',
         black: false,
         evolutionStage: 0,
      },
      {
         id: 3,
         name: '쫀도기',
         img: '/images/쫀도기.png',
         black: false,
         evolutionStage: 0,
      },
      {
         id: 4,
         name: '삐',
         img: '/images/삐.png',
         black: false,
         evolutionStage: 0,
      },
      {
         id: 5,
         name: '파오리',
         img: '/images/파오리.png',
         black: false,
         evolutionStage: 0,
      },
      {
         id: 6,
         name: '발챙이',
         img: '/images/발챙이.png',
         black: false,
         evolutionStage: 0,
      },
   ])

   const nextId = useRef(7)

   const onInsert = useCallback(
      (name) => {
         const poke = {
            id: nextId.current,
            name: name,
            img: `/images/${name}.png`,
            black: false,
            evolutionStage: 0,
         }

         setPokes(pokes.concat(poke))
         nextId.current += 1
      },
      [pokes]
   )

   const onRemove = useCallback(
      (id) => {
         const removedPokes = pokes.filter((poke) => poke.id !== id)
         setPokes(removedPokes)
      },
      [pokes]
   )

   const onToggle = useCallback(
      (id) => {
         const blackPokes = pokes.map((poke) =>
            poke.id === id
               ? {
                    ...poke,
                    black: !poke.black,
                 }
               : poke
         )
         setPokes(blackPokes)
      },
      [pokes]
   )

   const onEvolve = (pokeId) => {
      setPokes((prevPokes) => {
         return prevPokes.map((poke) => {
            if (poke.id === pokeId) {
               const evolvePath = evolveData[poke.name]
               if (!evolvePath) return poke // 진화 경로가 없는 포켓몬은 그대로 반환

               const nextEvolutionStage = poke.evolutionStage + 1
               return {
                  ...poke,
                  img: evolvePath[nextEvolutionStage].img, // 새로운 이미지로 변경
                  name: evolvePath[nextEvolutionStage].name, // 새로운 이름으로 변경
                  evolutionStage: nextEvolutionStage, // 진화 단계 갱신
               }
            }
            return poke
         })
      })
   }

   return (
      <PokeTemplate>
         <PokeInsert onInsert={onInsert} />
         <PokeList pokes={pokes} onRemove={onRemove} onToggle={onToggle} onEvolve={onEvolve} />
      </PokeTemplate>
   )
}

export default App
