import { format, parseISO } from 'date-fns';
import { pt } from 'date-fns/locale';

const formatDate = (date: string): string => {
  const parsedDate = parseISO(date);
  const formattedDate = format(parsedDate, "dd 'de' MMMM 'de' yyyy", {
    locale: pt,
  });
  return formattedDate;
};
export default formatDate;
