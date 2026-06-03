/**
 * Mock data generator for Inwentaryzator 3001
 * Creates realistic sample IT assets for development and testing
 */

import { Device, DeviceStatus, DeviceType } from '../types';
import { COMMON_MANUFACTURERS, COMMON_LOCATIONS } from './constants';

/**
 * Sample laptop models
 */
const LAPTOP_MODELS = [
  'ThinkPad X1 Carbon',
  'ThinkPad E15',
  'ThinkPad L14',
  'Latitude 5520',
  'Latitude 5440',
  'Latitude 7640',
  'EliteBook 840 G9',
  'EliteBook 850 G10',
  'ProBook 450 G9',
  'MacBook Pro 14"',
  'MacBook Pro 16"',
  'MacBook Air M2',
  'VivoBook 15 S533',
  'ZenBook 13 OLED',
  'Swift 3 SF314',
];

/**
 * Sample desktop models
 */
const DESKTOP_MODELS = [
  'ThinkCentre M75q-2',
  'ThinkCentre M90',
  'OptiPlex 7090',
  'OptiPlex 9090',
  'EliteDesk 800 G7',
  'EliteDesk 805 G9',
  'ProDesk 600 G7',
  'iMac 24"',
  'Mac mini M2',
  'Pavilion 590',
  'VivoPC X',
];

/**
 * Sample monitor models
 */
const MONITOR_MODELS = [
  'UltraSharp U2423DE',
  'UltraSharp U2723DE',
  'UltraSharp U2424H',
  'ThinkVision T27h',
  'ThinkVision P27h',
  'ProDisplay P248f',
  'EliteDisplay E203i',
  'EliteDisplay E243i',
  'LG 24UP550',
  'LG 27UP550',
  'BenQ PD2500Q',
];

/**
 * Sample printer models
 */
const PRINTER_MODELS = [
  'M404n',
  'M428dw',
  'M454dw',
  'OfficeJet Pro 9012',
  'OfficeJet Pro 9015',
  'LaserJet Enterprise M507',
  'LaserJet Enterprise M607',
  'imageCLASS MF445dw',
  'imageCLASS MF645Cx',
];

/**
 * Sample network device models
 */
const NETWORK_MODELS = [
  'Cisco Catalyst 2960X',
  'Cisco Catalyst 3850',
  'Netgear S3700',
  'Netgear S5700',
  'TP-Link T2700G',
  'TP-Link SG3428XPP',
  'Cisco ASA 5506-X',
  'Cisco ISR 4331',
  'Netgear EX7700',
];

/**
 * Sample employee names
 */
const EMPLOYEE_NAMES = [
  'Jan Kowalski',
  'Maria Lewandowska',
  'Piotr Nowak',
  'Anna Grabowska',
  'Michał Wojcik',
  'Katarzyna Adamczyk',
  'Łukasz Szymański',
  'Agnieszka Wójcik',
  'Rafał Kucharski',
  'Ewa Jankowska',
  'Tomasz Mikulski',
  'Joanna Krawczyk',
  'Sławomir Bąk',
  'Barbara Żak',
  'Krzysztof Górski',
  'Magdalena Zając',
  'Dariusz Lewandowski',
  'Beata Konieczna',
  'Marek Szulc',
  'Halina Nowak',
  'Unassigned',
];

/**
 * Generate a realistic device serial number
 * @param {DeviceType} type - Device type
 * @returns {string} Formatted serial number
 */
function generateSerialNumber(type: DeviceType): string {
  const prefixes: Record<DeviceType, string> = {
    [DeviceType.LAPTOP]: 'LT',
    [DeviceType.DESKTOP]: 'DT',
    [DeviceType.PRINTER]: 'PR',
    [DeviceType.MONITOR]: 'MN',
    [DeviceType.NETWORK_DEVICE]: 'NW',
    [DeviceType.OTHER]: 'OT',
  };

  const prefix = prefixes[type];
  const year = Math.floor(Math.random() * 5) + 2020;
  const random = Math.floor(Math.random() * 999999)
    .toString()
    .padStart(6, '0');

  return `${prefix}-${year}-${random}`;
}

