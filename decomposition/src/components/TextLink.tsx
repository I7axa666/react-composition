/*TextLink - базовый компонент состоящий из заголовка 
ниже картинки(при наличие) и основного текста
*/
export type LinkInfo = {
  title: string,
  image?: string,
  text?: string,
  type?: CardType,
  titleHref?: string,
  description?: string[]
}

/*Отображает три базовых типа:
 'onlyText' - только заголовок со ссылкой
 'textWithImg' - картинка заголовок и ссылку
 'cardStyle' - карточка с картинкой, заголовком со ссылкой и списком новстей/любой информации в текстовом формате
 ПРимеры исходных данныхз в следующих файлах:
 для  'onlyText' - ./db/ulHeader.json и ./db/searchFilters.json
 для  'textWithImg' - ./db/headerNews.json и ./db/currency.json
 для  'cardStyle' - ./db/forCards.json
*/

export type CardType = 'onlyText' | 'textWithImg' |'cardStyle'

export function TextLink ({title, image, text, type, titleHref, description}: LinkInfo) {
/* в зависимости от указанного type отрисовывется соответствующий компонент
*/
  
  if (type === 'onlyText') {
    return (
      <div className="card">
        <a className={type} href={titleHref}>{title}</a>
        <a href={titleHref}>{text}</a>
      </div>
    )
  } else if (type === 'textWithImg') {
    return (
      <div className="card">
        <img src={image} alt="" />
        <a className={type} href={titleHref}>{title}</a>
        <a href={titleHref}>{text}</a>
      </div>
    )   
  } else {
      return (
        <div className="card-view">
          <div className="card-title">
            <img src={image} alt="" />
            <h3>{title}</h3>
          </div>
            <ul>
              {description.map((item, index) => (
                <li className="descList" key={index}>{item}</li>
              ))}
            </ul>
        </div>
      )
  } 

}
