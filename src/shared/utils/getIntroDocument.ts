import { introductionDoc } from "../consts/consts";

export const getIntroDocumentFromLS = () => {
  return (
    JSON.parse(localStorage.getItem("introductionDoc") || '""') ||
    introductionDoc
  );
};
