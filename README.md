# js-van

[![Version](https://img.shields.io/badge/version-0.0.4-blue.svg?style=plastic)](https://github.com/yilishabuBai/js-van)

> 前端数据持久化方案，支持cookie与storage。

## 安装与使用

通过`npm`安装
```
npm install js-van
```

使用

```javascript
import { set, get, remove, VanType } from 'js-van'

// 存储数据
set('key', 'value', { type: VanType.localStorage, expires: '' })
// 获取数据
get('key', { type: VanType.cookie })
// 删除数据
remove('key', { type: VanType.sessionStorage })
```

## 方法说明

### set

存储数据到cookie或storage。当不设置`type`时，默认存储到localStorage。支持`expires`设置，当`expires`设置为数字时，所存储的数据将存在有效期；当`expires`不是数字时，该属性无效。

##### 参数

`$key: string`

`$value: any`

`$options?: VanOptions`

### get

获取存储的数据，如果数据不存在或超出有效期，返回null。

##### 参数

`$key: string`

`$options?: VanOptions`

### remove

删除数据。

##### 参数

`$key: string`

`$options?: VanOptions`

## 对象说明

### VanOptions

选项配置

##### 属性

`type?: VanType`

`expires?: number | string`

`domain?: string`

## 枚举说明

### VanType

`localStorage`

`sessionStorage`

`cookie`
