import { Dimensions, Image, ImageStyle, StyleProp } from 'react-native';

import { Post } from '@domain';

interface PostItemContentProps extends Pick<Post, 'imageURL'> {}

export function PostItemContent({ imageURL }: PostItemContentProps) {
  const { width } = Dimensions.get('screen');

  return (
    <Image
      source={{ uri: imageURL }}
      style={[{ width: width }, $image]}
      resizeMode="cover"
    />
  );
}

const $image: StyleProp<ImageStyle> = {
  height: 250,
  marginHorizontal: -24,
};
