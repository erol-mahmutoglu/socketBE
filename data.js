// Enums
const typeEnums = {
  SUCCESS: 'SUCCESS',
  WARNING: 'WARNING',
  INFO: 'INFO',
  ERROR: 'ERROR',
};

const targetEnums = {
  EMPLOYEE: 'employee',
  USER: 'user',
};

const screenEnums = {
  EMPLOYEE: {
    APPROVE_RESERVATION: 'approveReservation',
    SUITABILITY: 'suitability',
  },
};

// /notifications endpoint response
const notifications = [
  {
    id: '1',
    title: 'Onay bekleyen randevular',
    body: 'Onay bekleyen 1 randevun var.',
    data: {
      type: typeEnums.SUCCESS,
      createdAt: '2023-10-20T00:12:00.000Z',
      navigate: {
        target: targetEnums.EMPLOYEE,
        screen: screenEnums.EMPLOYEE.APPROVE_RESERVATION,
        params: {},
      },
    },
  },
  {
    id: '2',
    title: 'Uygunluk durumu',
    body: 'Uygunluk durumunu girmen gerekiyor.',
    data: {
      type: typeEnums.WARNING,
      createdAt: '2023-10-23T00:12:00.000Z',
      navigate: {
        target: targetEnums.EMPLOYEE,
        screen: screenEnums.EMPLOYEE.SUITABILITY,
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
      type: typeEnums.INFO,
      createdAt: '2023-10-20T00:12:00.000Z',
    },
  },
  {
    id: 2,
    title: 'Ödeme Takibi',
    body: '2000₺ tutarında ödemen yapıldı.',
    data: {
      type: typeEnums.SUCCESS,
      createdAt: '2023-10-20T00:12:00.000Z',
    },
  },
];

module.exports = {
  feed,
  notifications,
};
