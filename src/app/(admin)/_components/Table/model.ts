import { useEffect, useState } from "react";

export interface Data {
  id: string;
  name: string;
  country: string;
  email: string;
  submittedAt: string;
  createdAt: string;
  updatedAt: string;
}

export const useModel = () => {
  const [selectedUserId, setSelectedUserId] = useState<string>("");

  const tableRows = userData.map((data): Data => {
    return {
      id: data.id,
      name: data.profile.name,
      email: data.profile.email,
      country:
        data.profile.country.submittedAt &&
        data.profile.country.createdAt &&
        data.profile.country.updatedAt,
      submittedAt: data.submittedAt,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };
  });

  const selectedUser = userData.find((data) => data.id === selectedUserId);

  const handleTableRowClick = (id: string) => {
    setSelectedUserId(id);
  };

  useEffect(() => {
    const abortController = new AbortController();

    window.document.addEventListener(
      "click",
      (e) => {
        if (
          e.target instanceof HTMLElement &&
          !e.target.closest(".detailTarget")
        ) {
          setSelectedUserId("");
        }
      },
      { signal: abortController.signal }
    );

    return () => abortController.abort();
  }, []);

  return {
    selectedUser,
    userData,
    tableRows,
    handleTableRowClick,
  };
};

export const userData = [
  {
    id: "1",
    profile: {
      name: "John",
      email: "example@example.com",
      country: {
        submittedAt: "Japan",
        createdAt: "Japan",
        updatedAt: "Japan",
      },
      id: "36b8f84d-df4e-4d49-b662-bcde71a8764f",
    },
    organization: {
      name: "株式会社A",
      organizationSite: "https://example.com",
      serviceSite: "https://example.com",
      id: "36b8f84d-df4e-4d49-b662-bcde71a8764f",
    },
    application: {
      files: [
        {
          fileName: "提案1.pdf",
          url: "https://example.com",
        },
        {
          fileName: "提案2.pdf",
          url: "https://example.com",
        },
        {
          fileName: "提案3.pdf",
          url: "https://example.com",
        },
      ],
      memo: "これはメモです。これはメモです。これはメモです。これはメモです。これはメモです。これはメモです。これはメモです。これはメモです。これはメモです。",
    },
    submittedAt: "2024-01-01T00:00:01",
    createdAt: "2024-01-01T00:00:01",
    updatedAt: "2024-01-01T00:00:01",
  },
  {
    id: "2",
    profile: {
      name: "Doe",
      email: "example@example.com",
      country: {
        submittedAt: "USA",
        createdAt: "Japan",
        updatedAt: "South Korea",
      },
      id: "36b8f84d-df4e-4d49-b662-bcde71a8764f",
    },
    organization: {
      name: "株式会社AB",
      organizationSite: "https://example.com",
      serviceSite: "https://example.com",
      id: "36b8f84d-df4e-4d49-b662-bcde71a8764f",
    },
    application: {
      files: [
        {
          fileName: "提案1.pdf",
          url: "https://example.com",
        },
        {
          fileName: "提案2.pdf",
          url: "https://example.com",
        },
        {
          fileName: "提案3.pdf",
          url: "https://example.com",
        },
      ],
      memo: "これはメモです。これはメモです。これはメモです。これはメモです。これはメモです。これはメモです。これはメモです。これはメモです。これはメモです。",
    },
    submittedAt: "2024-01-01T00:00:02",
    createdAt: "2024-01-01T00:00:02",
    updatedAt: "2024-01-01T00:00:02",
  },
  {
    id: "3",
    profile: {
      name: "Jane",
      email: "example@example.com",
      country: {
        submittedAt: "Japan",
        createdAt: "Taiwan",
        updatedAt: "Japan",
      },
      id: "36b8f84d-df4e-4d49-b662-bcde71a8764f",
    },
    organization: {
      name: "株式会社AC",
      organizationSite: "https://example.com",
      serviceSite: "https://example.com",
      id: "36b8f84d-df4e-4d49-b662-bcde71a8764f",
    },
    application: {
      files: [
        {
          fileName: "提案1.pdf",
          url: "https://example.com",
        },
        {
          fileName: "提案2.pdf",
          url: "https://example.com",
        },
        {
          fileName: "提案3.pdf",
          url: "https://example.com",
        },
      ],
      memo: "これはメモです。これはメモです。これはメモです。これはメモです。これはメモです。これはメモです。これはメモです。これはメモです。これはメモです。",
    },
    submittedAt: "2024-01-01T00:00:01",
    createdAt: "2024-01-01T00:00:01",
    updatedAt: "2024-01-01T00:00:01",
  },
  {
    id: "4",
    profile: {
      name: "Smith",
      email: "example@example.com",
      country: {
        submittedAt: "South Korea",
        createdAt: "Japan",
        updatedAt: "Japan",
      },
      id: "36b8f84d-df4e-4d49-b662-bcde71a8764f",
    },
    organization: {
      name: "株式会社AA",
      organizationSite: "https://example.com",
      serviceSite: "https://example.com",
      id: "36b8f84d-df4e-4d49-b662-bcde71a8764f",
    },
    application: {
      files: [
        {
          fileName: "提案1.pdf",
          url: "https://example.com",
        },
        {
          fileName: "提案2.pdf",
          url: "https://example.com",
        },
        {
          fileName: "提案3.pdf",
          url: "https://example.com",
        },
      ],
      memo: "これはメモです。これはメモです。これはメモです。これはメモです。これはメモです。これはメモです。これはメモです。これはメモです。これはメモです。",
    },
    submittedAt: "2024-01-01T00:00:01",
    createdAt: "2024-01-01T00:00:01",
    updatedAt: "2024-01-01T00:00:01",
  },
];
