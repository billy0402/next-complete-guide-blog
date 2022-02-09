type ApiResponse<T> = {
  message?: string;
  data: T;
};

type ApiError = {
  message: string;
};

type ApiModel<T> = ApiResponse<T> | ApiError;

export type { ApiModel };
