import 'reflect-metadata';

import { AppError } from '@shared/errors/AppError';
import { FakeHashProvider } from '@modules/users/providers/HashProvider/fakes/FakeHashProvider';
import { FakeUsersRepository } from '@modules/users/repositories/Fakes/FakeUsersRespository';

import { UpdateProfileService } from './UpdateProfileService';

let fakeHashProvider: FakeHashProvider;
let fakeUserRepository: FakeUsersRepository;
let updateProfileService: UpdateProfileService;

describe('Update profile', () => {
  beforeEach(() => {
    fakeHashProvider = new FakeHashProvider();
    fakeUserRepository = new FakeUsersRepository();

    updateProfileService = new UpdateProfileService(
      fakeUserRepository,
      fakeHashProvider,
    );
  });

  it('should be able to update the profile', async () => {
    const user = await fakeUserRepository.create({
      name: 'John Doe',
      email: 'teste@teste.com',
      password: 'senha123',
    });

    const updatedUser = await updateProfileService.execute({
      user_id: user.id,
      name: 'John Trê',
      email: 'johntre@teste.com',
    });

    expect(updatedUser.name).toEqual('John Trê');
    expect(updatedUser.email).toEqual('johntre@teste.com');
  });

  it('should not be able to change an already in use email', async () => {
    await fakeUserRepository.create({
      name: 'John Doe',
      email: 'johndoe@teste.com',
      password: 'senha123',
    });

    const user = await fakeUserRepository.create({
      name: 'Test',
      email: 'teste@example.com',
      password: 'senha123',
    });

    await expect(
      updateProfileService.execute({
        user_id: user.id,
        name: 'Test',
        email: 'johndoe@teste.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to update the password', async () => {
    const user = await fakeUserRepository.create({
      name: 'John Doe',
      email: 'teste@teste.com',
      password: 'senha123',
    });

    const updatedUser = await updateProfileService.execute({
      user_id: user.id,
      name: 'John Trê',
      email: 'johntre@teste.com',
      old_password: 'senha123',
      password: '123123',
    });

    expect(updatedUser.password).toEqual('123123');
  });

  it('should not be able to update the password without pass the old password', async () => {
    const user = await fakeUserRepository.create({
      name: 'John Doe',
      email: 'teste@teste.com',
      password: 'senha123',
    });

    await expect(
      updateProfileService.execute({
        user_id: user.id,
        name: 'John Trê',
        email: 'johntre@teste.com',
        password: '123123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to update the password with wrong old password', async () => {
    const user = await fakeUserRepository.create({
      name: 'John Doe',
      email: 'teste@teste.com',
      password: 'senha123',
    });

    await expect(
      updateProfileService.execute({
        user_id: user.id,
        name: 'John Trê',
        email: 'johntre@teste.com',
        old_password: 'wrong-old-password',
        password: '123123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to update the profile from non-existing user', async () => {
    expect(
      updateProfileService.execute({
        user_id: 'non-existing-user-id',
        name: 'Test',
        email: 'teste@teste.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
