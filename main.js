//Creating Numbers
const list = document.querySelector('#listNumber');

for (let i = 1; i <= 60; i++) {
  let num;
  num = document.createElement('li');
  num.textContent = i;
  num.classList.add('listItem');
  list.appendChild(num);
  num = '';
}

//Listening Clicks
const selectNumbers = document.querySelectorAll('.listItem');
let activeNumbers = 0;
const qtdNumbers = document.querySelector('#qtdNumbers');
let sortedNumbers = [];

for (let i = 0; i < selectNumbers.length; i++) {
  selectNumbers[i].addEventListener('click', function (e) {
    if (activeNumbers < qtdNumbers.value) {
      if (e.target.classList.contains('active')) {
        e.target.classList.toggle('active');
        activeNumbers--;
        sortedNumbers.splice(
          sortedNumbers.indexOf(Number(e.target.textContent)),
          1
        );
      } else {
        e.target.classList.toggle('active');
        activeNumbers++;
        sortedNumbers.push(Number(e.target.textContent));
      }
      console.log(activeNumbers);
      console.log(sortedNumbers);
    } else {
      alert('limit reached');
    }
  });
}

//Sort Button
const btnSort = document.querySelector('#sort');
const sortedList = document.querySelector('#sortedNumbers');
const listItems = document.querySelectorAll('.listItem');

btnSort.addEventListener('click', function () {
  if (qtdNumbers.value < 6 || qtdNumbers.value > 15) {
    alert('Só são permitidos jogos de 6 à 15 números!');
    qtdNumbers.value = '';
  } else {
    const sortedItems = document.querySelectorAll('.listSortedItems');

    for (let b = 0; b < listItems.length; b++) {
      listItems[b].classList.remove('active');
    }

    for (let c = 0; c < sortedItems.length; c++) {
      sortedItems[c].remove();
    }

    while (sortedNumbers.length < qtdNumbers.value) {
      let temp = Math.floor(Math.random() * 60 + 1);
      if (sortedNumbers.indexOf(temp) === -1) {
        sortedNumbers.push(temp);
      }
    }

    console.log(sortedNumbers);

    for (let k = 0; k < sortedNumbers.length; k++) {
      for (let j = 0; j < listItems.length; j++) {
        if (sortedNumbers[k] == listItems[j].textContent) {
          listItems[j].classList.add('active');
          console.log(listItems[j].textContent);
        } else {
          continue;
        }
      }
    }

    for (let i = 0; i < sortedNumbers.length; i++) {
      let newSorted = document.createElement('li');
      newSorted.classList.add('listSortedItems');
      newSorted.textContent = sortedNumbers[i];
      sortedList.append(newSorted);
    }
  }
  activeNumbers = qtdNumbers.value;
});

//Clean Button
const btnClean = document.querySelector('#clean');

btnClean.addEventListener('click', function () {
  qtdNumbers.value = 6;
  sortedNumbers = [];
  activeNumbers = 0;
  for (let b = 0; b < listItems.length; b++) {
    listItems[b].classList.remove('active');
  }

  let sorteds = document.querySelectorAll('.listSortedItems');
  for (let i = 0; i < sorteds.length; i++) {
    sorteds[i].remove();
  }
});
