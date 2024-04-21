import dayjs from 'dayjs';

export const humanizeDate = (date: string|undefined) => dayjs(date).format('DD.MM.YYYY');

export const getAltDate = (date: string) => dayjs(date).format('YYYY-MM-DD');
