import { TextLink, LinkInfo } from './TextLink'

export function News({array}){
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