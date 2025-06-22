// services/user.service.ts
import { API_BASE_URL } from "@/config/env";
import axiosInstance from "@/lib/axios";

export interface UserData {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  isVerified: boolean;
  token: string;
}

export interface UpdateProfileData {
  name?: string;
  email?: string;
}

export interface ChangePasswordData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

class UserService {
  private baseUrl = `${API_BASE_URL}/api/users`;

  async getProfile(): Promise<UserData> {
    const response = await axiosInstance.get<UserData>(`${this.baseUrl}/profile`);
    return response.data;
  }

  async updateProfile(data: UpdateProfileData): Promise<UserData> {
    const response = await axiosInstance.put<UserData>(`${this.baseUrl}/profile`, data);
    return response.data;
  }

  async changePassword(data: ChangePasswordData): Promise<void> {
    await axiosInstance.put(`${this.baseUrl}/change-password`, data);
  }

  async deleteAccount(): Promise<void> {
    await axiosInstance.delete(`${this.baseUrl}`);
  }
}

export const userService = new UserService();
