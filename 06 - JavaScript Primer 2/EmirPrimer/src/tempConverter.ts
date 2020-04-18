export class TempConverter {
  static convertFtoC(temp: number | string): string {
    const value: number = (temp as number).toPrecision ? temp as number : parseFloat(temp as string);

    return ((parseFloat(value.toPrecision(2)) - 32) / 1.8).toFixed(1);
  }
}
