export const emailModal = () => {
  const button = document.querySelectorAll('[data-button="career"]') as NodeListOf<HTMLElement>;
  if (!button) return;

  const sendEmailButton = document.querySelector('[data-button="apply"]') as HTMLElement;
  if (!sendEmailButton) return;

  const childEmailButton = sendEmailButton.querySelector('a') as HTMLElement;
  if (!childEmailButton) return;

  // const defaultEmail = childEmailButton.getAttribute('href');
  // if (!defaultEmail) return;

  const titleModal = document.querySelector('[title-modal]') as HTMLElement;
  if (!titleModal) return;

  const tagModal = document.querySelector('[tag-modal]') as HTMLElement;
  if (!tagModal) return;

  button.forEach((elBut) => {
    elBut.addEventListener('click', () => {
      const titleText = elBut.getAttribute('career-title');
      const careerTag = elBut.getAttribute('career-tag');
      const careerLink = elBut.getAttribute('career-link');
      if (careerLink && careerTag) {
        childEmailButton.setAttribute('href', careerLink);
        tagModal.textContent = careerTag;
      }
      titleModal.textContent = titleText;
    });
  });
};
