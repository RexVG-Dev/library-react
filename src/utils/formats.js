export const limitText = (text='', caracters=10) => {
  return `${text.toString().slice(0, caracters)}${text.length>caracters && ('...')}`;
};