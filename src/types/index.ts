/**
 * Device/Asset type definitions for Inwentaryzator 3001
 * Centralized TypeScript interfaces for the inventory system
 */

/**
 * Device status values - represents the current state of an IT asset
 */
export const DeviceStatus = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  RETIRED: 'retired',
  IN_REPAIR: 'in_repair',
} as const;

export type DeviceStatus = (typeof DeviceStatus)[keyof typeof DeviceStatus];

/**
 * Device type values - categorizes IT assets
 */
export const DeviceType = {
  LAPTOP: 'laptop',
  DESKTOP: 'desktop',
  PRINTER: 'printer',
  MONITOR: 'monitor',
  NETWORK_DEVICE: 'network_device',
  OTHER: 'other',
} as const;

export type DeviceType = (typeof DeviceType)[keyof typeof DeviceType];

/**
 * Core Device/Asset interface
 * Represents a single IT asset in the inventory system
 */
export interface Device {
  /** Unique identifier for the device */
  id: string;
  
  /** Human-readable device name */
  name: string;
  
  /** Device type (laptop, desktop, printer, etc.) */
  type: DeviceType;
  
  /** Manufacturer name (e.g., "Dell", "HP", "Apple") */
  manufacturer: string;
  
  /** Device model identifier */
  model: string;
  
  /** Unique manufacturer serial number */
  serialNumber: string;
  
  /** Current device status (active, inactive, retired, in_repair) */
  status: DeviceStatus;
  
  /** Employee ID or name assigned to this device */
  assignedTo?: string;
  
  /** Physical location of the device (e.g., "Office A1", "Server Room") */
  location: string;
  
  /** Purchase date in ISO 8601 format (YYYY-MM-DD) */
  purchaseDate: string;
  
  /** Cost of the device in currency units */
  cost?: number;
  
  /** Warranty expiration date in ISO 8601 format (YYYY-MM-DD) */
  warrantyExpiration?: string;
  
  /** Additional notes about the device */
  notes?: string;
  
  /** Timestamp when the device was added to inventory (ISO 8601) */
  createdAt: string;
  
  /** Timestamp of last update (ISO 8601) */
  updatedAt: string;
}

/**
 * Filters for querying and filtering devices
 */
export interface DeviceFilters {
  /** Filter by device status */
  status?: DeviceStatus[];
  
  /** Filter by device type */
  type?: DeviceType[];
  
  /** Filter by assigned employee */
  assignedTo?: string;
  
  /** Filter by physical location */
  location?: string;
  
  /** Search term for name, serial number, or model */
  search?: string;
  
  /** Pagination limit */
  limit?: number;
  
  /** Pagination offset */
  offset?: number;
}

/**
 * Sorting options for device lists
 */
export interface DeviceSortOptions {
  /** Field to sort by */
  field: keyof Device;
  
  /** Sort direction */
  direction: 'asc' | 'desc';
}

/**
 * API Response wrapper for list endpoints
 */
export interface ApiListResponse<T> {
  /** Array of items */
  data: T[];
  
  /** Total count of items (for pagination) */
  total: number;
  
  /** Timestamp when response was generated */
  timestamp: string;
}

/**
 * API Response wrapper for single item endpoints
 */
export interface ApiItemResponse<T> {
  /** Single item */
  data: T;
  
  /** Timestamp when response was generated */
  timestamp: string;
}

/**
 * API Error response
 */
export interface ApiErrorResponse {
  /** Error status code */
  code: string;
  
  /** Human-readable error message */
  message: string;
  
  /** Field-specific validation errors */
  errors?: Record<string, string[]>;
  
  /** Timestamp when error occurred */
  timestamp: string;
}
