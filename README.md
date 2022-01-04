# Solana Raspberry Pi Test

Attempt to build on MacOS x86_64 and ship to an ARMv8 Raspberry Pi test
validator. Example simply pushes some data onto the chain.

    solana config set --url http://10.3.141.135:8899
    anchor build
    anchor run deploy
    # patch up program id in IDL
    anchor run test

```plain
Public Key: XSMTyYMtx6zqCktYCtEJ1guYeZEA3fYiYyfsgpF1jmiw
Balance: 0.0018096 SOL
Owner: 7Tu128UDAoMJwVnowP2H4CikQT7G9MirF9hbUuTppuCc
Executable: false
Rent Epoch: 0
Length: 132 (0x84) bytes
0000:   a7 ca 14 c6  e4 42 69 d0  64 08 3a c1  9a f0 e2 ec   .....Bi.d.:.....
0010:   52 2e 97 e1  38 cd c0 36  39 29 2f c3  06 bb 59 79   R...8..69)/...Yy
0020:   34 69 38 33  18 7a 48 70  9f 13 cf 61  00 00 00 00   4i83.zHp...a....
0030:   4e 00 00 00  73 65 70 61  72 61 74 65  20 64 61 74   N...separate dat
0040:   61 20 66 72  6f 6d 20 70  72 6f 67 72  61 6d 73 2c   a from programs,
0050:   20 62 65 63  61 75 73 65  20 64 61 74  61 20 61 6e    because data an
0060:   64 20 69 6e  73 74 72 75  63 74 69 6f  6e 73 20 61   d instructions a
0070:   72 65 20 76  65 72 79 20  64 69 66 66  65 72 65 6e   re very differen
0080:   74 2e 00 00
```
