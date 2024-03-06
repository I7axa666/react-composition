export type LinkProps = {
  imageLink: string
}

export default function Img(imageLink: LinkProps) {

  return(
    <>
      <img src={imageLink.imageLink} className="card-img-top"></img>
    </>
  )
}