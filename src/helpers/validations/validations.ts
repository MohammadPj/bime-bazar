export const validateNationalCode = (code: string) => {
  if (code.length !== 10 || /(\d)(\1){9}/.test(code)) return "کدملی وارد شده معتبر نیست.";

  let sum = 0,
    chars = code.split(''),
    lastDigit,
    remainder;

  for (let i = 0; i < 9; i++) sum += +chars[i] * (10 - i);

  remainder = sum % 11;
  lastDigit = remainder < 2 ? remainder : 11 - remainder;

  return +chars[9] !== lastDigit ? "کدملی وارد شده معتبر نیست." : true;
};

export const validatePhoneNumber = (phone: string) => {
  return /^(09\d{9}|9\d{9})$/.test(phone) ? true : "شماره تلفن همراه معتبر نیست."
}