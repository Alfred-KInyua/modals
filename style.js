const modal_buttons = document.querySelector('.modal_buttons');
const one = document.querySelectorAll('.one');
const modal = document.querySelector('.modal');
const close_modal = document.querySelector('.close_modal');
const overlay = document.querySelector('.overlay');

const closeModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < one.length; i++) {
  one[i].addEventListener('click', closeModal);
}

const addHidden = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

close_modal.addEventListener('click', addHidden);
overlay.addEventListener('click', addHidden);

document.addEventListener('keydown', (e) => {
  console.log(e.key);
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      addHidden();
    }
  }
});
