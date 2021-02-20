Test date: 2021 Mar 03



## Local Guarded
[link to test...](https://github.com/cds-blog-code-samples/Reentrant/blob/master/test/TestGuard.sol#L38)

##### d1, tx: 0x12b1c1b3d63372991976a622435651aa873a2e8a4a263d5c055a76e9200b7fc2

[SVG :telescope:](https://www.planttext.com/api/plantuml/svg/xLHBJzmm4BxxLrXmQKLHxJXsOaHNXCscz521MkxLn7Ps8xBEod7KNKh_UvsG8fPjAt5l3dOyZsyUccyGkkWyED-l6uIWzwtjrwLngBkhxGOSh75ZbiRgIr1tIzVsLi_RfdNuk5WKY_a2eVFExnepGtZyLWQqSVZ7zCJugdNrVMizD5bJB-tQM1yGA_zaK0Jb8-IcTvl6x2c-rlS6q_X9TWDQrtQ9APb4FyVx_FsK19hYVx9TlLpv3fSxVElwgWguoDU-CVXsQ_4LTAipJBOqAgcY9TE2iIIIaif4W8YYc771AK2QC8XC2Z54Wcck2EUG22CZGigaKX4ABLC-fBwupZ1q-2ZSHoYqpTUgta0ezTPq_cCFJdyZTBHuBjWt_M92RnnOjVlSghlVzWVI8uJ6CFXqzW8DdvoSuT9KhJCBKAitRz4B_U1nY3UwgTPstlL3COFV7wmEmvsUdk7NX82cASCK_GF_hydrrh_ExJ6t_sNWQLO69NfaChfvDdJQUAYR3frFV7vtd9ES439x-803OSC4XfzvEuHN7bjOcq6GQUrC5tHFVhE7aGFXt7hZREZH3bz_jqRZJ8rr1nNPaYHE4wb9dd2cgZXBEG41JD0u5qIJCc94PZmjze7tEFJiEK8ALfMfJALCj4ovJDcbO6dCIis1Qf4bMKvfANcs3td8jPUo4Jndal8YNkHfLXZ510zhGYGoBJCQLaLKw7bLfIGPm4DZf_QYYt26TVeB)


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

title Txn Hash: 0x12b1c1b3d63372991976a622435651aa873a2e8a4a263d5c055a76e9200b7fc2


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
<#FEFECE>| ReentrancyMock_01 | ReentrancyMock | 0xD3915F4ED8AFec3653376798bA11972FdCff807A |
endlegend

@enduml
```

##### d2, tx: 0x2a12124c436d76b32a37bb3e0e3bd595c43b381607572a92352bb81b66ca9916

[SVG :telescope:](https://www.planttext.com/api/plantuml/svg/vLTHRzis47xdh-1IO6tIPQL4IQG2pwXYoss13Isyh7jOXu8YAKU8JBaKbTgjzzz7oR8ZEqwRDbc1OWOaaX-Fn--En_C9WAUbOTfKqnm0Lfb2LTD4Qb1UP6h6D9l2N4wa4gUCNqnqKIanAF92mmUZU1GFOW1wfLdaiWzWypkNJ4WDFxP329yNEljGACFoACycQYgLiHfJin4OsScLobcbPxdSclWz-o2XussmLqo8J4sWWrhedwRjFMb9W7R_5whC9kUcXCa2dkagJQrUO3AJItWsL_0vAyzF89gxp74Tr-CU3WG94kmoJ984IoHn8lpGjnC9faw0Y4zS5hhOTvE4EaaGS1Q6JW2ioxYnrEEN4MGbFB3j0R1kCndFPioQUYPBywnYMhn5JYFH1RP5nzBwHZF55xyL_68jVmtTNXILfTHcBRmPxHCwBOfyMx15zWd_aQaThIro041Z9JpkxnW37py-WSOYlnQSvGqinQD3i2DLhxjkLBEOs_1QhHvBNkaokvIFtgWteDS6sqzjsr_-0irY9g5j5PisxINBAzkfnPUmibpX4Yhxu1Ls23z2z3E2p_wCNzYWsSVWSyHgKsw_xFZu17xLDlTiltjh--V7VptGKlnT4xmAfCQGte_lcLRsulLXZw-klvNi7nsDuzVn-Eo7ewFUamRl0o7jZSWkcP5xO_SpqtjYfKEbzb5MZbXUVgLV4XlmrYU9VT9QonelZQwpoX9EPLcoYSNXmuO5BC-BAXTmfkLbdRbqGtdnSBzJkrxhxrwoxuJzXkuD5hpLSbPeSoSBj2ohl0vGewjlRyNgPjuejv4PIrDf1U_RqiDhSR8Jy__frb-MYwN-HDAxPzfjpkgah5ja0_ckOlcTzcDN6swmf8ljYylMEUl8r7BACWNTBqaBwx_JxysC3UyRJFcc-U6-3UYcXZro_xVKiAhpQf-0rKS0UDKf58KqBClB3eiX6YA4QXQsrhULe-qCYZfrSBFX4mbXjxTpctNzPLC-s_VSdgLYURw0BzyhAM34cmEsKsYEY4T9AD2G-9YdNaHzn0A60ySR1aYWnCKeZ7mwsbQyLNvtXetA0AS93MaO4X5IFwJuDC3Kgoj_veWW8j7GSPBGZxPLNY_JTx56-H27ZZ_ouY6DHfBZmCUO12IaIUGu8N57Of2c594TvLVb_Bf_1wRRPNztt2XbQHHYwgO1YIYbBWrSEQ2SH7Z4NJf072CQ4noSxbEw_ZpeZXkbF0rOGgZ74nAxKd17E6uOUN7e3kt9-I77n0k8XwnI6qzjL86dzcq_GFy5)


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

title Txn Hash: 0x2a12124c436d76b32a37bb3e0e3bd595c43b381607572a92352bb81b66ca9916


actor EOA as "EOA"
participant TestGuard_01 as "TestGuard_01"
participant ReentrancyMock_01 as "ReentrancyMock_01"
participant Assert_01 as "Assert_01"
participant AssertBool_01 as "AssertBool_01"
participant AssertUint_01 as "AssertUint_01"

"EOA" -> "TestGuard_01" ++: testLocalGuarded()
"TestGuard_01" -> "ReentrancyMock_01" ++: countLocalRecursive(\n\
<#FEFECE,#FEFECE>|= type |= name |= value |\n\
| uint | n | 3 |\n\
) { 0.0 GWEI }
"ReentrancyMock_01" -> "ReentrancyMock_01" ++: count()
"ReentrancyMock_01" -> "ReentrancyMock_01" --: 
"ReentrancyMock_01" -> "ReentrancyMock_01" ++: countLocalRecursive(\n\
<#FEFECE,#FEFECE>|= type |= name |= value |\n\
| uint | n | 2 |\n\
) { 0.0 GWEI }
"ReentrancyMock_01" x-[#red]-> "Assert_01" --: <&warning> <color #red>**REVERT!**</color>
deactivate "ReentrancyMock_01"
deactivate "ReentrancyMock_01"
"TestGuard_01" -> "Assert_01" ++: isFalse(\n\
<#FEFECE,#FEFECE>|= type |= name |= value |\n\
| bool | b | false |\n\
| string | message | 'Guard should prevent reentry' |\n\
) { 0.0 GWEI }
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
| string | message | 'counter should remain 2' |\n\
) { 0.0 GWEI }
"Assert_01" -> "AssertUint_01" ++: equal(\n\
<#FEFECE,#FEFECE>|= type |= name |= value |\n\
| uint | a | 2 |\n\
| uint | b | 2 |\n\
| string | message | 'counter should remain 2' |\n\
) { 0.0 GWEI }
"AssertUint_01" -> "AssertUint_01" ++: _report(\n\
<#FEFECE,#FEFECE>|= type |= name |= value |\n\
| bool | result | true |\n\
| string | message | 'counter should remain 2' |\n\
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
<#FEFECE>| ReentrancyMock_01 | ReentrancyMock | 0xD3915F4ED8AFec3653376798bA11972FdCff807A |
<#FEFECE>| Assert_01 | Assert | 0x63fb898997d985983B63843bd5a1d6A7AD11b95A |
<#FEFECE>| AssertBool_01 | AssertBool | 0xafA9382f67A8882862eC8c7A3Fc28C0c308E736B |
<#FEFECE>| AssertUint_01 | AssertUint | 0xcf6ab784cb7E2edc1d129A4E92DD7559c3746740 |
endlegend

@enduml
```
