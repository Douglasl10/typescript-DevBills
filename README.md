
---

## 🗂 BACKEND – `typescript-DevBills`  
**📍 Link do repositório:** https://github.com/Douglasl10/typescript-DevBills

```md
# 🧾 DevBills - Backend

Este é o backend da aplicação **DevBills**, uma API RESTful desenvolvida com Express e TypeScript para gerenciamento de contas. O backend oferece autenticação segura, endpoints protegidos e persistência de dados com PostgreSQL e Prisma ORM.

---

## 🚀 Tecnologias

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [JWT](https://jwt.io/)
- [Bcrypt](https://github.com/kelektiv/node.bcrypt.js)
- [Zod](https://github.com/colinhacks/zod)
- [Dotenv](https://www.npmjs.com/package/dotenv)

---

## ⚙️ Funcionalidades

- [x] Cadastro e autenticação de usuários
- [x] Criptografia de senhas com Bcrypt
- [x] Geração de tokens JWT
- [x] CRUD completo de contas
- [x] Validação robusta de dados (Zod)
- [x] Endpoints protegidos com middleware de autenticação
- [x] Integração com PostgreSQL via Prisma

---

## 🔧 Como rodar o projeto

```bash
# Clone o repositório
git clone https://github.com/Douglasl10/typescript-DevBills.git

# Acesse a pasta do projeto
cd typescript-DevBills

# Instale as dependências
npm install

# Configure o arquivo .env com as variáveis de ambiente
cp .env.example .env
# Edite o .env com sua URL do banco de dados PostgreSQL e JWT_SECRET

# Execute as migrations do banco de dados
npx prisma migrate dev

# Rode o servidor
npm run dev
