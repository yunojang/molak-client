export const useAuth = () => {
  // temp admin code
  const code = localStorage.getItem('m-sec-code');

  if (code === 'molak is the best')
    return {
      user: { role: 'ADMIN' },
    };
  // temp admin code

  return { user: null };
};
