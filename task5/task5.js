// todo: Дан номер месяца (1 — январь, 2 — февраль, ...). 
// Вывести название соответствующего времени года("зима", "весна" и т.д.). 
// Примечание: решить задачу через конструкцию switch

let arg = prompt("Введите номер месяца?");
switch (arg) {
  case '12':
  case '1':
  case '2':
    alert( 'Зима' );
    break;

  case '3':
  case '4':
  case '5':
    alert( 'Весна' );
    break;

  case '6':
  case '7':
  case '8':
    alert( 'Эх,лето!' );
    break;

   case '9':
   case '10':
   case '11':
    alert( 'Осень' );
    break;

    default:
        alert( 'Неизвестное значение' );
}