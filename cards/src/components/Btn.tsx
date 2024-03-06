export type TitleProps = {
  title: string
}

export default function Btn(title: TitleProps) {

  return(
    <>
      <a href="#" className="btn btn-primary">{title.title}</a>
    </>
  )
}