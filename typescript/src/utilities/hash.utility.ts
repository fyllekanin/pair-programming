import bcrypt from 'bcrypt';

export class HashUtility {
    private static readonly SALT_ROUNDS = 10;

    static async hash (value: string): Promise<string> {
        return bcrypt.hash(value, HashUtility.SALT_ROUNDS);
    }

    static async compare (value: string, hash: string): Promise<boolean> {
        return await bcrypt.compare(value, hash);
    }
}
