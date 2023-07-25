function password(length) {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const number = "0123456789";
  const special = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  const all = upper + lower + number + special;

  let pass = "";
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * all.length);
    pass += all[index];
  }

  return pass;
}

const passLength = 12;
console.log(password(passLength));
