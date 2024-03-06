/*Filters - компонент, который принимает список TextLink 
и оставляет только заголовки со сслыками в горизонтальной плоскости
*/
import { TextLink, LinkInfo } from './TextLink'

export function Filters({array}){
  console.log(array)
  return (
   <ul className='filters'>
    {array.map((item: LinkInfo, index: number) => (
      <li key={index}>
        <TextLink {...item} />
      </li>
    ))}
   </ul>
  )
}