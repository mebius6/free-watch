import unit from '../unit'

// 考核
unit.mock('daily/submitAssessment/list', 'get', [
  {
    name: '不知道',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    approver: '随便',
    assessmentAmount: 999,
    data: [
      {
        state: 'A', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '审批中',
        title: '张某审批中',
        time: '已等待22分钟44秒',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      },
      {
        state: 'B', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '同意',
        title: '张XXX已审批',
        time: '09-10 19:29:30',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      },
      {
        state: 'B', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '同意',
        title: '王XXX已审批',
        time: '09-10 19:29:30',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      },
      {
        state: 'C', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '',
        title: '提交申请',
        time: '09-10 不知道',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      }
    ]
  }
])

//出差
unit.mock('daily/submitBusinessTrip/list', 'get', [
  {
    name: 'submitBusinessTrip',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    approver: '随便',
    businessTrip: '我要出差还要理由？',
    startingCity: '上海',
    destinationCity: '南京',
    startingTime: '2019-01-10 下午',
    endTime: '2019-10-01 下午',
    duration: '10',
    businessDays: '100',
    data: [
      {
        state: 'A', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '审批中',
        title: '张某审批中',
        time: '已等待22分钟44秒',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      },
      {
        state: 'B', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '同意',
        title: '张XXX已审批',
        time: '09-10 19:29:30',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      },
      {
        state: 'B', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '同意',
        title: '王XXX已审批',
        time: '09-10 19:29:30',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      },
      {
        state: 'C', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '',
        title: '提交申请',
        time: '09-10 不知道',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      }
    ]
  },
  {
    name: 'submitBusinessTrip',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    approver: '随便',
    businessTrip: '我要出差还要理由？',
    startingCity: '上海',
    destinationCity: '南京',
    startingTime: '2019-01-10 下午',
    endTime: '2019-10-01 下午',
    duration: '10',
    businessDays: '100',
    data: [
      {
        state: 'A', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '审批中',
        title: '张某审批中',
        time: '已等待22分钟44秒',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      },
      {
        state: 'B', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '同意',
        title: '张XXX已审批',
        time: '09-10 19:29:30',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      },
      {
        state: 'B', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '同意',
        title: '王XXX已审批',
        time: '09-10 19:29:30',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      },
      {
        state: 'C', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '不同意',
        title: '提交申请',
        time: '09-10 不知道',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      }
    ]
  }
])

//请假
unit.mock('daily/submitLeave/list', 'get', [
  {
    name: '不知道',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    approver: '随便',
    startingTime: '2019-01-10 08:00',
    endTime: '2019-10-01 23:00',
    duration: 10,
    data: [
      {
        state: 'A', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '审批中',
        title: '张某审批中',
        time: '已等待22分钟44秒',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      },
      {
        state: 'B', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '同意',
        title: '张XXX已审批',
        time: '09-10 19:29:30',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      },
      {
        state: 'B', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '同意',
        title: '王XXX已审批',
        time: '09-10 19:29:30',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      },
      {
        state: 'C', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '',
        title: '提交申请',
        time: '09-10 不知道',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      }
    ]
  }
])

//非合约申购
unit.mock('daily/submitPurchase/list', 'get', [
  {
    name: '不知道',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    approver: '随便',
    associatedOrderNumber: '455678879',
    clientName: '雨你无瓜',
    a: '家乐邦 发泡胶 大理石胶',
    b: '规格 型号 档次 颜色',
    c: '单位 包装',
    money: 18,
    count: 3,
    data: [
      {
        state: 'A', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '审批中',
        title: '张某审批中',
        time: '已等待22分钟44秒',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      },
      {
        state: 'B', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '同意',
        title: '张XXX已审批',
        time: '09-10 19:29:30',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      },
      {
        state: 'B', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '同意',
        title: '王XXX已审批',
        time: '09-10 19:29:30',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      },
      {
        state: 'C', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '',
        title: '提交申请',
        time: '09-10 不知道',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      }
    ]
  },
  {
    name: '不知道',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    approver: '随便',
    associatedOrderNumber: '455678879',
    clientName: '雨你无瓜',
    a: '家乐邦 发泡胶 大理石胶',
    b: '规格 型号 档次 颜色',
    c: '单位 包装',
    money: 18,
    count: 3,
    data: [
      {
        state: 'A', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '审批中',
        title: '张某审批中',
        time: '已等待22分钟44秒',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      },
      {
        state: 'B', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '同意',
        title: '张XXX已审批',
        time: '09-10 19:29:30',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      },
      {
        state: 'B', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '同意',
        title: '王XXX已审批',
        time: '09-10 19:29:30',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      },
      {
        state: 'C', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '不同意',
        title: '提交申请',
        time: '09-10 不知道',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      }
    ]
  },
  {
    name: '不知道',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    approver: '随便',
    associatedOrderNumber: '455678879',
    clientName: '雨你无瓜',
    a: '家乐邦 发泡胶 大理石胶',
    b: '规格 型号 档次 颜色',
    c: '单位 包装',
    money: 18,
    count: 3,
    data: [
      {
        state: 'A', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '审批中',
        title: '张某审批中',
        time: '已等待22分钟44秒',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      },
      {
        state: 'B', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '同意',
        title: '张XXX已审批',
        time: '09-10 19:29:30',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      },
      {
        state: 'B', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '同意',
        title: '王XXX已审批',
        time: '09-10 19:29:30',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      },
      {
        state: 'C', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '不同意',
        title: '提交申请',
        time: '09-10 不知道',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      }
    ]
  },
  {
    name: '不知道',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    approver: '随便',
    associatedOrderNumber: '455678879',
    clientName: '雨你无瓜',
    a: '家乐邦 发泡胶 大理石胶',
    b: '规格 型号 档次 颜色',
    c: '单位 包装',
    money: 18,
    count: 3,
    data: [
      {
        state: 'A', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '审批中',
        title: '张某审批中',
        time: '已等待22分钟44秒',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      },
      {
        state: 'B', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '同意',
        title: '张XXX已审批',
        time: '09-10 19:29:30',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      },
      {
        state: 'B', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '同意',
        title: '王XXX已审批',
        time: '09-10 19:29:30',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      },
      {
        state: 'C', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '不同意',
        title: '提交申请',
        time: '09-10 不知道',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      }
    ]
  }
])

