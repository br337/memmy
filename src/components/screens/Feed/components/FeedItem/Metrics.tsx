import { PostAggregates } from "lemmy-js-client";
import { HStack } from "native-base";
import React from "react";
import VoteData from "../../../../common/Vote/VoteData";
import CommentCount from "../../../../common/Comments/CommentCount";
import DatePublished from "../../../../common/DatePublished";

interface Props {
  data: PostAggregates;
  vote?: number;
}

function metrics({ data, vote }: Props) {
  return (
    <HStack flex={1} space={2}>
      <VoteData data={data} vote={vote} />
      <CommentCount commentCount={data.comments} />
      <DatePublished published={data.published} />
    </HStack>
  );
}

export const Metrics = React.memo(metrics);
