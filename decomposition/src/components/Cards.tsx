/*Cards отрисовывает информацию с типом cardStyle в виде плиток принимает список в формате json
Каждая карточка отрисовывается с помощью компонента TextLink, пример в ./db/forCards.json
*/

import { TextLink, LinkInfo } from './TextLink'

export default function Cards(props: {array: LinkInfo[]}) {
    const array = props.array
  return (
    <div className='widgets'>
      {array.map((item, index) => (
        <div  key={index}>
          <TextLink {...item} />
        </div>
      ))}
    </div>  
  )
}