export default {
  slice: {
    usage:'slice() 方法提取一个字符串的一部分，并返回一新的字符串。',
    grammar: 'str.slice(beginSlice[, endSlice])',
    paramTypes:['Number','Number'],
    paramUsages: [
      '从该索引处开始提取原字符串中的字符。如果值为负数，则被看作是 sourceLength + beginSlice',
      `可选。在该索引处结束提取字符串。如果省略该参数，slice会一直提取到字符串末尾。如果该参数为负数，则被看作是 sourceLength + endSlice`
    ]
  }, 
  substr: {
    usage:'substr() 方法返回一个字符串中从指定位置开始到指定字符数的字符。',
    grammar: 'str.substr(start[, length])',
    paramTypes:['Number','Number'],
    paramUsages: [
      '开始提取字符的位置。如果为负值，则被看作 strLength + start',
      `可选。提取的字符数`
    ],
  }, 
  substring: {
    usage:'substring() 方法返回一个字符串在开始索引到结束索引之间的一个子集, 或从开始索引直到字符串的末尾的一个子集。',
    grammar: 'str.substring(indexStart[, indexEnd])',
    paramTypes:['Number','Number'],
    paramUsages: [
      '一个 0 到字符串长度之间的整数。',
      `可选。一个 0 到字符串长度之间的整数。`
    ],
  }, 
  concat: {
    usage:'concat() 方法将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回。',
    grammar: 'str.concat(string2, string3[, ..., stringN])',
    paramTypes:['String'],
    paramUsages: [
      '和原字符串连接的多个字符串',
    ],
    isParamInfinite: true,
  }, 
  charAt: {
    usage:'charAt() 方法从一个字符串中返回指定的字符',
    grammar: 'str.charAt(index)',
    paramTypes:['Number','Number'],
    paramUsages: [
      '一个大于等于 0，小于字符串长度的整数。如果不是一个数值，则默认为 0。',
    ],
  }, 
  charCodeAt: {
    usage:'charCodeAt() 方法返回0到65535之间的整数，表示给定索引处的UTF-16代码单元',
    grammar: 'str.charCodeAt(index)',
    paramTypes:['Number','Number'],
    outputType:'Number',
    paramUsages: [
      '一个大于等于 0，小于字符串长度的整数。如果不是一个数值，则默认为 0。',
    ],
  }, 
  toUpperCase: {
    name: 'toUpperCase',
    usage:'toUpperCase() 将调用该方法的字符串值转换为大写形式，并返回。',
    grammar: 'str.toUpperCase()',
    paramUsages: [],
  },
  toLowerCase: {
    name: 'toLowerCase',
    usage:'toLowerCase() 会将调用该方法的字符串值转为小写形式，并返回。',
    grammar: 'str.toLowerCase()',
    paramUsages: []
  },
  indexOf: {
    usage:'indexOf() 方法返回调用 String 对象中第一次出现的指定值的索引，开始在 fromIndex进行搜索。如果未找到该值，则返回-1。',
    grammar: 'str.indexOf(searchValue[, fromIndex])',
    paramTypes:['String','Number'],
    paramUsages: [
      '一个字符串表示被查找的值。',
      `可选。表示调用该方法的字符串中开始查找的位置。可以是任意整数。默认值为 0。`
    ],
  }, 
  lastIndexOf: {
    usage:'lastIndexOf() 方法返回指定值在调用该方法的字符串中最后出现的位置，如果没找到则返回 -1。从该字符串的后面向前查找，从 fromIndex 处开始。',
    grammar: 'str.lastIndexOf(searchValue[, fromIndex])',
    paramTypes:['String','Number'],
    paramUsages: [
      '一个字符串，表示被查找的值。',
      `可选。从调用该方法字符串的此位置处开始查找。可以是任意整数。默认值为 str.length。`
    ],
  }, 
  trim: {
    usage:'trim() 方法会从一个字符串的两端删除空白字符。在这个上下文中的空白字符是所有的空白字符 (space, tab, no-break space 等) 以及所有行终止符字符（如 LF，CR）。',
    grammar: 'str.trim()',
    paramUsages: [],
    tip: 'ES5',
  },
  startsWith: {
    usage:'startsWith()方法用来判断当前字符串是否是以另外一个给定的子字符串“开头”的，根据判断结果返回 true 或 false。',
    grammar: 'str.startsWith(searchString [, position])',
    paramTypes:['String','Number'],
    outputType:'Boolean',
    paramUsages: [
      '要搜索的子字符串。',
      `可选。在 str 中搜索 searchString 的开始位置，默认值为 0，也就是真正的字符串开头处。`
    ],
    tip: 'ES6',
  }, 
  endsWith: {
    usage:'endsWith()方法用来判断当前字符串是否是以另外一个给定的子字符串“结尾”的，根据判断结果返回 true 或 false。',
    grammar: 'str.endsWith(searchString [, position])',
    paramTypes:['String','Number'],
    outputType:'Boolean',
    paramUsages: [
      '要搜索的子字符串。',
      `可选。在 str 中搜索 searchString 的结束位置，默认值为 str.length，也就是真正的字符串结尾处。`
    ],
    tip: 'ES6',
  }, 
  includes: {
    usage:'includes() 方法用于判断一个字符串是否包含在另一个字符串中，根据情况返回true或false。',
    grammar: 'str.includes(searchString[, position])',
    paramTypes:['String','Number'],
    outputType:'Boolean',
    paramUsages: [
      '要在此字符串中搜索的字符串。',
      `可选。可选。从当前字符串的哪个索引位置开始搜寻子字符串；默认值为0。`
    ],
    tip: 'ES6',
  }, 
  repeat: {
    usage:'repeat() 构造并返回一个新字符串，该字符串包含被连接在一起的指定数量的字符串的副本。',
    grammar: 'str.repeat(count)',
    paramTypes:['Number'],
    paramUsages: [
      '介于0和正无穷大之间的整数 : [0, +∞) 。表示在新构造的字符串中重复了多少遍原字符串。',
    ],
    tip: 'ES6',
  }, 
  padStart: {
    usage:'padStart() 方法会用一个字符串填充当前字符串（如果需要的话会重复填充），在当前字符串的头部不断填充，直到它达到第一个参数中指定的目标长度。',
    grammar: 'str.padStart(targetLength [, padString])',
    paramTypes:['Number','String'],
    paramUsages: [
      '当前字符串需要填充到的目标长度。如果当前字符串原本就达到了该长度，那么该方法什么都不会做，直接返回原字符串。',
      '可选。填充字符串。如果在填充过程中发现用不完这一整个填充字符串，则优先用左侧部分，能用多少用多少。默认值为空格'
    ],
    tip: 'ES7',
  }, 
  padEnd: {
    usage:'padEnd() 方法会用第二个参数中指定的填充字符串，在当前字符串的尾部不断填充，直到它达到第一个参数中指定的目标长度。',
    grammar: 'str.padEnd(targetLength [, padString])',
    paramTypes:['Number','String'],
    paramUsages: [
      '当前字符串需要填充到的目标长度。如果当前字符串原本就达到了该长度，那么该方法什么都不会做，直接返回原字符串。',
      '可选。填充字符串。如果在填充过程中发现用不完这一整个填充字符串，则优先用左侧部分，能用多少用多少。默认值为空格'
    ],
    tip: 'ES7',
  }, 
}
