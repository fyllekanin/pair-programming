
export class ValueUtility {
    static readonly EMAIL_REGEX = /^[^\s@]+@[^\s@]+$/;

    static isEmail(value: string): boolean {
        return ValueUtility.EMAIL_REGEX.test(value);
    }
}
