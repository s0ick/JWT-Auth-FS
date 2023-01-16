import {IErrors} from '../types/models';

export const uuid = (): string => {
  const mask = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
  let dt = new Date().getTime();

  return mask.replace(/[xy]/g, c => {
    const r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
};

export const formatErrorsArray = (errors: Array<IErrors>): Array<string> | string => {
  if (errors.length === 1) {
    return errors[0].msg
  }

  const messages: Array<string> = [];
  errors.forEach(e => messages.push(e.msg));
  return messages;
};

export const range = (num: number) => {
  let result = [];

  for (let i = 0; i < num; i++) {
    result.push(i);
  }

  return result;
}
