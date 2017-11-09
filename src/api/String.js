export default {
  slice: {
    usage:'slice() 方法提取一个字符串的一部分，并返回一新的字符串。',
    grammar: 'str.slice(beginSlice[, endSlice])',
    paramUsages: [
      '从该索引处开始提取原字符串中的字符。如果值为负数，则被看作是 sourceLength + beginSlice',
      `可选。在该索引处结束提取字符串。如果省略该参数，slice会一直提取到字符串末尾。如果该参数为负数，则被看作是 sourceLength + endSlice`
    ]
  }, 
  substr: {
    usage:'substr() 方法返回一个字符串中从指定位置开始到指定字符数的字符。',
    grammar: 'str.substr(start[, length])',
    paramUsages: [
      '开始提取字符的位置。如果为负值，则被看作 strLength + start',
      `可选。提取的字符数`
    ],
  }, 
  substring: {
    usage:'substring() 方法返回一个字符串在开始索引到结束索引之间的一个子集, 或从开始索引直到字符串的末尾的一个子集。',
    grammar: 'str.substring(indexStart[, indexEnd])',
    paramUsages: [
      '一个 0 到字符串长度之间的整数。',
      `可选。一个 0 到字符串长度之间的整数。`
    ],
  }, 
  concat: {
    usage:'concat() 方法将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回。',
    grammar: 'str.concat(string2, string3[, ..., stringN])',
    paramUsages: [
      '和原字符串连接的多个字符串',
    ],
    isParamInfinite: true,
  }, 
  charAt: {
    usage:'charAt() 方法从一个字符串中返回指定的字符',
    grammar: 'str.charAt(index)',
    paramUsages: [
      '一个大于等于 0，小于字符串长度的整数。如果不是一个数值，则默认为 0。',
    ],
  }, 
  charCodeAt: {
    usage:'charCodeAt() 方法返回0到65535之间的整数，表示给定索引处的UTF-16代码单元',
    grammar: 'str.charCodeAt(index)',
    paramUsages: [
      '一个大于等于 0，小于字符串长度的整数。如果不是一个数值，则默认为 0。',
    ],
  }, 
  toUpperCase: {
    name: 'toUpperCase',
    usage:'toUpperCase() 将调用该方法的字符串值转换为大写形式，并返回。',
    grammar: 'str.toUpperCase()',
    paramUsages: []
  },
  toLowerCase: {
    name: 'toLowerCase',
    usage:'toLowerCase() 会将调用该方法的字符串值转为小写形式，并返回。',
    grammar: 'str.toLowerCase()',
    paramUsages: []
  },
}
