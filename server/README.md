# Recuperação de senha

**Requisitos Funcionais - RF**

- O usuário deve poder recuperar sua senha informando seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**Requisitos Não Funcionais - RNF**

- Utilizar Mailtrap para testar envios em ambiente de desenvolvimento;
- Utilizar Amazon SES para envior em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**Regras de Negócio - RN**

- O link enviado por e-mail para resetar a senha deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar sua senha;

# Atualização de senha

**Requisitos Funcionais - RF**

- O usuário deve poder atualizar seu perfil(nome, e-mail e senha);

**Requisitos Não Funcionais - RNF**

**Regras de Negócio - RN**

- O usuário não pode alterar seu e-mail par aum e-mail já utilizado;
- Para atualizar sua senha o usuário deve informar a senha antiga;
- Para atualizar sua senha o usuário precisa confimrar a nova senha;

# Painel de prestaddor

**Requisitos Funcionais - RF**

- O usuário deve deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**Requisitos Não Funcionais - RNF**

- Os armazenamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador deve ser enviadas em tempo-real utilizando Socket-io;

**Regras de Negócio - RN**

- A notificação deve ter um status de lida/não-lida para que o prestador possa controlar;

# Agendamento de serviços

**Requisitos Funcionais - RF**

- O usuário deve poder listar todos os prestadores de serviço cadastrados;
- O usuário deve poder listart os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**Requisitos Não Funcionais - RNF**

- A listagem de prestadores deve ser armazenadas em cache;

**Regras de Negócio - RN**

- Cada agendamento deve durar 1h;
- Os agendamentos devem estar disponíveis entre as 8h às 18h(primeiro horário às 8h, último as 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar um serviço com ele mesmo;
