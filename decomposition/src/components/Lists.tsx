/*Filters - компонент, который принимает список TextLink 
и оставляет только заголовки со сслыками в горизонтальной плоскости
*/
import { TextLink, LinkInfo } from './TextLink'

export default function Lists(props: {array: LinkInfo[]}){
  const array = props.array
  return (
   <ul className='list-news'>
    {array.map((item: LinkInfo, index: number) => (
      <li className='new-item' key={index}>
        <TextLink {...item} />
      </li>
    ))}
   </ul>
  )
}