import { Dimensions, Image } from 'react-native';

import { Post } from '@domain';

interface PostItemContentProps extends Pick<Post, 'imageURL'> {}

export function PostItemContent({ imageURL }: PostItemContentProps) {
  const { width } = Dimensions.get('screen');

  return (
    <Image
      source={{ uri: imageURL }}
      style={{ width: width, height: 250 }}
      resizeMode="cover"
    />
  );
}
