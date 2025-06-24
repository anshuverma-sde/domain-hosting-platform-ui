// services/auth.service.ts
import axiosInstance from "@/lib/axios";

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData extends LoginCredentials {
  firstName: string;
  lastName: string;
}

export interface AuthResponse {
  success: boolean;
  data: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    isVerified: boolean;
    token: string;
  };
}

export interface ForgotPasswordData {
  email: string;
}

export interface ResetPasswordData {
  password: string;
  confirmPassword: string;
}

class AuthService {
  private baseUrl = `/api/auth`;

  async register(data: RegisterData): Promise<AuthResponse> {
    const response = await axiosInstance.post<AuthResponse>(`${this.baseUrl}/register`, data);
    return response.data;
  }

  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const response = await axiosInstance.post<AuthResponse>(`${this.baseUrl}/login`, credentials);
    return response.data;
  }

  async forgotPassword(data: ForgotPasswordData): Promise<void> {
    await axiosInstance.post(`${this.baseUrl}/forgot-password`, data);
  }

  async resetPassword(token: string, data: ResetPasswordData): Promise<void> {
    await axiosInstance.put(`${this.baseUrl}/reset-password/${token}`, data);
  }

  async verifyEmail(token: string): Promise<void> {
    await axiosInstance.get(`${this.baseUrl}/verify-email/${token}`);
  }

  async refreshToken(): Promise<AuthResponse> {
    const response = await axiosInstance.post<AuthResponse>(`${this.baseUrl}/refresh-token`);
    return response.data;
  }
}

export const authService = new AuthService();
