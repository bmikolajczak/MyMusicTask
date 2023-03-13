export interface IResponse {
  code: number;
  message: string;
}

export const checkIdInput = (idNumber: string) => {
  if (idNumber.length === 0) {
    return true;
  } else if (
    idNumber[idNumber.length - 1].includes('.') ||
    idNumber[idNumber.length - 1].includes(' ') ||
    idNumber[idNumber.length - 1].includes(',') ||
    idNumber[idNumber.length - 1].includes('-')
  ) {
    return false;
  } else {
    return true;
  }
};
