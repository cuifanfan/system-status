const data = {
    // status：0标识设备故障， 1表示正常
    // enable: 0标识禁用，1标识启用
    processors: [
        {
            name: '处理机1',
            status: 1,
            desc: '处理机1故障',
            enable: 1,
            subItems: [
                { name: '相机1-1', status: 1, desc: '相机1-1故障', enable: 1 },
                { name: '相机1-2', status: 0, desc: '相机1-2故障', enable: 1 },
                { name: '相机1-3', status: 1, desc: '相机1-3故障', enable: 1 },
                { name: '相机1-4', status: 0, desc: '相机1-4故障', enable: 1 },
                // ... 
            ]
        },
        {
            name: '处理机2',
            status: 1,
            desc: '处理机2故障',
            enable: 1,
            subItems: [
                { name: '相机2-1', status: 1, desc: '相机2-1故障', enable: 1 },
                { name: '相机2-2', status: 0, desc: '相机2-2故障', enable: 1 },
                { name: '相机2-3', status: 1, desc: '相机2-3故障', enable: 1 },
                { name: '相机2-4', status: 0, desc: '相机2-4故障', enable: 1 },
                { name: '相机2-5', status: 0, desc: '相机2-5故障', enable: 1 },
                { name: '相机2-6', status: 0, desc: '相机2-6故障', enable: 1 },
                // ...
            ]
        },
        {
            name: '处理机3',
            status: 0,
            desc: '处理机3故障',
            enable: 1,
            subItems: [
                { name: '相机3-1', status: 1, desc: '相机3-1故障', enable: 1 },
                { name: '相机3-2', status: 0, desc: '相机3-2故障', enable: 1 },
                { name: '相机3-3', status: 1, desc: '相机3-3故障', enable: 1 },
                { name: '相机3-4', status: 0, desc: '相机3-4故障', enable: 0 },
                // ...
            ]
        },
    ],
    controlBox: {
        name: '控制盒',
        status: 1,
        desc: '控制盒故障',
        enable: 1,
        subItems: [
             { name: '光源', status: 1, desc:'光源故障', enable: 1 },
        	 { name: '光电开关', status: 0, desc: '光电开关故障', enable: 1 },
        	 { name:'编码器', status: 0, desc: '编码器故障', enable: 1 },
        	 { name:'电机', status: 1, desc: '电机故障', enable: 1 }
		]
    },
    ups: { name: 'UPS', status: 0, desc: 'UPS故障', enable: 1 },
    tailGateStation: { name: '尾门站', status: 1, desc: '尾门站故障', enable: 1 },
    dataPlatform: { name:'数据平台', status: 1, desc: '数据平台故障', enable: 1 },
    dataDockService: { name:'数据对接服务', status: 0, desc: '数据对接服务故障', enable: 1 },
    mainControl: { name:'主控机', status: 0, desc: '主控机故障', enable: 1 },
    gateStation: { name:'尾门站', status: 0, desc: '尾门站故障', enable: 1 },
}

