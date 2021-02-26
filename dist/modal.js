const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

let videos = {
  'python' : 'https://www.youtube.com/embed/NuTx6Q4151s'
}

// Events
// modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal(id) {
  let iframe = null;

  cards.forEach(card => {
    if(card.id==id)
      iframe=card.iframe;
  });

  console.log(iframe);
  $('.modal-body').html(iframe);
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
  $('.modal-body').html("");
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    $('.modal-body').html("");
    modal.style.display = 'none';
  }
}
