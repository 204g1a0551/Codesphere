export interface ApiResponse<TData> {
  success: boolean;
  message: string;
  data: TData;
}

export interface PaginatedResponse<TItem> {
  count: number;
  next: string | null;
  previous: string | null;
  results: TItem[];
}