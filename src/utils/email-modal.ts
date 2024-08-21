export const emailModal = () => {
  const button = document.querySelectorAll('[data-button="career"]') as NodeListOf<HTMLElement>;
  const sendEmailButton = document.querySelector('[data-button="apply"]') as HTMLElement;
  const childEmailButton = sendEmailButton.querySelector('a') as HTMLElement;
  const defaultEmail = childEmailButton.getAttribute('href');
  const titleModal = document.querySelector('[title-modal]') as HTMLElement;

  button.forEach((elBut) => {
    elBut.addEventListener('click', () => {
      const titleText = elBut.getAttribute('career-title');
      titleModal.textContent = titleText;
      const newEmail = defaultEmail + '?subject=' + titleText;
      childEmailButton.setAttribute('href', newEmail);
    });
  });
};
