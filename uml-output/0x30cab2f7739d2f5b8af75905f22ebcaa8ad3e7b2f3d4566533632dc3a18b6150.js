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
      functionName: 'testAnotherFunctionVulnerable',
      contractName: 'TestGuard',
      arguments: [],
      actions: [
        {
          type: 'callexternal',
          address: '0x43b5bD3bf8a54a6e03080a4FeffE70Fe04519A16',
          contextHash: '0xea03f31f76704c0438f028769292d7ff4c46e41eac0dfefd297df79ffaffe496',
          value: <BN: 0>,
          kind: 'function',
          isDelegate: false,
          functionName: 'countWithHelperVulnerable',
          contractName: 'ReentrancyMock',
          arguments: [
            {
              name: 'n',
              value: {
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: { asBN: <BN: a>, rawAsBN: <BN: a> }
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
              type: 'callinternal',
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
                  type: 'callinternal',
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
                      type: 'callinternal',
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
                          type: 'callinternal',
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
                              type: 'callinternal',
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
                                  type: 'callinternal',
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
                                      type: 'callinternal',
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
                                          type: 'callinternal',
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
                                              type: 'callinternal',
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
                                                  type: 'callinternal',
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
                                                      type: 'callinternal',
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
                                                          type: 'callinternal',
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
                                                              type: 'callinternal',
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
                                                                  type: 'callinternal',
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
                                                                      type: 'callinternal',
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
                                                                          type: 'callinternal',
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
                                                                              type: 'callinternal',
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
                                                                                  type: 'callinternal',
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
                                                                                      type: 'callinternal',
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
                                                                                          type: 'callinternal',
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
                                                                                              type: 'callinternal',
                                                                                              actions: [],
                                                                                              functionName: 'countLocalRecursiveVulnerable',
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
                                                                                                    value: {
                                                                                                      asBN: <BN: 0>,
                                                                                                      rawAsBN: <BN: 0>
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              ],
                                                                                              returnKind: 'return',
                                                                                              returnValues: []
                                                                                            }
                                                                                          ],
                                                                                          functionName: 'countLocalRecursiveVulnerable',
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
                                                                                                value: {
                                                                                                  asBN: <BN: 1>,
                                                                                                  rawAsBN: <BN: 1>
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          ],
                                                                                          returnKind: 'return',
                                                                                          returnValues: []
                                                                                        }
                                                                                      ],
                                                                                      functionName: 'countLocalRecursiveVulnerable',
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
                                                                                            value: {
                                                                                              asBN: <BN: 2>,
                                                                                              rawAsBN: <BN: 2>
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      ],
                                                                                      returnKind: 'return',
                                                                                      returnValues: []
                                                                                    }
                                                                                  ],
                                                                                  functionName: 'countLocalRecursiveVulnerable',
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
                                                                                        value: {
                                                                                          asBN: <BN: 3>,
                                                                                          rawAsBN: <BN: 3>
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  ],
                                                                                  returnKind: 'return',
                                                                                  returnValues: []
                                                                                }
                                                                              ],
                                                                              functionName: 'countLocalRecursiveVulnerable',
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
                                                                                    value: {
                                                                                      asBN: <BN: 4>,
                                                                                      rawAsBN: <BN: 4>
                                                                                    }
                                                                                  }
                                                                                }
                                                                              ],
                                                                              returnKind: 'return',
                                                                              returnValues: []
                                                                            }
                                                                          ],
                                                                          functionName: 'countLocalRecursiveVulnerable',
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
                                                                                value: {
                                                                                  asBN: <BN: 5>,
                                                                                  rawAsBN: <BN: 5>
                                                                                }
                                                                              }
                                                                            }
                                                                          ],
                                                                          returnKind: 'return',
                                                                          returnValues: []
                                                                        }
                                                                      ],
                                                                      functionName: 'countLocalRecursiveVulnerable',
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
                                                                            value: {
                                                                              asBN: <BN: 6>,
                                                                              rawAsBN: <BN: 6>
                                                                            }
                                                                          }
                                                                        }
                                                                      ],
                                                                      returnKind: 'return',
                                                                      returnValues: []
                                                                    }
                                                                  ],
                                                                  functionName: 'countLocalRecursiveVulnerable',
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
                                                                        value: {
                                                                          asBN: <BN: 7>,
                                                                          rawAsBN: <BN: 7>
                                                                        }
                                                                      }
                                                                    }
                                                                  ],
                                                                  returnKind: 'return',
                                                                  returnValues: []
                                                                }
                                                              ],
                                                              functionName: 'countLocalRecursiveVulnerable',
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
                                                                    value: {
                                                                      asBN: <BN: 8>,
                                                                      rawAsBN: <BN: 8>
                                                                    }
                                                                  }
                                                                }
                                                              ],
                                                              returnKind: 'return',
                                                              returnValues: []
                                                            }
                                                          ],
                                                          functionName: 'countLocalRecursiveVulnerable',
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
                                                                value: {
                                                                  asBN: <BN: 9>,
                                                                  rawAsBN: <BN: 9>
                                                                }
                                                              }
                                                            }
                                                          ],
                                                          returnKind: 'return',
                                                          returnValues: []
                                                        }
                                                      ],
                                                      functionName: 'countLocalRecursiveVulnerable',
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
                                                            value: {
                                                              asBN: <BN: a>,
                                                              rawAsBN: <BN: a>
                                                            }
                                                          }
                                                        }
                                                      ],
                                                      returnKind: 'return',
                                                      returnValues: []
                                                    }
                                                  ],
                                                  functionName: 'countLocalRecursiveVulnerable',
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
                                                        value: {
                                                          asBN: <BN: b>,
                                                          rawAsBN: <BN: b>
                                                        }
                                                      }
                                                    }
                                                  ],
                                                  returnKind: 'return',
                                                  returnValues: []
                                                }
                                              ],
                                              functionName: 'countLocalRecursiveVulnerable',
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
                                                    value: {
                                                      asBN: <BN: c>,
                                                      rawAsBN: <BN: c>
                                                    }
                                                  }
                                                }
                                              ],
                                              returnKind: 'return',
                                              returnValues: []
                                            }
                                          ],
                                          functionName: 'countLocalRecursiveVulnerable',
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
                                                value: {
                                                  asBN: <BN: d>,
                                                  rawAsBN: <BN: d>
                                                }
                                              }
                                            }
                                          ],
                                          returnKind: 'return',
                                          returnValues: []
                                        }
                                      ],
                                      functionName: 'countLocalRecursiveVulnerable',
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
                                            value: {
                                              asBN: <BN: e>,
                                              rawAsBN: <BN: e>
                                            }
                                          }
                                        }
                                      ],
                                      returnKind: 'return',
                                      returnValues: []
                                    }
                                  ],
                                  functionName: 'countLocalRecursiveVulnerable',
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
                                        value: {
                                          asBN: <BN: f>,
                                          rawAsBN: <BN: f>
                                        }
                                      }
                                    }
                                  ],
                                  returnKind: 'return',
                                  returnValues: []
                                }
                              ],
                              functionName: 'countLocalRecursiveVulnerable',
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
                                    value: {
                                      asBN: <BN: 10>,
                                      rawAsBN: <BN: 10>
                                    }
                                  }
                                }
                              ],
                              returnKind: 'return',
                              returnValues: []
                            }
                          ],
                          functionName: 'countLocalRecursiveVulnerable',
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
                                value: { asBN: <BN: 11>, rawAsBN: <BN: 11> }
                              }
                            }
                          ],
                          returnKind: 'return',
                          returnValues: []
                        }
                      ],
                      functionName: 'countLocalRecursiveVulnerable',
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
                            value: { asBN: <BN: 12>, rawAsBN: <BN: 12> }
                          }
                        }
                      ],
                      returnKind: 'return',
                      returnValues: []
                    }
                  ],
                  functionName: 'countLocalRecursiveVulnerable',
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
                        value: { asBN: <BN: 13>, rawAsBN: <BN: 13> }
                      }
                    }
                  ],
                  returnKind: 'return',
                  returnValues: []
                }
              ],
              functionName: 'countLocalRecursiveVulnerable',
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
                    value: { asBN: <BN: 14>, rawAsBN: <BN: 14> }
                  }
                }
              ],
              returnKind: 'return',
              returnValues: []
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
          address: '0x43b5bD3bf8a54a6e03080a4FeffE70Fe04519A16',
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
                value: { asBN: <BN: 17>, rawAsBN: <BN: 17> }
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
                    value: { asBN: <BN: 17>, rawAsBN: <BN: 17> }
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
                    value: { asBN: <BN: 17>, rawAsBN: <BN: 17> }
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
                      asString: 'counter should remain 23'
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
                          asString: 'counter should remain 23'
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
                value: { asBN: <BN: 17>, rawAsBN: <BN: 17> }
              }
            },
            {
              name: 'b',
              value: {
                type: { typeClass: 'uint', bits: 256, typeHint: 'uint256' },
                kind: 'value',
                value: { asBN: <BN: 17>, rawAsBN: <BN: 17> }
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
                value: { kind: 'valid', asString: 'counter should remain 23' }
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