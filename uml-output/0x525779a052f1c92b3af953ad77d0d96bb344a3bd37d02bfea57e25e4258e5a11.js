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
      functionName: 'testLocalCallVulnerable',
      contractName: 'TestGuard',
      arguments: [],
      actions: [
        {
          type: 'callexternal',
          address: '0x9516720D0E279c15C97c341b32905Aa5e0ad6339',
          contextHash: '0xea03f31f76704c0438f028769292d7ff4c46e41eac0dfefd297df79ffaffe496',
          value: <BN: 0>,
          kind: 'function',
          isDelegate: false,
          functionName: 'countThisRecursiveVulnerable',
          contractName: 'ReentrancyMock',
          arguments: [
            {
              name: 'n',
              value: {
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: { asBN: <BN: 3>, rawAsBN: <BN: 3> }
              }
            }
          ],
          actions: [
            {
              type: 'callinternal',
              actions: [],
              functionName: 'count',
              contractName: 'ReentrancyMock',
              arguments: [],
              returnKind: 'return',
              returnValues: []
            },
            {
              type: 'callexternal',
              address: '0x9516720D0E279c15C97c341b32905Aa5e0ad6339',
              contextHash: '0xea03f31f76704c0438f028769292d7ff4c46e41eac0dfefd297df79ffaffe496',
              value: <BN: 0>,
              kind: 'function',
              isDelegate: false,
              functionName: 'countThisRecursiveVulnerable',
              contractName: 'ReentrancyMock',
              arguments: [
                {
                  name: 'n',
                  value: {
                    type: {
                      typeClass: 'uint',
                      bits: 256,
                      typeHint: 'uint256'
                    },
                    kind: 'value',
                    value: { asBN: <BN: 2>, rawAsBN: <BN: 2> }
                  }
                }
              ],
              actions: [
                {
                  type: 'callinternal',
                  actions: [],
                  functionName: 'count',
                  contractName: 'ReentrancyMock',
                  arguments: [],
                  returnKind: 'return',
                  returnValues: []
                },
                {
                  type: 'callexternal',
                  address: '0x9516720D0E279c15C97c341b32905Aa5e0ad6339',
                  contextHash: '0xea03f31f76704c0438f028769292d7ff4c46e41eac0dfefd297df79ffaffe496',
                  value: <BN: 0>,
                  kind: 'function',
                  isDelegate: false,
                  functionName: 'countThisRecursiveVulnerable',
                  contractName: 'ReentrancyMock',
                  arguments: [
                    {
                      name: 'n',
                      value: {
                        type: {
                          typeClass: 'uint',
                          bits: 256,
                          typeHint: 'uint256'
                        },
                        kind: 'value',
                        value: { asBN: <BN: 1>, rawAsBN: <BN: 1> }
                      }
                    }
                  ],
                  actions: [
                    {
                      type: 'callinternal',
                      actions: [],
                      functionName: 'count',
                      contractName: 'ReentrancyMock',
                      arguments: [],
                      returnKind: 'return',
                      returnValues: []
                    },
                    {
                      type: 'callexternal',
                      address: '0x9516720D0E279c15C97c341b32905Aa5e0ad6339',
                      contextHash: '0xea03f31f76704c0438f028769292d7ff4c46e41eac0dfefd297df79ffaffe496',
                      value: <BN: 0>,
                      kind: 'function',
                      isDelegate: false,
                      functionName: 'countThisRecursiveVulnerable',
                      contractName: 'ReentrancyMock',
                      arguments: [
                        {
                          name: 'n',
                          value: {
                            type: {
                              typeClass: 'uint',
                              bits: 256,
                              typeHint: 'uint256'
                            },
                            kind: 'value',
                            value: { asBN: <BN: 0>, rawAsBN: <BN: 0> }
                          }
                        }
                      ],
                      actions: [],
                      returnValues: [],
                      returnKind: 'return'
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
          returnValues: [],
          returnKind: 'return'
        },
        {
          type: 'callinternal',
          actions: [
            {
              type: 'callexternal',
              address: '0xafA9382f67A8882862eC8c7A3Fc28C0c308E736B',
              contextHash: '0xc715c5f6f68c51b4edc1126a02ac29933f613a073ba8cd6164b516aa407f9897',
              value: null,
              kind: 'function',
              isDelegate: true,
              functionName: 'isTrue',
              contractName: 'AssertBool',
              arguments: [
                {
                  name: 'b',
                  value: {
                    type: { typeClass: 'bool', typeHint: 'bool' },
                    kind: 'value',
                    value: { asBoolean: true }
                  }
                },
                {
                  name: 'message',
                  value: {
                    type: {
                      typeClass: 'string',
                      location: 'memory',
                      typeHint: 'string'
                    },
                    kind: 'value',
                    value: {
                      kind: 'valid',
                      asString: 'Does not have a guard'
                    }
                  }
                }
              ],
              actions: [
                {
                  type: 'callinternal',
                  actions: [],
                  functionName: '_report',
                  contractName: 'AssertBool',
                  arguments: [
                    {
                      name: 'result',
                      value: {
                        type: { typeClass: 'bool', typeHint: 'bool' },
                        kind: 'value',
                        value: { asBoolean: true }
                      }
                    },
                    {
                      name: 'message',
                      value: {
                        type: {
                          typeClass: 'string',
                          location: 'memory',
                          typeHint: 'string'
                        },
                        kind: 'value',
                        value: {
                          kind: 'valid',
                          asString: 'Does not have a guard'
                        }
                      }
                    }
                  ],
                  returnKind: 'return',
                  returnValues: []
                }
              ],
              returnValues: [
                {
                  name: 'result',
                  value: {
                    type: { typeClass: 'bool', typeHint: 'bool' },
                    kind: 'value',
                    value: { asBoolean: true }
                  }
                }
              ],
              returnKind: 'return'
            }
          ],
          functionName: 'isTrue',
          contractName: 'Assert',
          arguments: [
            {
              name: 'b',
              value: {
                type: { typeClass: 'bool', typeHint: 'bool' },
                kind: 'value',
                value: { asBoolean: true }
              }
            },
            {
              name: 'message',
              value: {
                type: {
                  typeClass: 'string',
                  location: 'memory',
                  typeHint: 'string'
                },
                kind: 'value',
                value: { kind: 'valid', asString: 'Does not have a guard' }
              }
            }
          ],
          returnKind: 'return',
          returnValues: [
            {
              name: 'result',
              value: {
                type: { typeClass: 'bool', typeHint: 'bool' },
                kind: 'value',
                value: { asBoolean: true }
              }
            }
          ]
        },
        {
          type: 'callexternal',
          address: '0x9516720D0E279c15C97c341b32905Aa5e0ad6339',
          contextHash: '0xea03f31f76704c0438f028769292d7ff4c46e41eac0dfefd297df79ffaffe496',
          value: <BN: 0>,
          kind: 'function',
          isDelegate: false,
          functionName: 'counter',
          contractName: 'ReentrancyMock',
          arguments: [],
          actions: [],
          returnValues: [
            {
              value: {
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: { asBN: <BN: 5>, rawAsBN: <BN: 5> }
              }
            }
          ],
          returnKind: 'return'
        },
        {
          type: 'callinternal',
          actions: [
            {
              type: 'callexternal',
              address: '0xcf6ab784cb7E2edc1d129A4E92DD7559c3746740',
              contextHash: '0xf4fdb082fc252313b869cb4b0435b86dea62bfaf952265cc8a64229a1d2a6cef',
              value: null,
              kind: 'function',
              isDelegate: true,
              functionName: 'equal',
              contractName: 'AssertUint',
              arguments: [
                {
                  name: 'a',
                  value: {
                    type: {
                      typeClass: 'uint',
                      bits: 256,
                      typeHint: 'uint256'
                    },
                    kind: 'value',
                    value: { asBN: <BN: 5>, rawAsBN: <BN: 5> }
                  }
                },
                {
                  name: 'b',
                  value: {
                    type: {
                      typeClass: 'uint',
                      bits: 256,
                      typeHint: 'uint256'
                    },
                    kind: 'value',
                    value: { asBN: <BN: 5>, rawAsBN: <BN: 5> }
                  }
                },
                {
                  name: 'message',
                  value: {
                    type: {
                      typeClass: 'string',
                      location: 'memory',
                      typeHint: 'string'
                    },
                    kind: 'value',
                    value: {
                      kind: 'valid',
                      asString: 'counter got tickled to 5'
                    }
                  }
                }
              ],
              actions: [
                {
                  type: 'callinternal',
                  actions: [],
                  functionName: '_report',
                  contractName: 'AssertUint',
                  arguments: [
                    {
                      name: 'result',
                      value: {
                        type: { typeClass: 'bool', typeHint: 'bool' },
                        kind: 'value',
                        value: { asBoolean: true }
                      }
                    },
                    {
                      name: 'message',
                      value: {
                        type: {
                          typeClass: 'string',
                          location: 'memory',
                          typeHint: 'string'
                        },
                        kind: 'value',
                        value: {
                          kind: 'valid',
                          asString: 'counter got tickled to 5'
                        }
                      }
                    }
                  ],
                  returnKind: 'return',
                  returnValues: []
                }
              ],
              returnValues: [
                {
                  name: 'result',
                  value: {
                    type: { typeClass: 'bool', typeHint: 'bool' },
                    kind: 'value',
                    value: { asBoolean: true }
                  }
                }
              ],
              returnKind: 'return'
            }
          ],
          functionName: 'equal',
          contractName: 'Assert',
          arguments: [
            {
              name: 'a',
              value: {
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: { asBN: <BN: 5>, rawAsBN: <BN: 5> }
              }
            },
            {
              name: 'b',
              value: {
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: { asBN: <BN: 5>, rawAsBN: <BN: 5> }
              }
            },
            {
              name: 'message',
              value: {
                type: {
                  typeClass: 'string',
                  location: 'memory',
                  typeHint: 'string'
                },
                kind: 'value',
                value: { kind: 'valid', asString: 'counter got tickled to 5' }
              }
            }
          ],
          returnKind: 'return',
          returnValues: [
            {
              name: 'result',
              value: {
                type: { typeClass: 'bool', typeHint: 'bool' },
                kind: 'value',
                value: { asBoolean: true }
              }
            }
          ]
        }
      ],
      returnValues: [],
      returnKind: 'return'
    }
  ],
  origin: '0x074879d0D753cf4A850a6a3614D60d0b2309A58F'
}