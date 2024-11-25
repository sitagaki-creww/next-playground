import { Application } from "@/app/management/_domain/application";

export const useModel = () => {
  const applicationList: Application[] = [
    {
      id: "1",
      profile: {
        name: { value: "John", updatedAt: "2024-01-01T00:00:00" },
        email: "example@example.com",
        country: {
          submittedAt: "Japan",
          createdAt: "Japan",
          updatedAt: "Japan",
        },
        id: "36b8f84d-df4e-4d49-b662-bcde71a8764f",
      },
      organization: {
        name: {
          value: "ABC株式会社",
          updatedAt: "2024-01-01T00:00:00",
        },
        organizationSite: {
          value: "https://example.com",
          updatedAt: "2024-01-01T00:00:00",
        },
        serviceSite: {
          value: "https://example.com",
          updatedAt: "2024-01-01T00:00:00",
        },
        id: "36b8f84d-df4e-4d49-b662-bcde71a8764f",
      },
      application: {
        files: [
          {
            fileName: "提案1.pdf",
            url: "https://example.com",
            updatedAt: "2024-01-01T00:00:00",
          },
          {
            fileName: "提案2.pdf",
            url: "https://example.com",
            updatedAt: "2024-01-01T00:00:00",
          },
          {
            fileName: "提案3.pdf",
            url: "https://example.com",
            updatedAt: "2024-01-01T00:00:00",
          },
        ],
        memo: {
          value:
            "This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple!",
          updatedAt: "2024-01-01T00:00:00",
        },
        serviceLaunch: {
          value:
            "This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen!",
          updatedAt: "2024-01-01T00:00:00",
        },
        achievement: {
          value:
            "This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana!",
          updatedAt: "2024-01-01T00:00:00",
        },
        achievementOfAbroad: {
          value:
            "This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato!",
          updatedAt: "2024-01-01T00:00:00",
        },
        haveEnglishSpeaker: {
          value:
            "This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop!",
          updatedAt: "2024-01-01T00:00:00",
        },
        round: {
          value: "シード",
          updatedAt: "2024-01-01T00:00:00",
        },
        capital: {
          value: "1000万円",
          updatedAt: "2024-01-01T00:00:00",
        },
        establishmentDate: {
          value: "2024-01-01",
          updatedAt: "2024-01-01T00:00:00",
        },
        selectionCondition: {
          value: "1次選考通過",
          updatedAt: "2024-01-01T00:00:00",
        },
      },
      submittedAt: "2024-01-01T00:00:01",
      createdAt: "2024-01-01T00:00:01",
      updatedAt: "2024-01-01T00:00:01",
    },
    {
      id: "2",
      profile: {
        name: {
          value: "Doe",
          updatedAt: "2024-01-01T00:00:00",
        },
        email: "example@example.com",
        country: {
          submittedAt: "USA",
          createdAt: "Japan",
          updatedAt: "South Korea",
        },
        id: "36b8f84d-df4e-4d49-b662-bcde71a8764f",
      },
      organization: {
        name: {
          value: "株式会社AB",
          updatedAt: "2024-01-01T00:00:00",
        },
        organizationSite: {
          value: "https://example.com",
          updatedAt: "2024-01-01T00:00:00",
        },
        serviceSite: {
          value: "https://example.com",
          updatedAt: "2024-01-01T00:00:00",
        },
        id: "36b8f84d-df4e-4d49-b662-bcde71a8764f",
      },
      application: {
        files: [
          {
            fileName: "提案1.pdf",
            url: "https://example.com",
            updatedAt: "2024-01-01T00:00:00",
          },
          {
            fileName: "提案2.pdf",
            url: "https://example.com",
            updatedAt: "2024-01-01T00:00:00",
          },
          {
            fileName: "提案3.pdf",
            url: "https://example.com",
            updatedAt: "2024-01-01T00:00:00",
          },
        ],
        memo: {
          value:
            "This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple!",
          updatedAt: "2024-01-01T00:00:00",
        },
        serviceLaunch: {
          value:
            "This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen!",
          updatedAt: "2024-01-01T00:00:00",
        },
        achievement: {
          value:
            "This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana!",
          updatedAt: "2024-01-01T00:00:00",
        },
        achievementOfAbroad: {
          value:
            "This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato!",
          updatedAt: "2024-01-01T00:00:00",
        },
        haveEnglishSpeaker: {
          value:
            "This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop!",
          updatedAt: "2024-01-01T00:00:00",
        },
        round: {
          value: "シード",
          updatedAt: "2024-01-01T00:00:00",
        },
        capital: {
          value: "1000万円",
          updatedAt: "2024-01-01T00:00:00",
        },
        establishmentDate: {
          value: "2024-01-01",
          updatedAt: "2024-01-01T00:00:00",
        },
        selectionCondition: {
          value: "1次選考通過",
          updatedAt: "2024-01-01T00:00:00",
        },
      },
      submittedAt: "2024-01-01T00:00:02",
      createdAt: "2024-01-01T00:00:02",
      updatedAt: "2024-01-01T00:00:02",
    },
    {
      id: "3",
      profile: {
        name: {
          value: "Jane",
          updatedAt: "2024-01-01T00:00:00",
        },
        email: "example@example.com",
        country: {
          submittedAt: "Japan",
          createdAt: "Taiwan",
          updatedAt: "Japan",
        },
        id: "36b8f84d-df4e-4d49-b662-bcde71a8764f",
      },
      organization: {
        name: {
          value: "株式会社AC",
          updatedAt: "2024-01-01T00:00:00",
        },
        organizationSite: {
          value: "https://example.com",
          updatedAt: "2024-01-01T00:00:00",
        },
        serviceSite: {
          value: "https://example.com",
          updatedAt: "2024-01-01T00:00:00",
        },
        id: "36b8f84d-df4e-4d49-b662-bcde71a8764f",
      },
      application: {
        files: [
          {
            fileName: "提案1.pdf",
            url: "https://example.com",
            updatedAt: "2024-01-01T00:00:00",
          },
          {
            fileName: "提案2.pdf",
            url: "https://example.com",
            updatedAt: "2024-01-01T00:00:00",
          },
          {
            fileName: "提案3.pdf",
            url: "https://example.com",
            updatedAt: "2024-01-01T00:00:00",
          },
        ],
        memo: {
          value:
            "This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple!",
          updatedAt: "2024-01-01T00:00:00",
        },
        serviceLaunch: {
          value:
            "This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen!",
          updatedAt: "2024-01-01T00:00:00",
        },
        achievement: {
          value:
            "This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana!",
          updatedAt: "2024-01-01T00:00:00",
        },
        achievementOfAbroad: {
          value:
            "This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato!",
          updatedAt: "2024-01-01T00:00:00",
        },
        haveEnglishSpeaker: {
          value:
            "This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop!",
          updatedAt: "2024-01-01T00:00:00",
        },
        round: {
          value: "シード",
          updatedAt: "2024-01-01T00:00:00",
        },
        capital: {
          value: "1000万円",
          updatedAt: "2024-01-01T00:00:00",
        },
        establishmentDate: {
          value: "2024-01-01",
          updatedAt: "2024-01-01T00:00:00",
        },
        selectionCondition: {
          value: "2次選考通過",
          updatedAt: "2024-01-01T00:00:00",
        },
      },
      submittedAt: "2024-01-01T00:00:01",
      createdAt: "2024-01-01T00:00:01",
      updatedAt: "2024-01-01T00:00:01",
    },
    {
      id: "4",
      profile: {
        name: {
          value: "Smith",
          updatedAt: "2024-01-01T00:00:00",
        },
        email: "example@example.com",
        country: {
          submittedAt: "South Korea",
          createdAt: "Japan",
          updatedAt: "Japan",
        },
        id: "36b8f84d-df4e-4d49-b662-bcde71a8764f",
      },
      organization: {
        name: {
          value: "株式会社AA",
          updatedAt: "2024-01-01T00:00:00",
        },
        organizationSite: {
          value: "https://example.com",
          updatedAt: "2024-01-01T00:00:00",
        },
        serviceSite: {
          value: "https://example.com",
          updatedAt: "2024-01-01T00:00:00",
        },
        id: "36b8f84d-df4e-4d49-b662-bcde71a8764f",
      },
      application: {
        files: [
          {
            fileName: "提案1.pdf",
            url: "https://example.com",
            updatedAt: "2024-01-01T00:00:00",
          },
          {
            fileName: "提案2.pdf",
            url: "https://example.com",
            updatedAt: "2024-01-01T00:00:00",
          },
          {
            fileName: "提案3.pdf",
            url: "https://example.com",
            updatedAt: "2024-01-01T00:00:00",
          },
        ],
        memo: {
          value:
            "This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple! This is an apple!",
          updatedAt: "2024-01-01T00:00:00",
        },
        serviceLaunch: {
          value:
            "This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen! This is a pen!",
          updatedAt: "2024-01-01T00:00:00",
        },
        achievement: {
          value:
            "This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana! This is a banana!",
          updatedAt: "2024-01-01T00:00:00",
        },
        achievementOfAbroad: {
          value:
            "This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato! This is a tomato!",
          updatedAt: "2024-01-01T00:00:00",
        },
        haveEnglishSpeaker: {
          value:
            "This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop! This is a laptop!",
          updatedAt: "2024-01-01T00:00:00",
        },
        round: {
          value: "シード",
          updatedAt: "2024-01-01T00:00:00",
        },
        capital: {
          value: "1000万円",
          updatedAt: "2024-01-01T00:00:00",
        },
        establishmentDate: {
          value: "2024-01-01",
          updatedAt: "2024-01-01T00:00:00",
        },
        selectionCondition: {
          value: "未設定",
          updatedAt: "2024-01-01T00:00:00",
        },
      },
      submittedAt: "2024-01-01T00:00:01",
      createdAt: "2024-01-01T00:00:01",
      updatedAt: "2024-01-01T00:00:01",
    },
  ];

  return { applicationList };
};
