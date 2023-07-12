//первый селектор пункта отправления
const airports = [
    ['Аэропорт Минск','Минск'],
    ['Шереметьево', 'Москва'],
    ['Домодедово', 'Москва'],
    ['Внуково', 'Москва'],
    ['Пулково', 'Санкт-Петербург'],
    ['Толмачево', 'Новосибирск'],
    ['Кольцово', 'Екатеринбург'],
    ['Курумоч', 'Самара'],
    ['Хитроу', 'Лондон'],
    ['Шарль-де-Голль', 'Париж'],
    ['Имени Ататюрка', 'Стамбул'],
    ['Франкфурт-на-Майне','Франкфурт'],
    ['Схипхол', 'Амсердам'],
    ['Мадрид-Барахас','Мадрид'],
    ['Аэропорт Мюнхен','Мюнхен'],
    ['Фьюмичино','Рим'],
    ['Гатвик','Лондон'],
    ['Аэропорт Барселона','Барселона'],
    ['Париж-Орли','Париж'],
    ['Аэропорт имени Сабихи Гёкчен','Стамбул'],
    ['Аэропорт Осло-Гардермуэн','Осло'],
    ['Пальма-де-Мальорка','Палма'],
    ['Стокгольм-Арланда','Стокгольм'],
    ['Вена-Швехат','Вена'],
    ['Цюрихский аэропорт','Цюрих'],
    ['Элефтериос Венизелос','Афины'],
    ['Инчхон','Сеул'],
    ['Аэропорт Токио','Токио'],
    ['Пекин Столичный','Пекин'],
    ['Шанхай Пудун','Шанхай']
]
/*
document.addEventListener('DOMContentLoaded', function() {
    const select = document.getElementById('mySelect');
    for(let i = 0; i < airports.length; i++) {
      const option = document.createElement('option');
      option.value = airports[i][0];
      option.text = `${airports[i][0]} (${airports[i][1]})`
      select.add(option);
    }
  });


document.addEventListener('DOMContentLoaded', function() {
const select = document.getElementById('mySelect');
const depCity = document.getElementById('cityName');
const port = document.getElementById('portName');

select.addEventListener('change', function() {
    const selectedValue =select.value;
    const airPort = airports.find(a=>a[0]===selectedValue);

    if(airPort) {
        const [name, city] = airPort;
        console.log(name);
        console.log(city);
        depCity.innerHTML=`${city}`;
        port.innerHTML=`${name}`
    }
    else {

    }

})})
*/


document.addEventListener ('DOMContentLoaded', function() {

const departmentList = document.getElementById('departmentList');

  //Заполнение селекта значениями из массива
  for(let i = 0; i<airports.length; i++) {
  const li = document.createElement('li');
  li.textContent = `${airports[i][0]} (${airports[i][1]})`;
  li.dataset.value = airports[i][0];
  li.classList.add('dropdown__item');
  departmentList.appendChild(li)
  }



const dropdownButton = document.getElementById('button');
const dropdownItem = document.querySelectorAll('.dropdown__item');

//открытие при клике списка
dropdownButton.addEventListener('click', function() {
  dropdownButton.classList.add('dropdown__btn--active');
  departmentList.classList.toggle ('dropdown__list--visible');

})

// заполнение кнопки выбранным значением
dropdownItem.forEach(function(item) {
  item.addEventListener('click', function(e) {
    e.stopPropagation();
    dropdownButton.value = item.textContent;
    departmentList.classList.remove('dropdown__list--visible');
    dropdownButton.classList.remove('dropdown__btn--active');

  })

})
//при нажатии вне списка список закрывается
document.addEventListener('click', function(e) {
  if(e.target !== dropdownButton ) {
    dropdownButton.classList.remove('dropdown__btn--active');
    departmentList.classList.remove('dropdown__list--visible');
  }
})

//при нажатии на esc список закрывается
document.addEventListener('keydown', function(e) {
  if(e.key === 'Escape') {
    dropdownButton.classList.remove('dropdown__btn--active');
    departmentList.classList.remove('dropdown__list--visible');
  }
})

//вставка выбранного названия в html теги
const cityDiv = document.getElementById('cityName')
const airportDiv = document.getElementById('portName')
dropdownItem.forEach(function(item) {
  item.addEventListener('click', function(e) {
    e.stopPropagation();
    const [city, airport] = item.textContent.split('(')
    cityDiv.innerHTML=`${city}`;
    airportDiv.innerHTML=`${airport.slice(0,-1)}`;
})})})



/*Второй селектор пункта назначения
document.addEventListener ('DOMContentLoaded', function() {
const arrivalList = document.getElementById('arrivalList')
const ArrivalDropdownButton = document.getElementById('Arrbutton');
const ArrivalDropdownItem = document.querySelectorAll('.dropdown__item');

Заполнение селекта значениями из массива






      Заполнение селекта значениями из массива
      for(let i = 0; i<airports.length; i++) {
      const li = document.createElement('li');
      li.textContent = `${airports[i][0]} (${airports[i][1]})`;
      li.dataset.value = airports[i][0];
      li.classList.add('dropdown__item');
      arrivalList.appendChild(li)
      }





    открытие при клике списка
    ArrivalDropdownButton.addEventListener('click', function() {
      ArrivalDropdownButton.classList.add('dropdown__btn--active');
      arrivalList.classList.toggle ('dropdown__list--visible');

    })

    заполнение кнопки выбранным значением
    ArrivalDropdownItem.forEach(function(items) {
      items.addEventListener('click', function(ev) {
        ev.stopPropagation();
        ArrivalDropdownButton.value = items.textContent;
        arrivalList.classList.remove('dropdown__list--visible');
        ArrivalDropdownButton.classList.remove('dropdown__btn--active');

      })

    })
    при нажатии вне списка список закрывается
    document.addEventListener('click', function(e) {
      if(e.target !== ArrivalDropdownButton ) {
        ArrivalDropdownButton.classList.remove('dropdown__btn--active');
        arrivalList.classList.remove('dropdown__list--visible');
      }
    })

    при нажатии на esc список закрывается
    document.addEventListener('keydown', function(e) {
      if(e.key === 'Escape') {
        ArrivalDropdownButton.classList.remove('dropdown__btn--active');
        arrivalList.classList.remove('dropdown__list--visible');
      }
    })

    вставка выбранного названия в html теги
    const cityDiv = document.getElementById('cityName')
    const airportDiv = document.getElementById('portName')
    ArrivalDropdownItem.forEach(function(item) {
      item.addEventListener('click', function(e) {
        e.stopPropagation();
        const [city, airport] = item.textContent.split('(')
        cityDiv.innerHTML=`${city}`;
        airportDiv.innerHTML=`${airport.slice(0,-1)}`;
    })})
    })
    */