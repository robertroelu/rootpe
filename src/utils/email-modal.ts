export const emailModal = () => {
  const button = document.querySelectorAll('[data-button="career"]') as NodeListOf<HTMLElement>;
  if (!button) return;

  const sendEmailButton = document.querySelector('[data-button="apply"]') as HTMLElement;
  if (!sendEmailButton) return;

  const childEmailButton = sendEmailButton.querySelector('a') as HTMLElement;
  if (!childEmailButton) return;

  const defaultEmail = childEmailButton.getAttribute('href');
  if (!defaultEmail) return;

  const titleModal = document.querySelector('[title-modal]') as HTMLElement;
  if (!titleModal) return;

  button.forEach((elBut) => {
    elBut.addEventListener('click', () => {
      const titleText = elBut.getAttribute('career-title');
      titleModal.textContent = titleText;
      const newEmail = defaultEmail + '?subject=' + titleText;
      childEmailButton.setAttribute('href', newEmail);
    });
  });
};
