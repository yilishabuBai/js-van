/* eslint-disable no-unused-vars */
declare enum VanType {
  localStorage = 1,
  sessionStorage = 2,
  cookie = 4
}

export class VanOptions {
  type: VanType
  expires?: number | string
  domain?: string
}

export function set($key: string, $value: any, $options?: VanOptions): void

export function get($key: string, $options?: VanOptions): any

export function remove($ket: string, $options?: VanOptions): void
