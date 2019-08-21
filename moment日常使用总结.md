moment()可谓是一个处理时间/日期的利器, 通过它可以很方便的获取到我们想要的时间数据, 下面是我在日常工作使用中的总结记录.

## 获取起始时间startOf()

可获取周(`week`), 月(`month`), 年(`year`)第一天0点时间, 

- 获取当天0点时间, 

`moment().startOf('day')`

- 获取本周第一天0点时间

`moment().startOf('week')`

### 获取末尾时间endOf()

## 获取某天时间

```javascript
moment().add(1, 'days')   // 后一天本时刻时间
moment().add(-1, 'days')  // 前一天本时刻时间
moment().add(1, 'weeks') // 下周本时刻时间
moment().add(-1, 'month') // 上月本时刻时间
...
```

## 格式转换

- 时间戳

  ```javascript
  moment().unix() // 10位时间戳
  ```

- 标准时间对象

  ```
  moment().toDate()
  ```

## 格式化

格式化主要是用来把moment对象转换为日常使用的时间日期格式

```javascript
moment().format('YYYY-MM-DD HH:mm:ss') // 2019-08-11 15:12:12
moment().format('YYYY-MM-DD hh:mm:ss') // 2019-08-11 03:12:12
```







