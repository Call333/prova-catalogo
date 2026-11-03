import { prisma } from '../config/database.js';

// REPOSITÓRIO de Produto — a ÚNICA camada que conversa com o Prisma.
// Implemente:
//   - listar todos (IMPORTANTE: traga junto a categoria de cada produto, para a
//     listagem conseguir mostrar o nome dela — pense em como o Prisma inclui
//     dados relacionados);
//   - criar um produto (guardando a referência para a categoria).
// Dica: use `prisma.produto.*`. Tudo é assíncrono.
export class ProdutosRepositoryPrisma {
  // TODO: implemente os métodos descritos acima.

  async findAll() {
    return await this.prisma.produto.findAll(
      { include: prisma.categoria }
    );
  }

  async findById() {
    return await this.prisma.produto.findById(
      { include: prisma.categoria }
    );
  }

  async create(dados) {
    return await this.prisma.produto.create({
      nome: dados.nome,
      preco: dados.preco,
      categoria: dados.categoria
    });
  }
}
