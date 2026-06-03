/**
 * Application-wide constants for Inwentaryzator 3001
 * Includes defaults, limits, labels, and configuration values
 */

import { DeviceStatus, DeviceType } from '../types';

/**
 * Status label mapping for UI display
 * Maps enum values to human-readable Polish labels
 */
export const STATUS_LABELS: Record<DeviceStatus, string> = {
  [DeviceStatus.ACTIVE]: 'Aktywne',
  [DeviceStatus.INACTIVE]: 'Nieaktywne',
  [DeviceStatus.RETIRED]: 'Wycofane',
  [DeviceStatus.IN_REPAIR]: 'W naprawie',
};

/**
 * Device type label mapping for UI display
 * Maps enum values to human-readable Polish labels
 */
export const DEVICE_TYPE_LABELS: Record<DeviceType, string> = {
  [DeviceType.LAPTOP]: 'Laptop',
  [DeviceType.DESKTOP]: 'Desktop',
  [DeviceType.PRINTER]: 'Drukarka',
  [DeviceType.MONITOR]: 'Monitor',
  [DeviceType.NETWORK_DEVICE]: 'Urządzenie sieciowe',
  [DeviceType.OTHER]: 'Inne',
};

/**
 * Color styles for device status badges
 * Maps status to Tailwind/Material You color classes
 */
export const STATUS_COLORS: Record<DeviceStatus, string> = {
  [DeviceStatus.ACTIVE]: 'bg-green-100 text-green-800 border-green-300',
  [DeviceStatus.INACTIVE]: 'bg-gray-100 text-gray-800 border-gray-300',
  [DeviceStatus.RETIRED]: 'bg-red-100 text-red-800 border-red-300',
  [DeviceStatus.IN_REPAIR]: 'bg-yellow-100 text-yellow-800 border-yellow-300',
};

/**
 * All available device statuses
 */
export const AVAILABLE_STATUSES = Object.values(DeviceStatus);

/**
 * All available device types
 */
export const AVAILABLE_DEVICE_TYPES = Object.values(DeviceType);

/**
 * Pagination defaults
 */
export const PAGINATION = {
  /** Default number of items per page */
  DEFAULT_PAGE_SIZE: 25,
  
  /** Maximum allowed page size */
  MAX_PAGE_SIZE: 100,
  
  /** Minimum page size */
  MIN_PAGE_SIZE: 5,
} as const;

/**
 * Table display defaults
 */
export const TABLE = {
  /** Default number of rows to display */
  DEFAULT_ROWS: 25,
  
  /** Maximum rows that can be selected at once */
  MAX_BULK_SELECT: 50,
  
  /** Debounce delay for search input (ms) */
  SEARCH_DEBOUNCE_MS: 300,
} as const;

/**
 * API defaults and timeouts
 */
export const API = {
  /** Request timeout in milliseconds */
  TIMEOUT_MS: 30000,
  
  /** API base URL (can be overridden in environment) */
  BASE_URL: '/api',
  
  /** Maximum retries for failed requests */
  MAX_RETRIES: 3,
  
  /** Delay between retries in milliseconds */
  RETRY_DELAY_MS: 1000,
} as const;

/**
 * Validation constraints
 */
export const VALIDATION = {
  /** Minimum device name length */
  MIN_NAME_LENGTH: 1,
  
  /** Maximum device name length */
  MAX_NAME_LENGTH: 255,
  
  /** Minimum serial number length */
  MIN_SERIAL_LENGTH: 1,
  
  /** Maximum serial number length */
  MAX_SERIAL_LENGTH: 100,
  
  /** Minimum location name length */
  MIN_LOCATION_LENGTH: 1,
  
  /** Maximum location name length */
  MAX_LOCATION_LENGTH: 255,
  
  /** Maximum notes length */
  MAX_NOTES_LENGTH: 1000,
  
  /** Maximum cost value */
  MAX_COST: 999999.99,
} as const;

/**
 * Common device manufacturers
 * Used for autocomplete and suggestions
 */
export const COMMON_MANUFACTURERS = [
  'Dell',
  'HP',
  'Lenovo',
  'Apple',
  'ASUS',
  'Acer',
  'MSI',
  'Samsung',
  'LG',
  'BenQ',
  'Cisco',
  'Netgear',
  'TP-Link',
  'Xerox',
  'Canon',
  'Brother',
] as const;

/**
 * Common office locations
 * Used for location suggestions
 */
export const COMMON_LOCATIONS = [
  'Office A1',
  'Office A2',
  'Office B1',
  'Office B2',
  'Server Room',
  'Meeting Room 1',
  'Meeting Room 2',
  'Warehouse',
  'Remote',
] as const;

/**
 * Date format constants
 */
export const DATE_FORMAT = {
  /** ISO 8601 format used in API */
  ISO: 'YYYY-MM-DD',
  
  /** Display format for UI (Polish locale) */
  DISPLAY: 'DD.MM.YYYY',
} as const;

/**
 * Route paths
 */
export const ROUTES = {
  /** Home/Dashboard page */
  HOME: '/',
  
  /** Assets/Devices list page */
  ASSETS: '/assets',
  
  /** Single asset detail page */
  ASSET_DETAIL: '/assets/:id',
  
  /** Create new asset page */
  ASSET_CREATE: '/assets/new',
  
  /** Edit asset page */
  ASSET_EDIT: '/assets/:id/edit',
} as const;

/**
 * Local storage keys
 */
export const STORAGE_KEYS = {
  /** User preferences (theme, language, etc.) */
  USER_PREFERENCES: 'inwentaryzator:preferences',
  
  /** Last applied filters */
  FILTERS: 'inwentaryzator:filters',
  
  /** Last sort order */
  SORT_ORDER: 'inwentaryzator:sort',
  
  /** Authentication token */
  AUTH_TOKEN: 'inwentaryzator:auth_token',
} as const;

/**
 * Theme configuration
 */
export const THEME = {
  /** Available theme options */
  OPTIONS: ['light', 'dark', 'system'] as const,
  
  /** Default theme */
  DEFAULT: 'system',
} as const;
