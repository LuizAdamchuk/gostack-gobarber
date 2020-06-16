interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export const mailConfig: IMailConfig = {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'emailConfiguradoDeSeuDominio@email.com',
      name: 'Nome de quem envia',
    },
  },
} as IMailConfig;
