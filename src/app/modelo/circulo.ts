import { FiguraGeometrica } from './figura_geometrica';

export class Circulo extends FiguraGeometrica {
  constructor(public radio: number) {
    super('Círculo');
  }

  calcularPerimetro(): number {
    return 2 * Math.PI * this.radio;
  }
}