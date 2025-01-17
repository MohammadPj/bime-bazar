export const validateNationalCode2 = (code: string) => {
  if (!/^\d{10}$/.test(code)) return "کد ملی باید 10 رقم باشد و فقط عدد باشد.";

  const checkDigit = parseInt(code[9], 10);
  const sum = code
    .split("")
    .slice(0, 9)
    .reduce((acc, digit, index) => acc + parseInt(digit, 10) * (10 - index), 0);

  const remainder = sum % 11;
    console.log('run')
  if ((remainder < 2 && checkDigit !== remainder) || (remainder >= 2 && checkDigit !== 11 - remainder)) {
    return "کدملی وارد شده معتبر نیست.";
  }
  return true;
};

export const validateNationalCode = code => {
  if (code.length !== 10 || /(\d)(\1){9}/.test(code)) return "کد ملی باید 10 رقم باشد و فقط عدد باشد.";

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