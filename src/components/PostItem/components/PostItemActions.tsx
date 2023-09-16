import { Post } from '@domain';

import { Box, Icon, IconProps, Text, TouchableOpacityBox } from '@components';

interface PostItemActionsProps
  extends Pick<Post, 'favoriteCount' | 'commentCount' | 'reactionCount'> {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function like() {
  // TODO: implement
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function navigateToComment() {
  // TODO: implement
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function addToFavorites() {
  // TODO: implement
}

export function PostItemActions({
  favoriteCount,
  commentCount,
  reactionCount,
}: PostItemActionsProps) {
  return (
    <Box flexDirection="row" gap="s24" marginTop="s24">
      <Item
        marked
        amount={reactionCount}
        icon={{ marked: 'heartFill', default: 'heart' }}
        onPress={() => {}}
      />
      <Item
        amount={commentCount}
        icon={{ marked: 'comment', default: 'comment' }}
        onPress={() => {}}
      />
      <Item
        amount={favoriteCount}
        icon={{ marked: 'bookmarkFill', default: 'bookmark' }}
        onPress={() => {}}
      />
    </Box>
  );
}

interface ItemProps {
  marked?: boolean;
  icon: {
    marked: IconProps['name'];
    default: IconProps['name'];
  };
  amount: number;
  onPress: () => void;
}

function Item({ marked = false, icon, amount, onPress }: ItemProps) {
  return (
    <Box flexDirection="row" gap="s4" alignItems="center">
      <TouchableOpacityBox onPress={onPress}>
        <Icon
          name={marked ? icon.marked : icon.default}
          color={marked ? 'marked' : undefined}
        />
      </TouchableOpacityBox>
      <Text bold preset="paragraphSmall">
        {amount > 0 ? amount : null}
      </Text>
    </Box>
  );
}
