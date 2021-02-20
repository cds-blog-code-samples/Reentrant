Test date: 2021 Mar 03



## Local call vulnerable
[link to test...](https://github.com/cds-blog-code-samples/Reentrant/blob/master/test/TestGuard.sol#L50)

##### d1, tx: 0x16d5c105bb6fc54362664639330ddb3d34a480131cd0dc654f022da8b5b80bdb

[SVG :telescope:](https://www.planttext.com/api/plantuml/svg/xLHBZzCm4BxxLrZT2sYfiEFOYQjIRROFbWFQ5VIE_4eRDNKgnn7jilntt3HKVG3Itid1YUUR-MRcqqm0kAkzSBvPbm28nbUsMKlZGBqgx4OuiOQbMHYhxuLQBLpLM3skoih1czbqDXrF0HZMVbUQ4O3jipH26mT_T5S87ofNF5VMYp8hYuLT6-i3O-wF3hC07YWtZTkKvWpuMZmRYEEZxKbeNTW5nAWp_MpVm_TT4Q3B_ydMnMBfQoXtSEwQF0-ym1U-D72-jV11rCi1H5lCD5KOKIbPhcXCMCHOp0Wd16ajYIQnY5E42LOQQSLedACeqYALLAP8QWc2PCg7qgUF6HGrx8Lt3mJPVA6AZGYjpatjFpR2wMy8jnwdXdFNBoPeuuHLky-LMltslxBs06ZJmFxeWWtUtWwWD7dbp5IevPktu0BVHrppjM6gihLtpRwPVTmVlAxJzVi3-9eKeYnbcA9_yF-rkCRwruKTQllV1kncPG-2moQ3fvEXqyQBegp1iDldTpSJD448ZLu-mB2mOGB3nxZQfrSUMh4sUqEcjJDrm8vnevTs1yAvzSRPeD4EFdwtHiDCjNq726rH4gS9rsYIKABoE4if4amGXkC9Gnh9Y22UqNHsJdosGoVNbfAHNAOyvJpHFAKy9VUCf36HcWgiMPPa4umbfzavvVMkNTfQSaunIw8Wo3HAkC9qp1D5OYn9n17D13L8Q4O83-H1s4vUS1VEy3lz1G00)


```plantuml


@startuml

autonumber
skinparam legendBackgroundColor #FEFECE

<style>
      header {
        HorizontalAlignment left
        FontColor purple
        FontSize 14
        Padding 10
      }
    </style>

header Insights by Truffle

title Txn Hash: 0x16d5c105bb6fc54362664639330ddb3d34a480131cd0dc654f022da8b5b80bdb


actor EOA as "EOA"
participant TestGuard_01 as "TestGuard_01"
participant ReentrancyMock_01 as "ReentrancyMock_01"

"EOA" -> "TestGuard_01" ++: beforeEach()
"TestGuard_01" -> "ReentrancyMock_01" ++: constructor()
"ReentrancyMock_01" -> "TestGuard_01" --: 
"TestGuard_01" -> "ReentrancyMock_01" ++: callback()
"ReentrancyMock_01" -> "ReentrancyMock_01" ++: count()
"ReentrancyMock_01" -> "ReentrancyMock_01" --: 
"ReentrancyMock_01" -> "TestGuard_01" --: 
"TestGuard_01" -> "ReentrancyMock_01" ++: callback()
"ReentrancyMock_01" -> "ReentrancyMock_01" ++: count()
"ReentrancyMock_01" -> "ReentrancyMock_01" --: 
"ReentrancyMock_01" -> "TestGuard_01" --: 
"TestGuard_01" -> "EOA" --: 

legend
Participant details
<#FEFECE,#D0D000>|= Alias |= Contract name |= Address |
<#FEFECE>| EOA | Externally Owned Account | 0x074879d0D753cf4A850a6a3614D60d0b2309A58F |
<#FEFECE>| TestGuard_01 | TestGuard | 0x63fb898997d985983B63843bd5a1d6A7AD11b95A |
<#FEFECE>| ReentrancyMock_01 | ReentrancyMock | 0x9516720D0E279c15C97c341b32905Aa5e0ad6339 |
endlegend

@enduml
```

##### d2, tx: 0x525779a052f1c92b3af953ad77d0d96bb344a3bd37d02bfea57e25e4258e5a11

[SVG :telescope:](https://www.planttext.com/api/plantuml/svg/xLTjRzis4FwkNq5a7xgWoqQ9eYW6ML35Bss13IsoRFjIeA18oXOYKov5PN7h_VUTPTcMNz8jJLfiM0rR54-FZiyzF9zqdlUiSiAwUb9udgXTQUf9ggrNNUTcAgoOe4AFj54NGbwFR5aRrIkBqg9lXeFXe3VmlBFApGfzxg7cCzP2QOi-j5E4NfGsVryQ9ugao4Tceeq3ZvbR0uPmSUboMjjfeRSk_9A_ryWFrxRNGgdSZ92FMzEVpNZsGql2QzT_QQfyD7OLIcVeojPP1duzbxj2ewjRWrw8QdoAy2qDA6DSO1falkH1IaJ6AH6ACOKLZzAKXA4WgI8m3z9C2yfqG7KOq5XJuViUI2OTK1-yIf2eq16CHnx8vdAPJmM4UgKhzxmMLht5VeFe6hQXbngqiSB8sS-bl5xXzwpRDoLLfQrRWTUpGw2BiYosWQtb4FZNtEnuRIr7djT4YKxETu91Jv-U8WUMdqefYfueYj_gmcWhqa9_U-pjW1UtxyVM-92GPUvgd5UNMjQsoczqnz4RyyOxQvFlktOyd_-8t6og4On6J9hnHXGrd2pWSrG3TpH71dvaQJj67n3-7gFdlmzUGX8Tel9t31Sn_VFRJavEqISjyxc42BuAiHJ2_oh4KWZyK27k6z6ZudVAImFTBpcR2jdecLVmTFX4vLAedg1Q2ZzdD-RAsSKJQeuckgh42EpeIR_K5JAbGsDnev50emMd9uVbxZ3S45vLwdytwJNBEuY_jNfQMlSWvbPNTU6-EFrbFjs9MsCkjQkjGOyTul5UNkod--TR-dvFRcq_KWSVcNPRlU1BFy9svq-ltzMYUD1wOhFWsfPsROSIiXK7ZI0duMthkj0AkHBH-zI1rKlOVowEDV4xOlcYfU7H8-XMXmEu_rjrMFO72qsyPVFelUuq64exaHTLXqKVzp762nRG8qB70IUzSb4zf5lpIPI2vU7Q-hxpUTDsmV4MDjD0lp53h_umi9U9R7PuyKfpYraOCwvmdr4Yip29AHQH894VzYEiS1eGp1CQ3xSTRxLjdMdZCY9P6lEOSwPuJ7bCBY8IXz0cGakeeeGbVTzFEKssNUwtTxksnZcdViG246GGC2vzskDCaj1FIS0nJGJLMAY84BxjVDC6hiuVm7IxNUpE6wSYIpY9WonYIHp7GHm5kXTBbf2X3E8UbWJ70qQYYqDELsrbTzuubLaaKXQ7CcM3G2lfAp_WIJZWGHzsZd99M1Yn45vHFSYdDgkyPt2i9yLV)


```plantuml


@startuml

autonumber
skinparam legendBackgroundColor #FEFECE

<style>
      header {
        HorizontalAlignment left
        FontColor purple
        FontSize 14
        Padding 10
      }
    </style>

header Insights by Truffle

title Txn Hash: 0x525779a052f1c92b3af953ad77d0d96bb344a3bd37d02bfea57e25e4258e5a11


actor EOA as "EOA"
participant TestGuard_01 as "TestGuard_01"
participant ReentrancyMock_01 as "ReentrancyMock_01"
participant Assert_01 as "Assert_01"
participant AssertBool_01 as "AssertBool_01"
participant AssertUint_01 as "AssertUint_01"

"EOA" -> "TestGuard_01" ++: testLocalCallVulnerable()
"TestGuard_01" -> "ReentrancyMock_01" ++: countThisRecursiveVulnerable(\n\
<#FEFECE,#FEFECE>|= type |= name |= value |\n\
| uint | n | 3 |\n\
) { 0.0 GWEI }
"ReentrancyMock_01" -> "ReentrancyMock_01" ++: count()
"ReentrancyMock_01" -> "ReentrancyMock_01" --: 
"ReentrancyMock_01" -> "ReentrancyMock_01" ++: countThisRecursiveVulnerable(\n\
<#FEFECE,#FEFECE>|= type |= name |= value |\n\
| uint | n | 2 |\n\
) { 0.0 GWEI }
"ReentrancyMock_01" -> "ReentrancyMock_01" ++: count()
"ReentrancyMock_01" -> "ReentrancyMock_01" --: 
"ReentrancyMock_01" -> "ReentrancyMock_01" ++: countThisRecursiveVulnerable(\n\
<#FEFECE,#FEFECE>|= type |= name |= value |\n\
| uint | n | 1 |\n\
) { 0.0 GWEI }
"ReentrancyMock_01" -> "ReentrancyMock_01" ++: count()
"ReentrancyMock_01" -> "ReentrancyMock_01" --: 
"ReentrancyMock_01" -> "ReentrancyMock_01" ++: countThisRecursiveVulnerable(\n\
<#FEFECE,#FEFECE>|= type |= name |= value |\n\
| uint | n | 0 |\n\
) { 0.0 GWEI }
"ReentrancyMock_01" -> "ReentrancyMock_01" --: 
"ReentrancyMock_01" -> "ReentrancyMock_01" --: 
"ReentrancyMock_01" -> "ReentrancyMock_01" --: 
"ReentrancyMock_01" -> "TestGuard_01" --: 
"TestGuard_01" -> "Assert_01" ++: isTrue(\n\
<#FEFECE,#FEFECE>|= type |= name |= value |\n\
| bool | b | true |\n\
| string | message | 'Does not have a guard' |\n\
) { 0.0 GWEI }
"Assert_01" -> "AssertBool_01" ++: isTrue(\n\
<#FEFECE,#FEFECE>|= type |= name |= value |\n\
| bool | b | true |\n\
| string | message | 'Does not have a guard' |\n\
) { 0.0 GWEI }
"AssertBool_01" -> "AssertBool_01" ++: _report(\n\
<#FEFECE,#FEFECE>|= type |= name |= value |\n\
| bool | result | true |\n\
| string | message | 'Does not have a guard' |\n\
) { 0.0 GWEI }
"AssertBool_01" -> "AssertBool_01" --: 
"AssertBool_01" -> "Assert_01" --: Return (\n\
<#FEFECE,#FEFECE>|= type |= name |= value |\n\
| bool | result | true |\n\
)
"Assert_01" -> "TestGuard_01" --: Return (\n\
<#FEFECE,#FEFECE>|= type |= name |= value |\n\
| bool | result | true |\n\
)
"TestGuard_01" -> "ReentrancyMock_01" ++: counter()
"ReentrancyMock_01" -> "TestGuard_01" --: Return (\n\
<#FEFECE,#FEFECE>|= type |= name |= value |\n\
| uint |  | 5 |\n\
)
"TestGuard_01" -> "Assert_01" ++: equal(\n\
<#FEFECE,#FEFECE>|= type |= name |= value |\n\
| uint | a | 5 |\n\
| uint | b | 5 |\n\
| string | message | 'counter got tickled to 5' |\n\
) { 0.0 GWEI }
"Assert_01" -> "AssertUint_01" ++: equal(\n\
<#FEFECE,#FEFECE>|= type |= name |= value |\n\
| uint | a | 5 |\n\
| uint | b | 5 |\n\
| string | message | 'counter got tickled to 5' |\n\
) { 0.0 GWEI }
"AssertUint_01" -> "AssertUint_01" ++: _report(\n\
<#FEFECE,#FEFECE>|= type |= name |= value |\n\
| bool | result | true |\n\
| string | message | 'counter got tickled to 5' |\n\
) { 0.0 GWEI }
"AssertUint_01" -> "AssertUint_01" --: 
"AssertUint_01" -> "Assert_01" --: Return (\n\
<#FEFECE,#FEFECE>|= type |= name |= value |\n\
| bool | result | true |\n\
)
"Assert_01" -> "TestGuard_01" --: Return (\n\
<#FEFECE,#FEFECE>|= type |= name |= value |\n\
| bool | result | true |\n\
)
"TestGuard_01" -> "EOA" --: 

legend
Participant details
<#FEFECE,#D0D000>|= Alias |= Contract name |= Address |
<#FEFECE>| EOA | Externally Owned Account | 0x074879d0D753cf4A850a6a3614D60d0b2309A58F |
<#FEFECE>| TestGuard_01 | TestGuard | 0x63fb898997d985983B63843bd5a1d6A7AD11b95A |
<#FEFECE>| ReentrancyMock_01 | ReentrancyMock | 0x9516720D0E279c15C97c341b32905Aa5e0ad6339 |
<#FEFECE>| Assert_01 | Assert | 0x63fb898997d985983B63843bd5a1d6A7AD11b95A |
<#FEFECE>| AssertBool_01 | AssertBool | 0xafA9382f67A8882862eC8c7A3Fc28C0c308E736B |
<#FEFECE>| AssertUint_01 | AssertUint | 0xcf6ab784cb7E2edc1d129A4E92DD7559c3746740 |
endlegend

@enduml
```
