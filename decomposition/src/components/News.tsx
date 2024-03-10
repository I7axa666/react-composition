/*News отрисовывает информацию с типом cardStyle в виде плиток принимает список в формате json
Каждая карточка отрисовывается с помощью компонента TextLink, пример в ./db/forCards.json
*/

import { TextLink, LinkInfo } from './TextLink'

export function News(props: {array: LinkInfo[]}){
  const array = props.array
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