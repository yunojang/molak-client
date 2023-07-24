import { same } from '../func';

const MIN = 1000 * 60;
const HOUR = MIN * 60;
const DAY = HOUR * 24;
const WEEK = DAY * 7;
const MONTH = DAY * 31;
const YEAR = DAY * 365;

export const createdAt = (create: Date | string): string => {
  if (typeof create === 'string') {
    create = new Date(create);
  }

  const now = new Date();
  const diff = +now - +create;

  if (diff < MIN) {
    return '방금 전';
  }

  if (diff < HOUR) {
    const min = Math.floor(diff / MIN);
    return `${min}분 전`;
  }

  if (diff < DAY) {
    const hour = Math.floor(diff / HOUR);
    return `${hour}시간 전`;
  }

  if (diff < WEEK) {
    const day = Math.floor(diff / DAY);
    return `${day}일 전`;
  }

  if (diff < MONTH) {
    const week = Math.floor(diff / WEEK);
    return `${week}주 전`;
  }

  if (diff < YEAR) {
    const month = Math.floor(diff / MONTH);
    return `${month}개월 전`;
  }

  const year = Math.floor(diff / YEAR);

  if (year > 15) {
    return '오래 전';
  }

  return `${year}년 전`;

  // return '오래 전';
};

export const stringyDate = (dateInput: string) => {
  return Math.floor(new Date(dateInput).getTime() / 1000).toString();
};

export const formatDate = (
  date: Date | string,
  format = 'YYYY/MM/DD HH:mm:ss',
) => {
  if (typeof date === 'string') {
    date = new Date(date);
  }

  return format
    .replace('YYYY', String(date.getFullYear()))
    .replace('YY', String(date.getFullYear()).slice(2, 4))
    .replace('MM', String(date.getMonth() + 1).padStart(2, '0'))
    .replace('DD', String(date.getDate()).padStart(2, '0'))
    .replace('HH', String(date.getHours()).padStart(2, '0'))
    .replace('mm', String(date.getMinutes()).padStart(2, '0'))
    .replace('ss', String(date.getSeconds()).padStart(2, '0'));
};

export const secToUnits = (sec: number) => {
  const ms = sec * 1000;

  if (ms / HOUR > 1) {
    return `${Math.floor(ms / HOUR)}H`;
  } else if (ms / MIN > 1) {
    return `${Math.floor(ms / MIN)}M`;
  } else {
    return `${sec}S`;
  }
};

export const formatTime = (secNum: number, format = 'HH:mm:ss') => {
  const ms = secNum * 1000;
  const hour = Math.floor(ms / HOUR);
  const min = Math.floor((ms - hour * HOUR) / MIN);
  const sec = secNum - hour * 3600 - min * 60;

  return format
    .replace('HH', hour.toString().padStart(2, '0'))
    .replace('mm', min.toString().padStart(2, '0'))
    .replace('ss', sec.toString().padStart(2, '0'));
};

const dateIsValid = (date: string | Date | number) => {
  return !isNaN(new Date(date).getTime());
};

export const formatIso = (date: string | number | Date): string => {
  if (!dateIsValid(date)) {
    return '';
  }

  return new Date(date).toISOString().slice(0, 10);
};

export * from './money';
