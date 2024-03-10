/*App - компонент, в котором формируется отображаемая страница
Содержит три основных блока с классами:
header (Новострой блок со ссылками на на главные новости, информационное поле с данными биржи и баннер с рекламой)
main (Поисковая строка с фильтрами, лого и рекламным большим рекламным баннером)
footer (Плитка виджитов для отображения дополнительной информации, новостей, сводок)

В качестве источника информации принимаются списки в формате json с объектами в которых поля стандартизированы.
Основным компонентом для отображения является TextLink, который примает объект и в зависимости от 
указанного типа отрисовывает ту или иную новость.

CurrentDate отображение текущей даты в формате чч.мммм.гггг
Filters отрисовывает список заголовков в горизонтали
Lists отображает список заголовков с картиной при наличии в вертикали
Adv отрисовка блока с рекламой в виде картинки
Input поля поисковика с отображением логотипа и большого рекламного баннера
Cards отрисовывает информацию в виде плиток с заголовком и картинкой, а также
может отображать иформацию в виде списка
*/

import './App.css'
import { Filters } from './components/Filters'
import CurrentDate from './components/widgets/Date'
import Lists from './components/Lists'
import filter from './db/ulHeader.json'
import headerNews from './db/headerNews.json'
import curency from './db/currency.json'
import searchFilter from './db/searchFilters.json'
import forCards from './db/forCards.json'
import Adv from './components/widgets/Adv'
import Input from './components/Input'
import Cards from './components/Cards'



function App() {
  

  return (
    <>
    <div className='header'>
      <div className='news-block'>
        <div className='header-new'>
          <Filters array={filter}/>
          <CurrentDate />
        </div>

        <div className='news'>
          <Lists array={headerNews}/>
        </div>
      
        <div className='carrency'>
          <Filters array={curency}/>
        </div>
      </div>
      
      <Adv />

    </div>
       
    
    <div className='main'>
      <Input array={searchFilter}/>
      <Adv />
    </div>

    <div className='footer'>
      <Cards array={forCards}/>
    </div>  
      
      
    </>
  )
}

export default App
