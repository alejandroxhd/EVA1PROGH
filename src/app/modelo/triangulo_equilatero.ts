import { TrianguloEscaleno } from './triangulo_escaleno';

export class TrianguloEquilatero extends TrianguloEscaleno {
  constructor(lado: number) {
    super(lado, lado, lado);
    this.nombre = 'Triángulo Equilátero';
  }
}