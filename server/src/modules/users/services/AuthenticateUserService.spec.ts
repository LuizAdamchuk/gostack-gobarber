import 'reflect-metadata';

import { AppError } from '@shared/errors/AppError';
import { AuthenticateUserService } from './AuthenticateUserService';
import { FakeUsersRepository } from '@modules/users/repositories/Fakes/FakeUsersRespository';
import { FakeHashProvider } from '@modules/users/providers/HashProvider/fakes/FakeHashProvider';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let authenticateUser: AuthenticateUserService;

describe('AuthenticateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    authenticateUser = new AuthenticateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });

  it('should be able to authenticate', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'teste@teste.com',
      password: 'senha123',
    });

    const response = await authenticateUser.execute({
      email: 'teste@teste.com',
      password: 'senha123',
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });

  it('should not be able to authenticate with non existing user', async () => {
    await expect(
      authenticateUser.execute({
        email: 'teste@teste.com',
        password: 'senha123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate with wrong password', async () => {
    await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'teste@teste.com',
      password: 'senha123',
    });

    await expect(
      authenticateUser.execute({
        email: 'teste@teste.com',
        password: 'wrong-password',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
