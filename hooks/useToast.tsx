import { useToast } from './use-toast';

export const useToastNotification = () => {
  const { toast } = useToast();

  // Function to show a toast notification
  const showToast = (title: string, description?: string) => {
    toast({
      title,
      description,
    });
  };

  // Return the showToast function to be used in other components
  return { showToast };
};