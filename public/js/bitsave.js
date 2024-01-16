const openModalButton = document.getElementById('openModalButton');
const nextModalButton = document.getElementById('nextModalButton');
const closeModalButton = document.getElementById('closeModalButton');
const backModalButton = document.getElementById('backModalButton');
const modalContainer = document.getElementById('modalContainer');
const modal2 = document.getElementById('modal2');
const modalContainer3 = document.getElementById('modalContainer3');
const lastModalButton = document.getElementById('lastModalButton');
const create_modal = document.getElementById('create_modal');
const next_button = document.getElementById('next_button');
const final_modal = document.getElementById('final_modal');
const close_transaction = document.getElementById('close_transaction');





// modal 1 controls
openModalButton.addEventListener('click', () => {
  modalContainer.style.display = 'flex';
});

closeModalButton.addEventListener('click', () => {
  modalContainer.style.display = 'none';
});

nextModalButton.addEventListener('click', () => {
  modalContainer.style.display = 'none';
  modal2.style.display = 'flex'
})

// modal 2 controls
next_button.addEventListener('click', () => {
  modalContainer3.style.display = 'flex'
  modal2.style.display = 'none';

});

backModalButton.addEventListener('click', () => {
  modal2.style.display = 'none';
  modalContainer.style.display = 'flex';
});


// modal 3 controls
lastModalButton.addEventListener('click', () => {
  modalContainer3.style.display = 'none'
  modal2.style.display = 'flex';
})

create_modal.addEventListener('click', () => {
  modalContainer3.style.display = 'none';
  final_modal.style.display = 'flex'
})

close_transaction.addEventListener('click', () => {
  final_modal.style.display = "none "
})
