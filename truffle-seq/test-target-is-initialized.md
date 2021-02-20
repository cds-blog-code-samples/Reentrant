Test date: 2021 Mar 03



## Target is initialized
[link to test...](https://github.com/cds-blog-code-samples/Reentrant/blob/master/test/TestGuard.sol#L22)

##### d1, tx: 0x90d8e5dde15eccb4e5f69331b461d8ae9caf29b1b3f36be70cff9192273b90d6

[SVG :telescope:](https://www.planttext.com/api/plantuml/svg/xLHDRzim3BthLmZjPKDNJB9iMIgwe6xZh3iCBRRU1ttGYL573cGPIxhklqznlI9fjW6zpmVP8laUoGVI25rqGVdGBnk4L1zQroyrUDJTrswbl5hY1kRWxAKoztFVzivUjKthyV6id9LN9KBdNTWqC45uU1QWB7ZyOxnYVDtw-g5rGJL5Ky_T4bo8Z5Lu3fX5vnFbglUh1lOSN-i7m3HzjjqgQsitnvICff_3-_pzM0GQytzoNJrVX0xh3RxpVLL5NXJgq02-MpjyhRh56IPhIQo0p5gW6HYZKyWgBXcZEkNK2WNIg2gHccfMCQuX9wQg99L9aZCTiHn5oKo8fPSt1LOTFehl8nHb2xMfLogsUWTT-DWhRxyHEaJi6lP3lq3KnYjdDfzRS_yx_i1wXD2G1fzENh3XavCphA5gFPJABDwyHI_yMyGXtm0phUk2xxVDR75_Y3fCTtfwXb-JGZMDZbFq3_w_5jUxy3hOKst_sy3Zh6oTw6cJqUtEq5a8gcuwT3xkyxlZAPaIGYQF7t1Ss3Y1yUEgtQOt0JkrXAsXiDP35ttFkCdZi0FnN0VmBcgqmJVV7LXScA7lw29hagSYbvPCyuoPAYr4HXHNZDDqoeabEc545fcOxHFlxT3ETQ3ahD922YbpAqKc1RlaJAHCsqnHoukyc5AgPLRiKnxksalRG5uMWYSsJJbOebGiSoP4aehCa99oGLbI6K6vvP4y2ZlAYoxY6N-dlm00)


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

title Txn Hash: 0x90d8e5dde15eccb4e5f69331b461d8ae9caf29b1b3f36be70cff9192273b90d6


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
<#FEFECE>| ReentrancyMock_01 | ReentrancyMock | 0xEA862d446ed0aa614F882485c0E168132fc816d6 |
endlegend

@enduml
```

##### d2, tx: 0x208f4e93f208f68f9f9b638bdcdf8749d9feb8a567c12c4f39beb0ed40173b94

[SVG :telescope:](https://www.planttext.com/api/plantuml/svg/rLRTRzGu47_tNs7r7W11mKcSnAvAHUXceG-ewAwdUq52_iesQjPPR0UwTFdVcQJfVdGB3mVtSAjLRC-CV_ERyMGSX5xv85pevWr2eWkjxURIEEIlQhiGJinnOsR6wjT2NSrSsrbzsZQjmtzCosbvMY9qxCEoCIS83xzB8xHn-6PSOlosTVNNrWRH54qzitDZ0o1MOMqm1UKjvA9pYyRiAFwglneSqRNilT2wjZCSaL7qRHYFNumaqEZ_pFfwTXaybajyuRgg0bmKwj0OV75jyLlXBuymkOu9gwZXITLFCbRnYiiiOL8hNR6SSiqh8vb8irn5iQ9LmgMHn6XAeZoHd298cGf0lJmliF3u0CO316aBjQeN0aAzC3wywOJJ7qaqM6mBTat_D90R9wnQlclLrPtzddHtK-6zSU7EUBrwoEZlsjup72K720t4yU79FNxuwTCZ741o8TpCX3D_PkjGYmPEHJz-WkuPzzltwGuO2Wed6DVlUS1Yt-_XuH7a8tJEuiSVx0TqF9RRit4yMRt4ORam64OhviFuMJGTJ7hp5UuWDBp2y8zlHG-otUHhO6a-TQBv9NzYut0jazio7rnVloiyDzwB6Up7ZyRaO7_PTet6qk3uqKWQts3odE0t_vHdKEhRV3Vqxqxn_nJ2clCFmlZepA9ruTy58jks0LBE-AxfsGUtqVtNvFl2_OdTxodk7mVuPAz6VlDxzLFN-o_ORLlfSu9khn7qVgilQHD4tVWj5XCo8OJqBE2sW4O5azEsRnSghFaKMeDxqAttdQo61WpFQpX7AvfcYS-_MADneOR31HMv9ZbbETTaagU9gcZ1KY8oaMGHdMH44nadX1Sfc-u2xpJmhUK0cIMLP9nndclEKiwIrt1xq4JgL4GwA_9Y4aMIfyKkv7wZloyRmCk2PR6cD3EQ204qfup5bAMAb576eYIk58iodUs2Row4k_alCDszEBRN0wYgCY5pHfNCozXe5UaevWKjUJo19ATS9JdDSae058v-B03q2fxmjV4T)


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

title Txn Hash: 0x208f4e93f208f68f9f9b638bdcdf8749d9feb8a567c12c4f39beb0ed40173b94


actor EOA as "EOA"
participant TestGuard_01 as "TestGuard_01"
participant ReentrancyMock_01 as "ReentrancyMock_01"
participant Assert_01 as "Assert_01"
participant AssertUint_01 as "AssertUint_01"

"EOA" -> "TestGuard_01" ++: testTargetIsInitialized()
"TestGuard_01" -> "ReentrancyMock_01" ++: counter()
"ReentrancyMock_01" -> "TestGuard_01" --: Return (\n\
<#FEFECE,#FEFECE>|= type |= name |= value |\n\
| uint |  | 2 |\n\
)
"TestGuard_01" -> "Assert_01" ++: equal(\n\
<#FEFECE,#FEFECE>|= type |= name |= value |\n\
| uint | a | 2 |\n\
| uint | b | 2 |\n\
| string | message | 'counter should be 2' |\n\
) { 0.0 GWEI }
"Assert_01" -> "AssertUint_01" ++: equal(\n\
<#FEFECE,#FEFECE>|= type |= name |= value |\n\
| uint | a | 2 |\n\
| uint | b | 2 |\n\
| string | message | 'counter should be 2' |\n\
) { 0.0 GWEI }
"AssertUint_01" -> "AssertUint_01" ++: _report(\n\
<#FEFECE,#FEFECE>|= type |= name |= value |\n\
| bool | result | true |\n\
| string | message | 'counter should be 2' |\n\
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
<#FEFECE>| ReentrancyMock_01 | ReentrancyMock | 0xEA862d446ed0aa614F882485c0E168132fc816d6 |
<#FEFECE>| Assert_01 | Assert | 0x63fb898997d985983B63843bd5a1d6A7AD11b95A |
<#FEFECE>| AssertUint_01 | AssertUint | 0xcf6ab784cb7E2edc1d129A4E92DD7559c3746740 |
endlegend

@enduml
```
