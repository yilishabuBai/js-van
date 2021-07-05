import IOptions from './IOptions'

export default interface ISetter {
  set ($key: string, $value: any, $options: IOptions): void
}
