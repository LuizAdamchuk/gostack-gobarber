import 'reflect-metadata';

// import { AppError } from '@shared/errors/AppError';
import { FakeAppointmentsRepository } from '@modules/appointments/repositories/Fakes/FakeAppointmentsRespository';
import { ListProviderDayAvailabilityService } from './ListProviderDayAvailabilityService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let listProviderDayAvailabilityService: ListProviderDayAvailabilityService;

describe('List the houres availables in day of providers', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();

    listProviderDayAvailabilityService = new ListProviderDayAvailabilityService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to list the availables hours in day from provider', async () => {
    // const completeDayWork = [];

    // for (let index = 8; index < 18; index++) {
    //   completeDayWork.push(
    //     await fakeAppointmentsRepository.create({
    //       provider_id: 'user',
    //       date: new Date(2020, 4, 20, index, 0, 0),
    //     }),
    //   );
    // }

    // console.log(completeDayWork);
    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: '123132',
      date: new Date(2020, 4, 23, 14, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: '123132',
      date: new Date(2020, 4, 23, 15, 0, 0),
    });

    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 4, 23, 11).getTime();
    });

    const availability = await listProviderDayAvailabilityService.execute({
      provider_id: 'user',
      year: 2020,
      month: 5,
      day: 23,
    });

    expect(availability).toEqual(
      expect.arrayContaining([
        { hour: 8, available: false },
        { hour: 9, available: false },
        { hour: 10, available: false },
        { hour: 13, available: true },
        { hour: 14, available: false },
        { hour: 15, available: false },
        { hour: 16, available: true },
      ]),
    );
  });
});
