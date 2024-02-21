export interface MetaDataPageAPI {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  first_page: number;
  first_page_url: string;
  last_page_url: string | null;
  next_page_url: string | null;
  previous_page_url: string | null;
}

/**
 * @description Interface for API data response
 * @template T Response data type
 */
export interface PageAPI<T> {
  data: T[];
  meta: MetaDataPageAPI;
}

export interface PageParams {
  page?: number;
  per_page?: number;
}
