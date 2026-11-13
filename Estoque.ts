let produtos: string[] = [];

let Apagados_Atualizados: string[] = [];

export class Estoque {

    listarProdutos(): void {
        console.log("\nPRODUTOS CADASTRADOS");
        for (let i = 0; i < produtos.length; i++) {
            console.log((i + 1) + " - " + produtos[i]);
        }
        if (produtos.length === 0) {
            console.log("Nenhum produto cadastrado!");

        }
    }

    cadastrarProduto(nome: string): void {
        produtos.push(nome);
        console.log("Produto cadastrado!");
    }

    atualizarProduto(numero: number, novoNome: string): void {

        if (numero >= 1 && numero <= produtos.length) {
            Apagados_Atualizados.push(produtos[numero - 1]);

            
            produtos[numero - 1] = novoNome;
            console.log("Produto atualizado!");

        } else {

            console.log("Produto não encontrado!");

        }
    }

    excluirProduto(numero: number): void {

        if (numero >= 1 && numero <= produtos.length) {
            produtos.splice(numero - 1, 1);
            console.log("Produto excluído!");
        } else {
            console.log("Produto não encontrado!");

        }
    }

    listarHistorico(): void {

        console.log("\nHISTÓRICO DE PRODUTOS ATUALIZADOS");
        for (let i = 0; i < Apagados_Atualizados.length; i++) {
            console.log((i + 1) + " - " + Apagados_Atualizados[i]);
        }
        if (Apagados_Atualizados.length === 0) {
            console.log("Nenhum produto foi atualizado!");
        }
    }
}
