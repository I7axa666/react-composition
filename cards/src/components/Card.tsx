import Btn from './Btn'
import Img from './Img'


export type InfoProps = {
  imageLink?: string,
  title: string,
  text: string
}

export function Card({imageLink, title, text}: InfoProps){
 
  
  return(
    <>

    <div className="card">
      {imageLink ? <Img imageLink={imageLink} /> : <></>}     
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <Btn title={title}/>
      </div>
    </div>
 
    </>
  )
}