import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { ContextMenuOption } from "../../types/ContextMenuOptions";
import { ICON_MAP } from "../../constants/IconMap";

export const useFeedSortOptions = () => {
  const { t } = useTranslation();
  const topSortOptions = useTopSortOptions();

  return useMemo<ContextMenuOption[]>(
    () => [
      {
        key: "TopAll",
        title: t("sort.Top"),
        icon: ICON_MAP.CLOCK,
        options: topSortOptions,
      },
      {
        key: "Hot",
        title: t("sort.Hot"),
        icon: ICON_MAP.FLAME,
      },
      {
        key: "Active",
        title: t("sort.Active"),
        icon: ICON_MAP.BOLT,
      },
      {
        key: "New",
        title: t("sort.New"),
        icon: ICON_MAP.ALARM,
      },
      {
        key: "MostComments",
        title: t("sort.MostComments"),
        icon: ICON_MAP.MOST_COMMENTS,
      },
      {
        key: "NewComments",
        title: t("sort.NewComments"),
        icon: ICON_MAP.NEW_COMMENTS,
      },
      {
        key: "Old",
        title: t("sort.Old"),
        icon: ICON_MAP.HOURGLASS,
      },
    ],
    [t]
  );
};

export const useTopSortOptions = () => {
  const { t } = useTranslation();

  return useMemo<ContextMenuOption[]>(
    () => [
      {
        key: "TopHour",
        title: t("sort.top.Hour"),
        icon: ICON_MAP.CLOCK,
      },
      {
        key: "TopSixHour",
        title: t("sort.top.SixHours"),
        icon: ICON_MAP.CLOCK,
      },
      {
        key: "TopTwelveHour",
        title: t("sort.top.TwelveHours"),
        icon: ICON_MAP.CLOCK,
      },
      {
        key: "TopDay",
        title: t("sort.top.Day"),
        icon: ICON_MAP.CLOCK,
      },
      {
        key: "TopWeek",
        title: t("sort.top.Hour"),
        icon: ICON_MAP.CALENDAR,
      },
      {
        key: "TopMonth",
        title: t("sort.top.Month"),
        icon: ICON_MAP.CALENDAR,
      },
      {
        key: "TopYear",
        title: t("sort.top.Year"),
        icon: ICON_MAP.CALENDAR,
      },
      {
        key: "TopAll",
        title: t("sort.top.AllTime"),
        icon: ICON_MAP.TROPHY,
      },
    ],
    [t]
  );
};
