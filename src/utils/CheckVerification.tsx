export const CheckVerification = () => {
  const isVerified = localStorage.getItem('isVerified');
  // console.log(isVerified);

  if (isVerified === 'false') return 0;
  else 1;
};
