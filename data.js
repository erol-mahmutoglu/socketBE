// Enums
const TYPE = {
  SUCCESS: 'SUCCESS',
  WARNING: 'WARNING',
  INFO: 'INFO',
  ERROR: 'ERROR',
};

const TARGET = {
  EMPLOYEE: 'employee',
  USER: 'user',
};

const SCREEN = {
  EMPLOYEE: {
    RESERVATIONS: 'reservations',
    SUITABILITY: 'suitability',
    APPROVE_RESERVATION: 'approveReservation',
  },
  USER: {
    HOME: 'home',
    APPOINTMENTS: 'appointmentsPanel',
    PAYMENTS: 'paymentsPanel',
    PROFILE: 'profile',
  },
};

// /notifications endpoint response
const notifications = [
  {
    id: '1',
    title: 'Onay bekleyen randevular',
    body: 'Onay bekleyen 1 randevun var.',
    data: {
      type: TYPE.SUCCESS,
      createdAt: '2023-10-20T00:12:00.000Z',
      navigate: {
        target: TARGET.EMPLOYEE,
        screen: SCREEN.EMPLOYEE.APPROVE_RESERVATION,
        params: {},
      },
    },
  },
  {
    id: '2',
    title: 'Uygunluk durumu',
    body: 'Uygunluk durumunu girmen gerekiyor.',
    data: {
      type: TYPE.WARNING,
      createdAt: '2023-10-23T00:12:00.000Z',
      navigate: {
        target: TARGET.EMPLOYEE,
        screen: SCREEN.EMPLOYEE.SUITABILITY,
        params: {},
      },
    },
  },
];

const userNotifications = [
  {
    id: '1',
    title: 'Onay bekleyen randevular',
    body: 'Onay bekleyen 1 randevun var.',
    data: {
      type: TYPE.SUCCESS,
      createdAt: '2023-10-20T00:12:00.000Z',
      navigate: {
        target: TARGET.USER,
        screen: SCREEN.USER.APPOINTMENTS,
        params: {},
      },
    },
  },
  {
    id: '2',
    title: 'Ödenmemiş faturalar',
    body: 'Ödenmemiş 1 faturan var.',
    data: {
      type: TYPE.WARNING,
      createdAt: '2023-10-23T00:12:00.000Z',
      navigate: {
        target: TARGET.USER,
        screen: SCREEN.USER.PAYMENTS,
        params: {},
      },
    },
  },
];

// /feed endpoint response
const feed = [
  {
    id: 1,
    title: 'Randevu Takibi',
    body: 'Bugün 1 randevun var.',
    data: {
      type: TYPE.INFO,
      createdAt: '2023-10-20T00:12:00.000Z',
    },
  },
  {
    id: 2,
    title: 'Ödeme Takibi',
    body: '2000₺ tutarında ödemen yapıldı.',
    data: {
      type: TYPE.SUCCESS,
      createdAt: '2023-10-20T00:12:00.000Z',
    },
  },
];

module.exports = {
  feed,
  notifications,
  userNotifications,
};
