export default {
  toString: {
    usage:'toString() 方法返回指定 Number 对象的字符串表示形式。',
    grammar: 'num.toString([radix])',
    paramTypes:['Number'],
    paramUsages: [
      '指定要用于数字到字符串的转换的基数(从2到36)。如果未指定 radix 参数，则默认值为 10',
    ]
  }, 
  toFixed: {
    usage:'toFixed() 方法使用定点表示法来四舍五入格式化一个数。',
    grammar: 'num.toFixed(digits)',
    paramTypes:['Number'],
    paramUsages: [
      '小数点后数字的个数；介于 0 到 20 （包括）之间，实现环境可能支持更大范围。如果忽略该参数，则默认为 0。',
    ]
  }, 
  toExponential: {
    usage:'toExponential() 方法以指数表示法返回该数值字符串表示形式。',
    grammar: 'num.toExponential(fractionDigits)',
    paramTypes:['Number'],
    paramUsages: [
      '可选。一个整数，用来指定小数点后有几位数字。默认情况下用尽可能多的位数来显示数字。',
    ]
  },
  toPrecision: {
    usage:'toPrecision() 方法以指定的精度返回该数值对象的字符串表示。',
    grammar: 'num.toPrecision(precision)',
    paramTypes:['Number'],
    paramUsages: [
      '可选。一个用来指定有效数个数的整数。',
    ]
  },
}
