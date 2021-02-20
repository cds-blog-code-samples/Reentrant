{
  type: 'transaction',
  actions: [
    {
      type: 'callexternal',
      address: '0x63fb898997d985983B63843bd5a1d6A7AD11b95A',
      contextHash: '0xaa6fa6f3e8c66d0d22c75d3d9e4a959e8344a52be08db0c15ad6692d9097a0e3',
      value: <BN: 0>,
      kind: 'function',
      isDelegate: false,
      functionName: 'beforeEach',
      contractName: 'TestGuard',
      arguments: [],
      actions: [
        {
          type: 'callexternal',
          address: '0xD3915F4ED8AFec3653376798bA11972FdCff807A',
          contextHash: '0x329446cec70faacac48b6224ccbaacff2d3943c54a2d464e23a85fc306f427b8',
          value: <BN: 0>,
          kind: 'constructor',
          isDelegate: undefined,
          functionName: undefined,
          contractName: 'ReentrancyMock',
          arguments: [],
          actions: [],
          salt: null,
          returnKind: 'return',
          returnImmutables: []
        },
        {
          type: 'callexternal',
          address: '0xD3915F4ED8AFec3653376798bA11972FdCff807A',
          contextHash: '0xea03f31f76704c0438f028769292d7ff4c46e41eac0dfefd297df79ffaffe496',
          value: <BN: 0>,
          kind: 'function',
          isDelegate: false,
          functionName: 'callback',
          contractName: 'ReentrancyMock',
          arguments: [],
          actions: [
            {
              type: 'callinternal',
              actions: [],
              functionName: 'count',
              contractName: 'ReentrancyMock',
              arguments: [],
              returnKind: 'return',
              returnValues: []
            }
          ],
          returnValues: [],
          returnKind: 'return'
        },
        {
          type: 'callexternal',
          address: '0xD3915F4ED8AFec3653376798bA11972FdCff807A',
          contextHash: '0xea03f31f76704c0438f028769292d7ff4c46e41eac0dfefd297df79ffaffe496',
          value: <BN: 0>,
          kind: 'function',
          isDelegate: false,
          functionName: 'callback',
          contractName: 'ReentrancyMock',
          arguments: [],
          actions: [
            {
              type: 'callinternal',
              actions: [],
              functionName: 'count',
              contractName: 'ReentrancyMock',
              arguments: [],
              returnKind: 'return',
              returnValues: []
            }
          ],
          returnValues: [],
          returnKind: 'return'
        }
      ],
      returnValues: [],
      returnKind: 'return'
    }
  ],
  origin: '0x074879d0D753cf4A850a6a3614D60d0b2309A58F'
}