import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession, signIn, signOut } from 'next-auth/react';
import { authService } from '@/services/auth.service';
import type { LoginCredentials, RegisterData } from '@/services/auth.service';
import { ChangePasswordData, UpdateProfileData, userService } from '@/services/user.service';

export function useAuth() {
  const { data: session, status } = useSession();
  const queryClient = useQueryClient();

  // Get current user
  const { data: user, isLoading: isLoadingUser } = useQuery({
    queryKey: ['user'],
    queryFn: () => userService.getProfile(),
    staleTime: 1000 * 60 * 5, // 5 minutes
    enabled: !!session?.user?.accessToken,
  });

  // Login mutation
  const loginMutation = useMutation({
    mutationFn: (credentials: LoginCredentials) => signIn('credentials', {
      ...credentials,
      redirect: false,
    }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });

  // Register mutation
  const registerMutation = useMutation({
    mutationFn: (data: RegisterData) => authService.register(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    }
  });

  // Logout mutation
  const logoutMutation = useMutation({
    mutationFn: () => signOut({ redirect: false }),
    onSuccess: () => {
      queryClient.clear();
    },
  });

  // Update profile mutation
  const updateProfileMutation = useMutation({
    mutationFn: (data: UpdateProfileData) => userService.updateProfile(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });

  // Change password mutation
  const changePasswordMutation = useMutation({
    mutationFn: (data: ChangePasswordData) => userService.changePassword(data),
  });

  // Forgot password mutation
  const forgotPasswordMutation = useMutation({
    mutationFn: (email: string) => authService.forgotPassword({ email }),
  });

  // Reset password mutation
  const resetPasswordMutation = useMutation({
    mutationFn: ({ token, data }: { token: string; data: { password: string; confirmPassword: string } }) =>
      authService.resetPassword(token, data),
  });

  // Verify email mutation
  const verifyEmailMutation = useMutation({
    mutationFn: (token: string) => authService.verifyEmail(token),
  });

  // Social login functions
  const loginWithGithub = () => signIn('github');
  const loginWithGoogle = () => signIn('google');

  return {
    user,
    session,
    status,
    isLoadingUser,
    isAuthenticated: status === 'authenticated',
    login: loginMutation.mutate,
    register: registerMutation.mutate,
    logout: logoutMutation.mutate,
    updateProfile: updateProfileMutation.mutate,
    changePassword: changePasswordMutation.mutate,
    forgotPassword: forgotPasswordMutation.mutate,
    resetPassword: resetPasswordMutation.mutate,
    verifyEmail: verifyEmailMutation.mutate,
    loginWithGithub,
    loginWithGoogle,
    isLoading: loginMutation.isPending || registerMutation.isPending,
    error: loginMutation.error || registerMutation.error,
  };
} 