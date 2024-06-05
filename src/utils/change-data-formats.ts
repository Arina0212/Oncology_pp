import dayjs from 'dayjs';

export const humanizeDate = (date: Date| string |undefined) => dayjs(date).format('DD.MM.YYYY');

export const getAltDate = (date: string | Date) => dayjs(date).format('YYYY-MM-DD');

export const getAltDateFor = (date: string | Date) => dayjs(date).format('MM.DD.YYYY');
