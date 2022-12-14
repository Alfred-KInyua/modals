const one = document.querySelectorAll('.one');
const modal = document.querySelector('.modal');
const modal_close = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const openMOdal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for (let i = 0; i < one.length; i++) {
  one[i].addEventListener('click', openMOdal);
}
modal_close.addEventListener('click', () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
const close = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
modal_close.addEventListener('click', close);
overlay.addEventListener('click', close);
