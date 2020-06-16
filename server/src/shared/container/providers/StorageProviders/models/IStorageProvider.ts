export interface IStoragedProvider {
  saveFile(file: string): Promise<string>;
  deleteFile(file: string): Promise<void>;
}
