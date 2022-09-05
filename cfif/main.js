const classFoto2 = document.querySelector('.first')
const clicer = document.querySelector('.btn')
clicer.addEventListener('click', function () {
  console.log('Button clicked');
  classFoto2.classList.remove('first')
  classFoto2.classList.add('clicked')
})