 /*Input отрисовка поля для ввода, с помощью Filters есть возможность отрисовки фильтров над 
 полем вода, примера исходных данных в формате json ./db/searchFilters.json
*/
 
 import { Filters } from "./Filters"
    
  export default function Input ({...props}) {
    
    return (
      <>
        <Filters array={props.array}/>
        <div className="input-box">
          <div className="logos">logo</div>
          <input type="text" />
        </div>
        
      </>

    )
  }