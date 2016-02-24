export class NameList {
  names = ['Bhagwati', 'Jatin', 'Apoorv', 'Rehan'];

  get(): string[] {
    return this.names;
  }
  add(value: string): void {
    this.names.push(value);
  }
  delete(value: number): void {
    this.names.splice(value,1);
  }
}
