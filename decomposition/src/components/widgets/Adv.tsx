/*Adv отображает картинку с рекламным баннером, принимает один параметр - ссылку на изображение
*/

export default function Adv (link: srting) {
  return (
    <div className='adv'>
      <img src={link} alt="Ваша реклама" />
    </div>
  )
}