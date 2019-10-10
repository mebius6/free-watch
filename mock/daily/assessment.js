import unit from '../unit'

// 审批
unit.mock('/hr/assess/examine/examineListSearch1', 'get', [
  {
    name: '不知道',
    businessOrderNumber: '1321321321',
    businessType: '考核',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    approvalStatus: '待审批',
    pending: '随便',
    assessmentAmount: '你想干嘛？'
  },
  {
    name: '不知道',
    businessOrderNumber: '1',
    businessType: '考核',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    approvalStatus: '待审批',
    pending: '随便',
    assessmentAmount: '抢钱吗？'
  }
])
