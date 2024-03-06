/*TextLink - базовый компонент состоящий из заголовка 
ниже картинки(при наличие) и основного текста
*/
export type LinkInfo = {
  title: string,
  image?: string,
  text?: string,
  type?: string,
  titleHref?: string,
  href?: string
}

// export type CardType = "" | "" |""

export function TextLink ({title, image, text, type, titleHref, href}: LinkInfo) {
  console.log(title)
  return (

      <div className="card">
        <a className={type} href={titleHref}>{title}</a>
        <img src={image} alt="" />
        <a href={href}>{text}</a>
      </div>

  )
}