const hamburguer = document.querySelector(".menu-hamburguer");
const modalBtn = document.querySelector(".modal-btn");
const mainSection = document.querySelector(".main-section");
const navigation = document.querySelector(".navigation");
const modal = document.querySelector(".modal");
const header = document.querySelector("header");
const modalBox = document.querySelector("#modal-box");
const form = document.querySelector("form");
const confirmationPopup = document.querySelector(".confirmation");
const spanModal = document.querySelector(".span-modal");

hamburguer.addEventListener("click", () => {
  const closeIcon = document.querySelector(".close-menu");
  const openIcon = document.querySelector(".open-menu");

  navigation.classList.toggle("sr-only");
  mainSection.classList.toggle("sr-only");

  closeIcon.classList.toggle("sr-only");
  openIcon.classList.toggle("sr-only");
});

function openModal() {
  modal.classList.toggle("hidden");
  mainSection.classList.add("opacity-20");
  header.classList.add("opacity-20");
  modalBtn.disabled = true;
  modalBtn.classList.remove('hover:bg-button')
}

function closeModal() {
  modal.classList.toggle("hidden");
  mainSection.classList.remove("opacity-20");
  header.classList.remove("opacity-20");
  confirmationPopup.classList.add("hidden");
  form.classList.remove("hidden");
  spanModal.classList.remove("hidden");
  confirmationStatus.innerHTML = "";
  modalBtn.disabled = false;
  modalBtn.classList.add('hover:bg-button')
  error.classList.add('hidden')
}

const confirmationStatus = document.querySelector(".confirmation-status");
const personName = document.querySelector("#name");
const street = document.querySelector("#street");
const number = document.querySelector("#number");
const complement = document.querySelector("#complement");

const error = document.getElementById("input-error");

const validateInputs = () => {
  if (personName.value == "" || number.value == ""|| street.value == "" ||complement.value == "") {
    error.classList.remove('hidden')
  } else {
    successfullValidation()
  }
}

function handleSubmitForm(event) {
  event.preventDefault();

  validateInputs()
}

function successfullValidation() {
  confirmationPopup.classList.toggle("hidden");
  form.classList.toggle("hidden");
  spanModal.classList.toggle("hidden");
  error.classList.add('hidden')

  confirmationStatus.innerHTML += `
  <h1 class="text-text-color text-center mt-4 text-xl"> Olá <span class="font-extrabold"> ${personName.value}.  </span> </h1>
  <p class="text-text-color text-center mt-2"> Seu pedido saiu para entrega no endereço <strong> ${street.value}</strong>, <strong>${number.value} </strong>, <strong> ${complement.value} </strong> e chegará em breve.
  </p>
  
  `;

  personName.value = ''
  street.value = ''
  number.value = ''
  complement.value = ''
}

