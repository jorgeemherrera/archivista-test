import { format } from 'date-fns';

export const formatDate = (date) => {
  const dateFormatted = format(new Date(date), 'dd/MM/yyyy', { awareOfUnicodeTokens: true });
  return dateFormatted;
};
