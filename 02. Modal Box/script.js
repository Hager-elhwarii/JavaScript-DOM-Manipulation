
let openBtn = document.getElementById('open-btn')
let modalContainer = document.querySelector('.modal-container')
console.log(modalContainer);
let closeBtn = document.getElementById('close-btn')


// Event Listener to display the modal box.
openBtn.addEventListener('click',()=> {
    modalContainer.style.display = 'block'
})

// Event Listener to hide the modal box once close btn is clicked.
closeBtn.addEventListener('click',()=> {
    modalContainer.style.display = 'none'
})

// Event Listener to hide the modal box once clicking on the window.
window.addEventListener('click', (e)=>{
  if(modalContainer === e.target){
    modalContainer.style.display = 'none'
  }
})