export type Application = {
  id: string;
  profile: {
    name: {
      value: string;
      updatedAt: string;
    };
    email: string;
    country: {
      submittedAt: string;
      createdAt: string;
      updatedAt: string;
    };
    id: string;
  };
  organization: {
    name: {
      value: string;
      updatedAt: string;
    };
    organizationSite: {
      value: string;
      updatedAt: string;
    };
    serviceSite: {
      value: string;
      updatedAt: string;
    };
    id: string;
  };
  application: {
    files: {
      fileName: string;
      url: string;
      updatedAt: string;
    }[];
    memo: {
      value: string;
      updatedAt: string;
    };
    serviceLaunch: {
      value: string;
      updatedAt: string;
    };
    achievement: {
      value: string;
      updatedAt: string;
    };
    achievementOfAbroad: {
      value: string;
      updatedAt: string;
    };
    haveEnglishSpeaker: {
      value: string;
      updatedAt: string;
    };
    round: {
      value: string;
      updatedAt: string;
    };
    capital: {
      value: string;
      updatedAt: string;
    };
    establishmentDate: {
      value: string;
      updatedAt: string;
    };
    selectionCondition: {
      value: string;
      updatedAt: string;
    };
  };
  submittedAt: string;
  createdAt: string;
  updatedAt: string;
};

export type ApplicationForTable = {
  id: string;
  name: string;
  email: string;
  country: string;
  selectionCondition: string;
  submittedAt: string;
  createdAt: string;
  updatedAt: string;
};
