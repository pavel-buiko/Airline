// получаем значение из инпута
const inputVal = document.getElementById('input').value;

// создаем новый XML документ
const xmlDoc = document.implementation.createDocument(null, 'root');

// создаем новый элемент с полученным значением
const newValue = xmlDoc.createElement('value');
newValue.textContent = inputVal;

// добавляем элемент в документ
xmlDoc.documentElement.appendChild(newValue);

// отправляем XML документ на сервер
const xhr = new XMLHttpRequest();
xhr.open('POST', '../xml/file.xml');
xhr.setRequestHeader('Content-Type', 'application/xml');
xhr.send(new XMLSerializer().serializeToString(xmlDoc));