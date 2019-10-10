import CryptoJS from 'crypto-js';
import moment from 'moment';

const unit = {
  // md5加密
  md5Encode: str => {
    return CryptoJS.MD5(str).toString();
  },
  // 格式化日期
  formatDate: (val, options = {format: 'YYYY-MM-DD'}) => {
    if (!val) {
      return '';
    }
    return moment(val).format(options.format);
  },
  // 百分比
  percent: (val, options = {rate: '%', fixed: 2, mult: true}) => {
    val = val * 1;
    if (isNaN(val)) {
      return '';
    }
    let value = val;
    if (options.mult) {
      value = val * 100;
    }
    return `${value.toFixed(options.fixed || 2)}${options.rate || '%'}`;
  },
  // 格式化货币
  currency: (val, options = {prefix: '¥', fixed: 2}) => {
    let money = val * 1;
    if (isNaN(money)) {
      if (typeof val === 'string') {
        return val;
      }
      // money = 0
      return '';
    }
    return `${options.prefix}${money.toFixed(options.fixed || 2)}`;
  },
  // 格式化商品属性 【托:15|箱:15|支=>15箱/托(15支/箱)】
  getFormatProductAttrs: attrs => {
    if (!attrs) return '';
    let attrList = attrs.split(':');
    let showArr = [];
    attrList.forEach((v, i) => {
      if (i !== 0) {
        let itemArr = attrList[i - 1].split('|');
        showArr.push(`${v.replace(/\|/g, '')}/${itemArr[1] || itemArr[0]}`);
      }
    });
    let str = showArr.slice(0, 1).join('');
    let subStr = showArr.slice(1, showArr.length).join(',');
    subStr = subStr ? `(${subStr})` : '';
    return `${str}${subStr}`;
  },
};

export default unit;
