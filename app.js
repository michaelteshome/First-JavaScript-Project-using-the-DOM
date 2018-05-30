const toggleList = document.getElementById('toggleList');// used for hiding and showing list
const listDiv = document.querySelector('.list'); // contains all elements in div from the class list
const descriptionInput = document.querySelector('input.description'); // input for changing list description
const descriptionP = document.querySelector('p.description'); // list description 
const descriptionButton = document.querySelector('button.description');// Button that changes list description
const addItemInput = document.querySelector('input.addItemInput');// input for adding items to list
const addItemButton = document.querySelector('button.addItemButton'); // Button that adds items to list
const removeItemButton = document.querySelector('button.removeItemButton');// Button that removes item
const listul = document.querySelector('ul');

const listItems = document.getElementsByTagName('li');

toggleList.addEventListener('click', () => {
       if(listDiv.style.display == 'none'){
          toggleList.textContent = 'Hide List';
          listDiv.style.display = 'block';
      }
      else{
          toggleList.textContent = 'Show List';
          listDiv.style.display = 'none';
      }
  
});


descriptionButton.addEventListener('click', () => {
      descriptionP.textContent = `${descriptionInput.value} ${":"}`;                        
});


addItemButton.addEventListener('click', () => {
      let ul = document.getElementsByTagName('ul')[0];
      let li = document.createElement('li');
      li.textContent = addItemInput.value;
      ul.appendChild(li);
      addItemInput.value = '';
      
});

removeItemButton.addEventListener('click', () => {
      let ul = document.getElementsByTagName('ul')[0];
      let li = document.querySelector('li:last-child');
      ul.removeChild(li);
      
});



listDiv.addEventListener('click', (event) => {
    if(event.target.tagName == 'BUTTON'){
        if(event.target.className == 'remove'){
          let li = event.target.parentNode;
          let ul = li.parentNode;
          ul.removeChild(li);
        }
      
      if(event.target.className == 'up'){
          let li = event.target.parentNode;
          let prevLi = li.previousElementSibling;
          let ul = li.parentNode;
          if(prevLi){
            ul.insertBefore(li, prevLi);
          }
      }

      if(event.target.className == 'down'){
          let li = event.target.parentNode;
          let nextLi = li.nextElementSibling;
          let ul = li.parentNode;
          if(nextLi){
            ul.insertBefore(nextLi, li);
          }
      }

    }
});







