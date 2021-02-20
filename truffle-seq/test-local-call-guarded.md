Test date: 2021 Mar 03



## Local call Guarded
[link to test...](https://github.com/cds-blog-code-samples/Reentrant/blob/master/test/TestGuard.sol#L38)

##### d1, tx: 0xaa8471c642192ed67c13b748777df9396a2cf2580e2eb17d163171791c3b47b8

[SVG :telescope:](https://www.planttext.com/api/plantuml/svg/xLJ9Rjim4BtpAuZaqY8DIeeIbo0r8czD3qM2DlU2csmXCcLG56gdwR-NabN3Zji2kLS7IfpbpSp3F05mqmJfGxkg091jg5sxKjQ3vh5qQ-db2bPsOPqPI_suy7NhpAIkQW_FvxFvR383uBe9sygE0EoVfPN6UlXZk49uM_logNP1LdbLBjpAkX0HYx0Fc4Vd3dBT-dLbZnnVooSBSRgttKjZIhU060scd_tx-ltG11ZgVt9DkLY61gejVF1jKKHS4CfGMVYmSV1MDiihY3PIyfHXJTC4YyGQoZGcYgMSCMOAGGILYIwIZ2ERM8MPmPHWXfd0cgYKAGuYPJh4rcTtEPGDF8llCn1f2wKkrpAE-c2RyB6Ltdn3k8yuD1o7Vh6H6o-TtdwkzUFl-1Fh6G1z6NWvUe46BowkeB95xUrCwkMRj-25lyiunUlJTEsQuDjkc2xl3r6dvIulh-1hIiYgKd6B_e7_r-PQ5rwNjklj_nXms9NE2NPA1lS7IsTia6NLWEj1p-_EfsYA41ezVu1Hi743uyUaxihh09rSsSwG6-Dj4ttxlD5phu5uReBrBdAqXNVVdJKmr_tSqOKsgDEMC6ZACgABDESPabGIYjCfHGQfX22HPtn-37oaeODh3qb9eRZWGZ0ZU2Ou6LF2Kw9C9h6XESkd62kHvSUGfrfxQUl1ay9WJiUOK8ejLvDCip53M52IC4FIN1PZP3aN4JmIEz0BRk8PVwU_0000)


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

title Txn Hash: 0xaa8471c642192ed67c13b748777df9396a2cf2580e2eb17d163171791c3b47b8


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
<#FEFECE>| ReentrancyMock_01 | ReentrancyMock | 0x2fd186B13661e8bC5c7B70196327d34AafB0e889 |
endlegend

@enduml
```

##### d2, tx: 0xf5cff285aafc515433113dc8deafd50422f6c6efd45be4130d9f992d465f0aea

[SVG :telescope:](https://www.planttext.com/api/plantuml/svg/vLTjRzis4FxENy6bmDgaoqgzKu5dLBRbji265fwtVLY7WY8fHuWiUIILsgttttUIPSTlJL-I5HjcMA9uF3syvtWyyH1wgWrJffhc2B7Ab4KrJQH2-YehPaonASxbH1QYn_ZLH9LL8VfbNYhyO1WFutwCK4URHIwx23U_Iyc4LFXzsyNuUQcoTsLXM1xbsQIOoi80Oces2aCON47EAZNBvSx0pzaxYIrt8tl5XCYA2RP8A_ghQJjFMYDGE_-BGcUJIwDnii1ZLQKfu2AJcLpYyRp0pvc-lC1addeyJMtgCPPop_9Snx4iHt0g94k5HrpRJdtkorIuNY9Too4YJCFG5gxlfOH9Xi1bt83fySi8CurFe3r1u3QJyMp6WEfOQlEiOagy8LQZiItOLHr9y8rY1L_yLFAhjVw1TFUbI6kfp5fvqpkcr2lBV5UnbHnJ_YKhzb1RoGb23KjytjqZWny_li0693-MdELzbkVDa1IFJj6UPltk8R46W4E8cV5bfaUILqfdr_BHw-8rwhJnzbtRTfS_OBEOIGnjmQPDUyto2XvgzIMkm5oyn0LStafsYjzZyZt1ptwBNq3S73FWOtRLJ3xzjVFp2_n5qzmlVVUJwS_FVt-WfFYZjkycb1eUdM_VCbN0rklY3byb0D3idfsDub_ZqVYRixFEaqRUHR1vkCckcP57e_SZmqSYPSkKsaMP7h9SVw5V4WXvy4a2LrgZhENQg3glBF5KQiqc8CSF6okmlYohNE2PajTrxbADoOk7Tt3gUjjzhcDtrkGGxT_kcttonncyKN9MAdCd1ahgAg_3twZgwxDORViFwcrqHj9Kgi3tpVJq84xsTjG_ElNdvNcfRicezsnscn7XRzzYxLwkaNzMBB_JVEncmeqisPOTYylMENXI6WmVvgjS2cnARDyQatiSrj_h_noFZU4VuF9LCyIzCzZE3aVq_c_PONMKh7s2LdK6UhLr5XNIi2pNMrOCo80GKbi1vGGSJk6XNzRPWvkDFP4GC3sCRTxhBfiJEjpdi9W574qN-ENR0jOouiqAmn2Pay2bGIZ88F0SdheHzGZpcUDRxi0dWYIsGyB8eyDTu9qJ_bQtWVITDA4X3SD0XDGBgTFp7UewYV2O9VmeY0QMbOHUj0jvM0dionfmEnKMzNkMu_kMf4dVuq4l85ReEtOW73TYQOz8IiDTy9kAOVry1qjtAuljVWFAqYXqA1HHGKGfjQblopxbGUGCkKtxX3k4ne7Zzuw1hYkGxNu3obEV9G5rUHB4jXJS4fOTHcuSsWDOEI_aJk3wWKi05EAfZIhq5EvGu_uD)


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

title Txn Hash: 0xf5cff285aafc515433113dc8deafd50422f6c6efd45be4130d9f992d465f0aea


actor EOA as "EOA"
participant TestGuard_01 as "TestGuard_01"
participant ReentrancyMock_01 as "ReentrancyMock_01"
participant Assert_01 as "Assert_01"
participant AssertBool_01 as "AssertBool_01"
participant AssertUint_01 as "AssertUint_01"

"EOA" -> "TestGuard_01" ++: testLocalCallGuarded()
"TestGuard_01" -> "ReentrancyMock_01" ++: countThisRecursive(\n\
<#FEFECE,#FEFECE>|= type |= name |= value |\n\
| uint | n | 5 |\n\
) { 0.0 GWEI }
"ReentrancyMock_01" -> "ReentrancyMock_01" ++: count()
"ReentrancyMock_01" -> "ReentrancyMock_01" --: 
"ReentrancyMock_01" -> "ReentrancyMock_01" ++: countThisRecursive(\n\
<#FEFECE,#FEFECE>|= type |= name |= value |\n\
| uint | n | 4 |\n\
) { 0.0 GWEI }
"ReentrancyMock_01" x-[#red]-> "Assert_01" --: <&warning> <color #red>**REVERT!**</color>
deactivate "ReentrancyMock_01"
deactivate "ReentrancyMock_01"
"TestGuard_01" -> "Assert_01" ++: isFalse(\n\
<#FEFECE,#FEFECE>|= type |= name |= value |\n\
| bool | b | false |\n\
| string | message | 'Guard should prevent reentry' |\n\
) { 0.0 GWEI }
"ReentrancyMock_01" x-[#red]-> "AssertBool_01" --: <&warning> <color #red>**REVERT!**</color>
"Assert_01" -> "AssertBool_01" ++: isFalse(\n\
<#FEFECE,#FEFECE>|= type |= name |= value |\n\
| bool | b | false |\n\
| string | message | 'Guard should prevent reentry' |\n\
) { 0.0 GWEI }
"AssertBool_01" -> "AssertBool_01" ++: _report(\n\
<#FEFECE,#FEFECE>|= type |= name |= value |\n\
| bool | result | true |\n\
| string | message | 'Guard should prevent reentry' |\n\
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
| uint |  | 2 |\n\
)
"TestGuard_01" -> "Assert_01" ++: equal(\n\
<#FEFECE,#FEFECE>|= type |= name |= value |\n\
| uint | a | 2 |\n\
| uint | b | 2 |\n\
| string | message | 'counter got tickled to 2' |\n\
) { 0.0 GWEI }
"Assert_01" -> "AssertUint_01" ++: equal(\n\
<#FEFECE,#FEFECE>|= type |= name |= value |\n\
| uint | a | 2 |\n\
| uint | b | 2 |\n\
| string | message | 'counter got tickled to 2' |\n\
) { 0.0 GWEI }
"AssertUint_01" -> "AssertUint_01" ++: _report(\n\
<#FEFECE,#FEFECE>|= type |= name |= value |\n\
| bool | result | true |\n\
| string | message | 'counter got tickled to 2' |\n\
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
<#FEFECE>| ReentrancyMock_01 | ReentrancyMock | 0x2fd186B13661e8bC5c7B70196327d34AafB0e889 |
<#FEFECE>| Assert_01 | Assert | 0x63fb898997d985983B63843bd5a1d6A7AD11b95A |
<#FEFECE>| AssertBool_01 | AssertBool | 0xafA9382f67A8882862eC8c7A3Fc28C0c308E736B |
<#FEFECE>| AssertUint_01 | AssertUint | 0xcf6ab784cb7E2edc1d129A4E92DD7559c3746740 |
endlegend

@enduml
```
