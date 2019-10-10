import unit from '../unit'
import data from './bySales'

// 测试
unit.mock('order/commodityOrder/list', 'post', data)
