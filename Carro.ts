// ------------Classe Carro e os Metodos--------------------
export class Carro {
    
    // Atributos
    marca: string = "";
    modelo: string = "";
    cor: string = "";

    // Métodos
    ligar(): void {
        console.log("Carro ligado!");
    }

    desligar(): void {
        console.log("Carro desligado!");
    }

    acelerar(): void {
        console.log("Carro acelerando!");
    }

    frear(): void {
        console.log("Carro freando!");
    }
}