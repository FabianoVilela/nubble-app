import { Screen, Text } from '@components';
import { AppTabScreenProps } from '@routes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function New(props: AppTabScreenProps<'NewPostScreen'>) {
  return (
    <Screen>
      <Text>New Post</Text>
    </Screen>
  );
}
