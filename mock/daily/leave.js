import unit from '../unit'

// 审批
unit.mock('daily/leave/list', 'get', [
  {
    name: '不知道',
    businessOrderNumber: '1321321321',
    businessType: '请假',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    approvalStatus: '待审批',
    pending: '随便',
    startTime: '2017-04-20',
    endTime: '2019-04-20'
  },
  {
    name: '不知道',
    businessOrderNumber: '1321321321',
    businessType: '请假',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    approvalStatus: '待审批',
    pending: '随便',
    startTime: '2017-04-20',
    endTime: '2019-04-20'
  }
])
