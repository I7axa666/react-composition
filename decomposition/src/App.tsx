import './App.css'
import { LinkInfo } from './components/TextLink'
import { Filters } from './components/Filters'

const item: LinkInfo = {
  title: 'Сейчас в СМИ',
  titleHref: '#'
}

const item2: LinkInfo = {
  title: 'В германии',
  titleHref: '#'
}

const item3: LinkInfo = {
  title: 'Рекомендуем',
  titleHref: '#'
}

const newsList = [item, item2, item3]

function App() {
  

  return (
    <>
    <div className='header'>
      <Filters array={newsList}/>
      <span className="date">31 июля 2025</span>
    </div>

    <div>
      <div className='news-block'>
        <div className='nwes-filter'>
          <ul className='filters'>
            <li>Сейчас в СМИ</li>
            <li>В германии</li>
            <li>Рекомендуем</li>
          </ul>
          <p className='date'>31 июля 2024</p>
        </div>
        <div className='news'>
          <ul>
            <li>Путин</li>
            <li>В команде</li>
            <li>Турпомощ</li>
            <li>Суд закрыл</li>
            <li>На украине призвали</li>
          </ul>
        </div>

        <ul className='currency'>
          <li>usd</li>
          <li>eur</li>
          <li>нефть</li>
        </ul>
      </div>
      <div>Реклама</div>
    </div>  
      
      <ul className='filters'>
        <li>Видео</li>
        <li>Картинки</li>
        <li>Новости</li>
        <li>Карты</li>
        <li>Маркет</li>
        <li>Переводчик</li>
        <li>Эфир</li>
        <li>еще</li>
      </ul>
      <input type="text" />
      <div className='big-banner'>Большой баннер</div>
      <div className='widgets'>
        Плитка из виджетов
      </div>
    </>
  )
}

export default App