//报销
unit.mock('daily/submitReimburse/list', 'get', [
  {
    name: '不知道',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    approver: '随便',
    clientName: '雨你无瓜',
    costCategory: '不知道',
    invoiceType: '普通发票10%',
    totalPriceTax: '100.00',
    advanceablePerson: '10',
    data: [
      {
        state: 'A', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '审批中',
        title: '张某审批中',
        time: '已等待22分钟44秒',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      },
      {
        state: 'B', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '同意',
        title: '张XXX已审批',
        time: '09-10 19:29:30',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      },
      {
        state: 'B', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '同意',
        title: '王XXX已审批',
        time: '09-10 19:29:30',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      },
      {
        state: 'C', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '',
        title: '提交申请',
        time: '09-10 不知道',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      }
    ]
  }
])

//领用
unit.mock('daily/submitUse/list', 'get', [
  {
    name: '不知道',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    approver: '随便',
    clientName: '雨你无瓜',
    a: '家乐邦 发泡胶 大理石胶',
    b: '规格 型号 档次 颜色',
    c: '单位 包装',
    count: 3,
    data: [
      {
        state: 'A', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '审批中',
        title: '张某审批中',
        time: '已等待22分钟44秒',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      },
      {
        state: 'B', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '同意',
        title: '张XXX已审批',
        time: '09-10 19:29:30',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      },
      {
        state: 'B', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '同意',
        title: '王XXX已审批',
        time: '09-10 19:29:30',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      },
      {
        state: 'C', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '',
        title: '提交申请',
        time: '09-10 不知道',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      }
    ]
  },
  {
    name: '不知道',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    approver: '随便',
    clientName: '雨你无瓜',
    a: '家乐邦 发泡胶 大理石胶',
    b: '规格 型号 档次 颜色',
    c: '单位 包装',
    count: 3,
    data: [
      {
        state: 'A', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '审批中',
        title: '张某审批中',
        time: '已等待22分钟44秒',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      },
      {
        state: 'B', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '同意',
        title: '张XXX已审批',
        time: '09-10 19:29:30',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      },
      {
        state: 'B', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '同意',
        title: '王XXX已审批',
        time: '09-10 19:29:30',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      },
      {
        state: 'C', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '不同意',
        title: '提交申请',
        time: '09-10 不知道',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      }
    ]
  },
  {
    name: '不知道',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    approver: '随便',
    clientName: '雨你无瓜',
    a: '家乐邦 发泡胶 大理石胶',
    b: '规格 型号 档次 颜色',
    c: '单位 包装',
    count: 3,
    data: [
      {
        state: 'A', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '审批中',
        title: '张某审批中',
        time: '已等待22分钟44秒',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      },
      {
        state: 'B', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '同意',
        title: '张XXX已审批',
        time: '09-10 19:29:30',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      },
      {
        state: 'B', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '同意',
        title: '王XXX已审批',
        time: '09-10 19:29:30',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      },
      {
        state: 'C', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '不同意',
        title: '提交申请',
        time: '09-10 不知道',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      }
    ]
  },
  {
    name: '不知道',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    approver: '随便',
    clientName: '雨你无瓜',
    a: '家乐邦 发泡胶 大理石胶',
    b: '规格 型号 档次 颜色',
    c: '单位 包装',
    count: 3,
    data: [
      {
        state: 'A', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '审批中',
        title: '张某审批中',
        time: '已等待22分钟44秒',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      },
      {
        state: 'B', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '同意',
        title: '张XXX已审批',
        time: '09-10 19:29:30',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      },
      {
        state: 'B', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '同意',
        title: '王XXX已审批',
        time: '09-10 19:29:30',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      },
      {
        state: 'C', //状态 C:提交申请 A:审批中 B:同意 B:不同意
        content: '不同意',
        title: '提交申请',
        time: '09-10 不知道',
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
      }
    ]
  }
])
