/* eslint-disable no-unused-vars */
declare enum VanType {
  localStorage = 1,
  sessionStorage = 2,
  cookie = 4
}

export interface IVanOptions {
  type: VanType,
  expires?: number,
  domain?: string
}

export function set($key: string, $value: any, $options?: IVanOptions): void

export function get($key: string, $options?: IVanOptions): any

export function remove($ket: string, $options?: IVanOptions): any
