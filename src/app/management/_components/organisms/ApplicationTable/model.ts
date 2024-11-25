import {
  Application,
  ApplicationForTable,
} from "@/app/management/_domain/application";
import { useEffect, useState } from "react";

type Props = {
  applicationList: Application[];
};

export const useModel = ({ applicationList }: Props) => {
  const [applicationId, setApplicationId] = useState<string>("");

  const tableRows = applicationList.map((data): ApplicationForTable => {
    return {
      id: data.id,
      name: data.profile.name.value,
      email: data.profile.email,
      country:
        data.profile.country.submittedAt &&
        data.profile.country.createdAt &&
        data.profile.country.updatedAt,
      selectionCondition: data.application.selectionCondition.value,
      submittedAt: data.submittedAt,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };
  });

  const selectedApplication = applicationList.find(
    (data) => data.id === applicationId
  );

  const handleTableRowClick = (id: string) => {
    setApplicationId(id);
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
          setApplicationId("");
        }
      },
      { signal: abortController.signal }
    );

    return () => abortController.abort();
  }, []);

  return {
    HEAD_CELLS,
    selectedApplication,
    tableRows,
    handleTableRowClick,
  };
};

interface HeadCell {
  id: keyof ApplicationForTable;
  label: string;
  numeric: boolean;
}

const HEAD_CELLS: readonly HeadCell[] = [
  {
    id: "name",
    numeric: false,
    label: "名前",
  },
  {
    id: "email",
    numeric: false,
    label: "Email",
  },
  {
    id: "country",
    numeric: false,
    label: "国",
  },
  {
    id: "selectionCondition",
    numeric: false,
    label: "選考状態",
  },
  {
    id: "submittedAt",
    numeric: false,
    label: "受付日時",
  },
  {
    id: "createdAt",
    numeric: false,
    label: "提出日時",
  },
  {
    id: "updatedAt",
    numeric: false,
    label: "更新日時",
  },
];
