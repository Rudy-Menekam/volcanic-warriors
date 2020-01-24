export class AppUtils {
  static isNullOrEmpty(s: string | any[]) {
    if (s == null) {
      return true;
    }
    if (typeof s === 'string') {
      return s === '';
    }

    return s.length === 0;
  }
}
