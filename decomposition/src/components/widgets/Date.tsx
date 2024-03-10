/*CurrentDate отображение текущей даты в понятном формате
*/

export default function CurrentDate() {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm: number = today.getMonth() + 1;
  const yyyy = today.getFullYear();
  const months = {
    1: 'января', 2: 'февраля', 3: 'марта', 4: 'апреля', 5: 'мая', 6: 'июня', 7: 'июля', 8: 'августа', 9: 'сентября', 10: 'октября', 11: 'ноября', 12: 'декабря'
  }
  // console.log(dd + ' ' + months[mm] + ' ' + yyyy)
  return (
    <>
      <span className="date">{dd + ' ' + months[mm] + ' ' + yyyy}</span>
    </>
  )
}