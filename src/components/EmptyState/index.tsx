import { ActivityIndicator, Box, Button, Text } from '@components';

export interface EmptyStateMessages {
  empty: string;
  error: string;
}

interface EmptyStateProps {
  loading: boolean;
  error: unknown;
  messages: EmptyStateMessages;
  refetch: () => void;
}

export const EmptyState = ({
  loading,
  error,
  messages,
  refetch,
}: EmptyStateProps) => {
  const renderContent = () => {
    if (loading) {
      return <ActivityIndicator color="primary" />;
    }

    if (error) {
      return (
        <>
          <Text bold preset="paragraphMedium" mb="s16">
            {messages.error}
          </Text>
          <Button title="recarregar" preset="outline" onPress={refetch} />
        </>
      );
    }

    return (
      <Text bold preset="paragraphMedium">
        {messages.empty}
      </Text>
    );
  };

  const component = renderContent();

  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      {component}
    </Box>
  );
};
