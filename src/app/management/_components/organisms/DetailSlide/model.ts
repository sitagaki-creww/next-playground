import { ChangeEvent, ChangeEventHandler, useState } from "react";

export const useModel = () => {
  const [isMemoExpanded, setIsMemoExpanded] = useState<boolean>(false);
  const [isServiceLaunchExpanded, setIsServiceLaunchExpanded] =
    useState<boolean>(false);
  const [isAchievementExpanded, setIsAchievementExpanded] =
    useState<boolean>(false);
  const [isAchievementOfAbroadExpanded, setIsAchievementOfAbroadExpanded] =
    useState<boolean>(false);
  const [isHaveEnglishSpeakerExpanded, setIsHaveEnglishSpeakerExpanded] =
    useState<boolean>(false);

  const handleExpandEvent = (
    type:
      | "memo"
      | "serviceLaunch"
      | "achievement"
      | "achievementOfAbroad"
      | "haveEnglishSpeaker"
  ) => {
    if (type === "memo") setIsMemoExpanded((prev) => !prev);
    if (type === "serviceLaunch") setIsServiceLaunchExpanded((prev) => !prev);
    if (type === "achievement") setIsAchievementExpanded((prev) => !prev);
    if (type === "achievementOfAbroad")
      setIsAchievementOfAbroadExpanded((prev) => !prev);
    if (type === "haveEnglishSpeaker")
      setIsHaveEnglishSpeakerExpanded((prev) => !prev);
  };

  const [staffName, setStaffName] = useState<string[]>([]);
  const handleStaffNameChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { options } = event.target;
    const value: string[] = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setStaffName(value);
  };

  const [industry, setIndustry] = useState("");
  const handleIndustryChange: ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    setIndustry(event.target.value);
  };

  const [correspondingRegion, setCorrespondingRegion] = useState("");
  const handleCorrespondingRegionChange: ChangeEventHandler<
    HTMLSelectElement
  > = (event) => {
    setCorrespondingRegion(event.target.value);
  };

  const [eligibility, setEligibility] = useState("");
  const handleEligibilityChange: ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    setEligibility(event.target.value);
  };

  const [reliabilityOfServiceLaunch, setReliabilityOfServiceLaunch] =
    useState("");
  const handleReliabilityOfServiceLaunchChange: ChangeEventHandler<
    HTMLSelectElement
  > = (event) => {
    setReliabilityOfServiceLaunch(event.target.value);
  };

  const [selectionCondition, setSelectionCondition] = useState("");
  const handleSelectionConditionChange: ChangeEventHandler<
    HTMLSelectElement
  > = (event) => {
    setSelectionCondition(event.target.value);
  };

  const [isAddingStaffDialogOpen, setIsAddingStaffDialogOpen] = useState(false);
  const openAddingStaffDialog = () => {
    setIsAddingStaffDialogOpen(true);
  };
  const closeAddingStaffDialog = () => {
    setIsAddingStaffDialogOpen(false);
  };

  return {
    isMemoExpanded,
    isServiceLaunchExpanded,
    isAchievementExpanded,
    isAchievementOfAbroadExpanded,
    isHaveEnglishSpeakerExpanded,
    handleExpandEvent,
    staffName,
    handleStaffNameChange,
    industry,
    handleIndustryChange,
    correspondingRegion,
    handleCorrespondingRegionChange,
    eligibility,
    handleEligibilityChange,
    reliabilityOfServiceLaunch,
    handleReliabilityOfServiceLaunchChange,
    selectionCondition,
    handleSelectionConditionChange,
    openAddingStaffDialog,
    closeAddingStaffDialog,
    isAddingStaffDialogOpen,
  };
};
