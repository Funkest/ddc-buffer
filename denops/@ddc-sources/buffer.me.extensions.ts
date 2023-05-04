export class BufferExtensions {
    private static readonly privateVersion: string = 'me.1';
    public static CreateLabel(fileName: string, bufnr: string): string { return '[' + this.privateVersion + ']' + '[' + bufnr + '] ' + fileName; }
}
