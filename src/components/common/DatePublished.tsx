import { HStack, Text, useTheme } from "native-base";
import React from "react";
import { ICON_MAP } from "../../constants/IconMap";
import { timeFromNowShort } from "../../helpers/TimeHelper";
import SFIcon from "./icons/SFIcon";

function DatePublished({ published }: { published: string }) {
  const { colors } = useTheme();
  return (
    <HStack alignItems="center" space={0.5}>
      <SFIcon
        icon={ICON_MAP.CLOCK}
        size={10}
        boxSize={18}
        color={colors.app.textSecondary}
      />
      <Text color={colors.app.textSecondary} fontSize="sm">
        {timeFromNowShort(published)}
      </Text>
    </HStack>
  );
}

export default React.memo(DatePublished);
