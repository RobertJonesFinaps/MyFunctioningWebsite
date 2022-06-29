export function sharedUtils(): string {
  return 'shared-utils';
}

export function buildParameters(obj: any): string {
  return Object.keys(obj)
    .map((el) => {
      if (!obj[el]) {
        return '';
      }
      return `${el}=${obj[el]}`;
    })
    .filter((el) => el !== '')
    .join('&');
}
