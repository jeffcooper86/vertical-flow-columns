# vertical-flow-columns
Sorts data for displaying vertical columns when the browser floats them horizontally.

## Usage
### 1 Column (width 100%)
```javascript
const vfc = require('vertical-flow-columns');
const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

0
1
2
3
4
5
6
7
8
9
```

### 2 Columns (width: 50%)
```javascript
var sorted = vfc(data, 2);
=> [ 0, 5, 1, 6, 2, 7, 3, 8, 4, 9 ]

0 5
1 6
2 7
3 8
4 9
```

### 3 Columns (width: 33.3%)
```javascript
var sorted = vfc(data, 3);
=> [ 0, 4, 7, 1, 5, 8, 2, 6, 9, 3 ]

0 4 7
1 5 8
2 6 9
3
```

### 4 Columns (width: 25%)
```javascript
var sorted = vfc(data, 4);
=> [ 0, 3, 6, 8, 1, 4, 7, 9, 2, 5 ]

0 3 6 8
1 4 7 9
2 5
```

## Docs
### sort(data, [n]) ⇒ <code>Array</code>
Sorts data for displaying vertical columns when the
browser floats them horizontally.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>Array</code> |  | The data to be sorted as columns. |
| [n] | <code>Integer</code> | <code>2</code> | The number of columns. |