/**
 * Generate a random date between two years
 * @param {number} startYear - Start year
 * @param {number} endYear - End year
 * @returns {string} Date in ISO 8601 format
 */
function generateRandomDate(startYear: number, endYear: number): string {
  const start = new Date(startYear, 0, 1);
  const end = new Date(endYear, 11, 31);
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

  return date.toISOString().split('T')[0];
}

/**
 * Get random element from array
 * @template T
 * @param {T[]} array - Array to pick from
 * @returns {T} Random element
 */
function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Generate a single mock device
 * @param {number} index - Device index for unique ID
 * @returns {Device} Generated device object
 */
function generateMockDevice(index: number): Device {
  const deviceType = getRandomElement(Object.values(DeviceType));
  const status = getRandomElement(Object.values(DeviceStatus));
  const manufacturerName = getRandomElement([...COMMON_MANUFACTURERS]);

  let model: string;
  switch (deviceType) {
    case DeviceType.LAPTOP:
      model = getRandomElement(LAPTOP_MODELS);
      break;
    case DeviceType.DESKTOP:
      model = getRandomElement(DESKTOP_MODELS);
      break;
    case DeviceType.MONITOR:
      model = getRandomElement(MONITOR_MODELS);
      break;
    case DeviceType.PRINTER:
      model = getRandomElement(PRINTER_MODELS);
      break;
    case DeviceType.NETWORK_DEVICE:
      model = getRandomElement(NETWORK_MODELS);
      break;
    default:
      model = 'Generic Device';
  }

  const purchaseDate = generateRandomDate(2019, 2024);
  const warrantyDate = new Date(new Date(purchaseDate).getTime() + 365 * 24 * 60 * 60 * 1000);

  return {
    id: `DEV-${String(index + 1).padStart(5, '0')}`,
    name: `${manufacturerName} ${model}`,
    type: deviceType,
    manufacturer: manufacturerName,
    model: model,
    serialNumber: generateSerialNumber(deviceType),
    status: status,
    assignedTo: status === DeviceStatus.ACTIVE ? getRandomElement(EMPLOYEE_NAMES) : undefined,
    location: getRandomElement([...COMMON_LOCATIONS]),
    purchaseDate: purchaseDate,
    cost: Math.floor(Math.random() * 5000) + 500,
    warrantyExpiration: warrantyDate.toISOString().split('T')[0],
    notes:
      status === DeviceStatus.IN_REPAIR
        ? 'Device currently in service center for repairs'
        : status === DeviceStatus.RETIRED
          ? 'Device retired from service'
          : 'Active device in service',
    createdAt: new Date(new Date(purchaseDate).getTime() + Math.random() * 30 * 24 * 60 * 60 * 1000)
      .toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

/**
 * Generate array of mock devices
 * Creates realistic IT asset data for development and testing
 * 
 * @param {number} count - Number of devices to generate (default: 120)
 * @returns {Device[]} Array of generated device objects
 * @example
 * const mockDevices = generateMockDevices(150);
 * console.log(mockDevices[0]); // First generated device
 */
export function generateMockDevices(count: number = 120): Device[] {
  const devices: Device[] = [];

  for (let i = 0; i < count; i++) {
    devices.push(generateMockDevice(i));
  }

  return devices;
}

/**
 * Get a single mock device by ID
 * Generates consistent device data for a given ID
 * 
 * @param {string} id - Device ID in format DEV-XXXXX
 * @returns {Device | null} Generated device or null if invalid ID
 * @example
 * const device = getMockDeviceById('DEV-00001');
 */
export function getMockDeviceById(id: string): Device | null {
  const match = id.match(/DEV-(\d+)/);
  if (!match) return null;

  const index = parseInt(match[1], 10) - 1;
  if (index < 0) return null;

  return generateMockDevice(index);
}

/**
 * Default exported mock devices (120 items)
 * Use this for initial data in the application
 */
export const mockDevices = generateMockDevices(120);
