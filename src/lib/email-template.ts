const LOGO_URL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABBCAYAAAHj4NsYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAHZ5JREFUeNpiYKAnsLd3UMjMyv7//OWr/0D2f2qazQi1oICbm7v/69evDHF33oMlHA5vYFBWUmQk0oFgRx08eIARmQ8TAwvevXf/f1JiIoPfk08Mm2T4GGxefWUw/fadoV9BBK7xxMlT/+UVFMAaI8LCYGZ8AGKBFatWIYsJlj54+x7ZEUwg4sHDh2AOyAIQOCLGzSDIwM4A0gwDMAuuXbsGFwPKC5SUlsLYMPq9EAMnQ7eCMAMXExcDiA22pKmhgWH6gz9wzRMff2UQBUomA30HC04Qe9GCBQxaWloolpuYmiL7AswWYmRiEP7zn0HqPyNDpQIXPE7eW3/5LZD49jtccYu9HsPChQswwhgIFIH4Plq0XABiA2zxBQtumGvfgwwDpa69+w+AUpgCw1ACAAHEQO/MCA4qUHKmSWasq2/4f/DAAbAALDMuUhFEjTTcjgsAUutBOQGoXhEtoUwAihUyAgUSgJz5yBoLH7xByYigRAHKE8jJFAoOAMUdQA6cPm0aLIUtAGbGBJgCUH5hglmQ+OIb3BKQBU0PPoMMd4AKYVgAyita2tpgeaAFIL4BNP8kwDIjiAYBFpDNwIyYUCPDCbcElDFniPGAfAIOw3nz54MNBxmSmZUFMhyS+69eBdN1wMwMs3zmwx/ASGCC0/CyCxSGcx5+QgnrfC1Jhm3btmLLjNhAIDRecGdEmEGwFEbt1EUXABBAjASSJyhiQXgB0OsPBrNHmNAc/j4+PgE50++PuvOhHojvu9raD+roYkROW/EJCQwLgdUSMhD//ofhJScLQ+b9NwgPn94HzhXYCh2YR0GRCcKgnLRm9WrsCRrafAG2Lu7PnT8fudoDF0bI6nytbf8nPXmH4YEJCqKoORG5JWD06TvDOT5OrD6veAApPdkWTGRwdnRgRPcErF7evm0bPFBMgfXz6dOnUepsWPlESAxU54OaULUPPkIaISKcDBd52BjCXn1jUP/2GyzWrMAPLrfgBvQ9+AVmFylw4oxCMQZuSGkpL49VHmQOKGY9vbzAGCY2eepUvEnjDNCjoJhD9xgophJDwhjEGXjA/Is8zGDa7hs7kGRnmCUGzh2CLLAoB4VmkQIbsOD8DsYtkuwMj9mYGOY/fsvQKcbHkP7qDwPXP0hi5D+5GaUFhB4byAAUoqBCW1RUFK9Herq7cQbM3Mcf4Zlg7kNEpkiW54cnV0Zs6RsE5j9GTY9vWJgZ/i2eCbbw9evXoFIscUgUv0BPNQCpeuQm42AuggECcGM9r00EUfjtjxBJadi0moOi9CL4H3jRQ0+CZ4s3qXirl4Klvdl4TPAsXlTIwYtCL6J4am+Cl4r+AxsRxda2qyQxsTbxvZd529nZSdaDYNoHD3Znd2fmezsz7/vesTEvIyFWZtAajfDdkWTC5CQaKAGSV6u1vmqvHAmKYuYTMszqsIUJMVi8CfhzeLP/Dfv+r5ndBKHLB7IXZ4tw/2kdUIJHCKb0L1fBKEqLz0khbI6ivr56cd0GotQ9YP0zu92EC80OXP+8RyAAKUWQNalrc3NM+CnJKcJfwoEj2/t6/jHnoGxzMdxONRaRtvzwPQ5qTFGuYhZ+ibSC6UevD7/cw6BMIaBWzoWFjzt8f/GtnWuNSopIMyJdPonAIPpyR9UxLCBYFFK/qNesgSN5RfOIKYqAINNBkO3mPQaRV4eckEADxPyoyCKBDCjDi2Efa5TtDyUiQLVW474FGNoM9tMPfvfghGJTxKvIhHslaDwtgyx7cG4aCtgZuQ0IF5fCUK8YJXgTsgEGR6JVxpRrAU7EkkC0kSSKxCdb+dTBcXPsYua9LxG+Eh2wPyn78KHgpmZ541sPaVteopsYSFT3yvJyotQl1zTJu6urmcGSgBYmJuI/RftsMnw/+ItTg3md7/RhUs0lJaxeBx5X1Ba2etZB6iddfk6uLxHN1pYsa50ACzC9ndjuMEZM74nTQZFz9tk3ig7M7+zD0tcu31dP8/RnUwrRxYfkxH7jzfQlUmWFn4NnZYeXRGqjYwSpLmguKX356O2Uj4QR1w0xJ31QnwU8eHzosj9qfIfLzTZfPzzlITt34hKJYx6bZqlDtzYeAuU3r4aeWEM+s9UnrXVJSx8bqmZgs3v4TcWWEOlo5Ox3a7cFl1rdxFe3z5Tg8fNnQyXu2NF4Myrm+h5HEFl6ZE9LYGMnpI6t/RGAXasJiSqKwkebH8a/nGmSFo4NQgWtCtoILgqiqE1FSEHQqItQVCgMqY2lK3cFEQZFSjuJYipomW4KisgiAqEsNSFT899GR191vztzn+/due/N04QS5sAwb2buu/fN+bvf+c7NyEZiTBVIulvCfVZygYXU9Yx619kgzAhg8dFl4aBEoB9wiNhOBwwQEb8BKWGvBuRrqK/n/OD/nLA3jEGYIVBT7oGSYYjWlha9pyPLmU+TKd+hmLlfWsh3UhinOtm83SiGMfRSjNVd5z+DJ6we58SxYMHtpLp/wvb3R6ECuhl9yCF7ktutWu2fS/axkS7DaYYOJOfvWeX86GdU4lqQ73JJ4cSh1tg3esvm3WtJaSHloNaxIDK4VHyeovcBH/UVJgo09IHKRufpdTCHxnwuqhkaN41fZBGT1dbMWyTJaHFkFPEHwYmcraxM+89wLgNHLFBnOTWKWEPFl4jCGS8HxoCzfDk8Pke75xYcW+NxUQH153h0nWTJOFfFbOkV+/AE3SsO2C4QjC+Tl9Vz5VMxCi0s6d9/yPNS5NnTRF3JdOXE20TKtFI+zqyoPFknX8JhXvljHMbLaReZANEAg2OcbAgVVwSH3VpUJM8FL+NdQ9HLEzLtyqb24gTns+NnnE6OpmactrBfj0CXkf4QZwBUgoXawoG0Fh/3uNjCS9S1rcBEOu2b0/heBBoFBkGetvJiwZJbGQO3AVgYQYWqCrQT3gLr6LClcvC8INnEySibufhERyYWOU9mUnZxvn79kUXCu4LfVDYTt5zLdDesjgc9N7JIpQsrdNClsE+3ohOZdyWmzSWP6fux0VFH94NMYEa5gmfBwRHZe0XLW5GqLHljHDAxRhScT9VNNt6v6jSrjI65oLuDMwj6FZ4tlkoLpowxSGeKQYQ8CHqpdVhboZ6GNLpYssmxQU5PLtOTzS7KNxjkB1uptq6Oe3ZS6T1ONkeB0OwiQChapVykHKQuOb1BgUajCmlgz2jFHltFHuaqmNAoR8JIjSVu0+f2gaUUHFUbdgt9VMkG8Qs2C8p7lcdCaz4RJeySbg1qVLPdY2kE8IA3vs7wjje68I3fl0xr3y3fSW1MKfBkv98fXesma5V+5PGg0YHqkHLkCBNnKFUpERS78V3PEk1Neoo0Rq2ImkOzsRTMentw0RLTvshzU8cWHimmVlmWAn93i8+h+C9q/hZTKqHL72GTujh3umtBo1OTcT5eliFPNg1druWbZ/Lh9WN8Fvi/G2+RSCRFkSr0k86DASKMihfw2w7eMgEM7ZWVL0eSMNqxmRgdn46ldZw7gVx6nus1puYsp4WhCU+H4hpdHZldFbju9bnp5dH9vFlj8K4T7CGiDuEocG6E1MR1NAkTp1QF7V/UZT1szgPSnOfZ2zVpnH70ahVrYo9oSXdixI7u1Ql5lSBES5ihgppGfV43vfF5WDS4CP0dtEbgPSIfZ7itdSYXRdGj+g0IA/laUdGbWi8ZyciGlD8CsHOtoXFUUfjs7G7c7OaxiSs2Ypq0f6wIbeOjgkgTH60oLVqQIkWIxQdYn0XBf9ZCkfrD1v7RH0WSCP3XH4LEFz4SsFqLSv0jKEITkxRqSvMwz33VOTdzZs+9c+/MbBJr0Tlwk93J5M6de+459zy+cyOKKKIV7yEG87RLsU4Goum8ggzhIeoAQrOuQweNi2gVGMKzhkg6h4riSYjoYQG/VQVr/u8Zwv0QypFQSAI9ZETocdO3s7PTjQ0pXvTeK5Vt+88yhEODKfxMeQxOmJi6b2zG/X76+jRcWNPkhrVZxjHCES2XIVwy1Jy4SsiQ+8e8IZUfc2lYv2eXyPKxsImn0utqJGcxYmtXQiWT/xZD3GgrqifC7JoY8sCYPsaFQIfT926Gw7aEMaZctdU/9nufA5+cfcg6aN8+GJ11VPlZX4ZgcQKas7hfZNJpo2QQtcwX4MHz5qAjMuWnHXeLLOFKMJz2uDC493KIW5clhbQIMW+CUs1zJxQdDptTX8ZakBbpskAOXEJmkhbMJiyoL5bh8REvAuVcpga2vHtEGAZOsDF0jEutr8MJw8AlpZpRgjELOTg4KMXSqmE6YQlMqVoKs4dgiHALdNUsOvqlLgWf5+o9TEko5q1gBgetq7Tx0gKs/2sRBtfUiYpjpNsuzkHrbAHeW5eDPecn4Lp85WCNm+YW4a3XD0DfSdfqwgl+I8REuX4PjklXPkormRApYRYRp56e3vbe3t4sWoemvLmT8wizfzyxtMLDrYVbZhZFwwMVHMmSy1j53mF6MTyH5dMb6j1VPUSPDk/BybbGpQqfciWlMp2IQ9OxN8VnB5vV5LdJkvgTPiwMMeNDLXNS6UP72bt4zscvr06RCNDnZVxpx/4abS3xzOhEVYviVDYN32ZrXSmR0vDo9A0bkBxbJufgMx9mCP/DZsbztshipVLc5jW1JnugKHWobpiU+JHIWpqYgWNUx8mkOsv9I8yNowQwRM0jvPhOlzvHvgkW61AX7zNTySAecGpJhXgh9CkOltSwXo3aTCLh+fvWyQVJwhIsNiU8cIS+6KhtoQBnbG4G0fG1ObjRvheRJ7hiiBJT0uaPG7Tf5mu0VHTSi8PnjmpQPp76MJXBofrCRs6tSWU6h76QyoFbZ1BVW8bnIj5LrcdTyVJXgA7Dm7LVD9uAfAlRitsuzcNXzVg9Z7lt00y+KlE2YcQwx31HRdLciSHK+OThiXCC29uDrVPsC5lrOv5AkTzpfbGVLC9SR70nqTDQCjM5a/JlgcALS+35GPyaTkoPjTuP8gPjSVaIAdyNgAPM01PlmzqxuNFjhIDK+/CziiDBCUa/SCdtw851HZAOY3VPKq4A1U/W2os2ab8lb4PZlIYh8j1nGtx73vEwhAZ4eGheakOpeFWrOw01AmhXY2tEanHHfjDtUepmiT/eNhy8wQkdT06ourgJjJ9Zbj9QCvv6+rTqDKUQy5WxP907bJ8sSe+L7VSDDHvbOu2958usi8ua5GavZPHUQHUMUOn7hiRsnLss9TOUSrgTFIIepsnFRYIqCifIZJoScpAXjAdZZMKI6e42SqbKEBUtqdI2gUj0n7fdwk2T71HRjfRVguZgUTpvteXwzNg9URQlzNum5X5+T8VUM9Jk8n4NCqwGGYMhHGSOqn6Er2A7h2ghqsygyLRJCtpC7CNhmRuHstTyljxp3RdLnntO5Nw5caFHdC7QkD0R7j9/nI3BjslKh4dGi/DK2kTg4BAoN28PZJMtHRZc9qwwRsd8uukiS0kXYdZtsMgkNUdDkWadWjIlNz9hJyhIUqNghz0q2t4/rFhJutafXZqvzXMleHa8oI0cflfnqqsBiSEq9Wct2DlV8bYzl5HDRejLmZny2MS8QDF+UZ+CIyN56eF91ybgpX373D3BBJZzIq1AtfuIODQh4IMmURwV0dlprCt5SJNkU88/UyMCpB5pI6fg686pvL0Ai8p8FO1mHvfTbXVu2IRf5zN8DzAYab+QkspD7potQWuhCIdaKpbDhsUCvPbnNHyTuQbeb64Tq+HoiBdSOXVnh6t6YCnF6+sQ3q6YtSbCwJ9pEtXNXnUgfQqAhKePqo7vIzrfhiLh26fDF+jgon2htYG+7lej3xYLyEly/FFjEhZs9WNBpbXlS3B8eBb2jS8IPC8iFl9taYbxeI24/px9nd+PbX9rSqwocjhNuF7uZf/AnDxTfAlVEj/+TBd/06kmk7pie5NwWHXYYd4HN5ktqxTYfqtdYgRjxl4dmjMWFEL2O6Qi0HZtycDBEx+Il3VWkwc7qzwfl21PFY+guNQEhCvXDiR+NOtq9amRwHWmWJ6lDAbFR9IBT7U1wGhNDGKxclXtxdZ6wQwu2n7McP7e60zIOnKUDC+EqyuGzHD+D8EUq5Ei3sXG0uSMQxUp/N7hjLMjZL8DbMy+gVXfsmh+LVcsw8ELU8Ki8F2yjbXw88abhQ7nGceoVj0c+aFOjDB73Mw3LBTE7z+SCYF6x42dO2a8tj1ixiowxGEKnZVt9JDVs7AU32EgSE1FVAVDGGO0qEWMhqK3qwkE+m5cEa2QIYrjdhT02TM0CA5GoLiIIoron6O/BWjv6mLjOqrw8d/aXq9/Egc3WaN4Q0RSIBIJlILgIW4UEI0VqKD8lIc2RUQ8UKmKQDyARCTUIh4s8RcJCQSy84RUoG2iJiBVqivUNmohcREVKlKpnTiJm5pkm9jrtXftMN94Zjt3dmbu3N27cSrdL1o5snfv3p/5zpxz5sx3EiRIkCBBglvg9EaFCCv3Cic56nZ+xJZPi9ByMnlUCd7TBBGVdkfJLuDMIdW/TLCoD+jhP5YajyQpgAS3PUGEKAtI0aeT4MDICF/PTntUEbqAha3TzzxTtd1AwLrpJUGCdSGI2H4YKJuSOpJqPQBKlU4JrWVTGRWAjjEfn1urh7jW3sKL6tHPR/4fFaI4rlo9hOOipMqwLJ7sKU2wfgQRxHhTnS10zTdUR6FGw7NQVOzfnXe+B0SBMvDr7NV7xwBXbJQVUiAeqrw0XdKEKAluLUF0XQ1V2RhxAxbOfUmhE+SzF6NpBmJD4/NbMpT9wDa+bgxyYlbBOWhESaQj6nOfD9Fatft9ET6GuPCeuFxeYZR3x3CofK3n5LPn+pycNeDyyEFZDzEkNjOCfP5SbQV4mFn+ku2hnp3bK+eEGQXiBMo5rUtxhbhv8As/Kh6w60FPKS+0loXvOLkeSYgISk9OxFFdFIOQaRhwv0NLDVzlWMOk1FyrakyuNiK1on+5TFsYYbYUS5Rb8N+GCL2CPw320Re+9tVKDAS3S9n72dDCF0GGo3EMLAcaOhvqCriIKeEh+Na6axVfga4bdcxelUrih2euUk95paZjYavr26lWviP/YkcbvZFu57/znfmafMgh5esNFtob6IC67foy13kYWCwbZwQE6DOZNvpv95qQ+SAjy/65G14359lN3bS4687K5gOtZn0qpNY+NmuLW4e6TdyvWjJ4cBexLQgE1xIR9zRCPFG/Dp8eECoMskR1n6cq3YMOLOjEEjdAkomNXVzYREGVx+EUyQJkBzBNntqbFMOX56mrvMpb7lzoavP6HERUPpQv0gVGlhcHurg2x/2z+YBwigln+rrojQ8OVSTvNMv2lCyRj9vaoohZb7lQL7Rzl22Npasm3bZegxsCa/iq+DmpD1ZxDLleFfisTRVBBwgss5Pa2lXlHgsjm6Nq5YdJcV5TPrPH4ZlrzECuUqMAovz2/RvUWcXed0oPyNUKdrUDgA++fDHPt3r+ebD2fS4g2APnr9F/utvppf4u3jbpK7PumOXEQDcNHvhcJYmgNTPzbgBgeXgBrS69MUxcUGQ6GuF3G6cHtRWiDbUYSc/A/mH5XNTZY9f8Eh2YC/dWLnQEDe+AaLXliyupFhrL9qq/qoyTVoM/XclaSJ8eroovOXBi35z5H50c6KWZjra67hzcrvHcRvpUvsBnkD9u7qMnNvfQA45uGbihv0RbK0iPsMGLa1D2gj5K2jb8COTYrZLjexFmDdy/00L4QYVs9oOdHNIlw302kUPOVLwSwcPKS/cHZIO7Jp5fzpSJ9AW+V93vajKaMKqIXXJCs8fmQmKNTMSxsKBPip34Y4FzzC9Vyb/o+GcmRSc3mXWQoHf0yEx4EmhwuYpMu+U40beaH1IfnrzAKC7l15mF/9vG7rrJEXSd0nTv3Crtu1rgukLnejrpE9eXjO/NsNl4R6HEV98x6JBYUAgyXMdp3KcOFN8AFoPURA5uztnf8Dpl2V2vW/ios9WQUI2Um74hlyO/yyQkEgW4JpAjakAPI3CXIJFhtqyMvzsLZdrEPWo3QV7pabf+DRJJL/R1cqLVilaXtZCM9509hopleh+7qH9l2mP3Dc4yUhy+NM8IstYA8NPXS9b3ZpdX6TVlTQTXIq/B1TDRO5AuFCINUl3XCfcUVh0b8F8J2YQvrb0cUPjs1PR04Np8ZxQQBdYb92J0dFTcj72hrpXMXAbiEGb943Ax8d0g2agm9bQ/X+J6VS78O91Csyn3e7YXb4Ye581qeauJUIJIKSSJb80WaVvRnE26nGqmY9lOmu5opdGtvQ0Jpt5iNwKadNzysgtySUY1s38qqVEcGSV+MsYFa80t4aL1LYiFSX2Dqy9gRVV5J8tCZyAm8eE0Btqvjh1zZs/wtwX2PTJN73MNp991hyrfY+tWJ6Gl2jlsUovSJZPX/5HCKm1dDpe3eq4v5fx7lrlOO7nKifs4Z3oC3k4+VPzHPNU0s0FpXjYZWiYuobXYTA3DJ+dXKZ9KVW5gynHqEKtTVZhiXLNBqpjXocmutBgsDzJ3Bb53rYWZ+BzS07ZESJhfL105HyOgdrt9yKPhNq990/R8fmrozakCrtwCm2V91RvlPZAYya9ySTVn7JFupksp94A7fGXF6zivpQPvOeJysSbIoqB7NtNKHy7a021fugo9tMYwBI1bD82t0OPZtdO9/+pN54X/I9NC+8TUD5fCZh0iBOjDpKwLqcBsAh/61wZrzmOgkRFvN0Sd6XyySrorF7Z+8fd3g/VKgWkYpNZeJQnCPhPm0vl0ujcRHIDUXY7PHu7F+L/22ccajPUPLq1Qf9l9HDQU/t1AYByN6QuyrZobMcEGgzEV+HKmmQ7mb7IvNafPPgML37omPRcndjBSfvetJXos284liI7MrtAdZXsK7ww7z6XeTCUDh2BdwS9qIEdOJQes+ZSHtV4QcQZePr46z+6wWcmkTWIaTCCl6pL5EErNjj3oEaTzjgOaPbnr7rud16DGR1HIIZMYB/PlKi1IHa8yq4+xoANjEzKHO4rhKV58/rFswLWaMBW5mvwURGNGwbCfb26mx2fswfFBNjXuKVR9cU2AOt133i7QuXQbfXuok1/8z86XuDix3SI00XE2i/1IrN3oQXCNbV8D5DBJzkr3ZkpLDERxu2TQHJZ61VXt1Pq4MHLIQYjP+MxOxw1SiZzEFrKDHC5h0DBADnJrqRRaQrtnkeg3045ypJDPj/WvdTVXYF1EtpWaWIvWMFB/cjE8bfYic3Oe2NBGBY8JBfpnkNnas8hehRKdZwH5072d9Hp7K/8+KKqa2rKrmGPk+OFgu2vlP/IioXofonTJiGo91VIN39XsKJANgSRk824XbCq4anM+2yyibm6DkbC5fkrXK46jlxd4V/hG4URfO53orcqwOseFq1iRd56yDWi4PWGDViXLyd4Ut/C+s8fBd0rcvfI7fiu3CrKOyECOyMV+etwRtUYpzJ3CLGBa/wgbgCaChZ2XWk3g48IZBu+YcLuHo7h0tmvHbKZnuHYulen7V27ESohCUxO90AVSdHAhXt0h8ulMFlbuHtgHUj0llpkbtEjrBVz0j7ekadf+fRXXBClJLetSU3mJq72azCbJn2hdZxqkICpecEtgxS1pXF5qIZIju1WiII7CgFZnFFh2kOIUi61wbLkK75oJ1CweBnXYDGWIPbhkqkmvFzMr1lLUagD1ONMipays5hvxjWsLzL0qR3z+zXS+rUV4EC3s1cxFox2YEuPBe2+IT1PEQxQiYryzWKZHWLyQjlD/Ug/ggv2+v5NadmwPbJqCq6I8hFjK3AVRHhWGIhfTJYDB44ZCQhz/SWrsPoioqDIwdZb4Y3BiH8ZTt2DPB75rXGSnahoHvjsKq/ah2/DFd4q0/0YxdrLAOvxhQ5rOdbYFmqhZFtmOmOTTG4W9bl+j5s1Plh11+dtVpMJwvl7XLurcaq1qbej9aKrhBjzny3qQ5GOLyyz4XuY/o7hOZztTjAwp/lO6G+o4hPE9Pj6u1zgl+9ETrB9BNLL4tmn2Avz5tFhck52G9eDulBCFMPnw9ZSxJ0gQO0G0WeVoLWQxZVSmRYWrDC4tgV1euFFjySNMcFsTxBLUInh7KMagdkIEtQkhEry3CRIhiMspBJoUswI1Yt91ggQJEiRoAP4PFCvr0ShPXeEAAAAASUVORK5CYII="

type ContatoEmailData = {
  nome: string
  telefone: string
  email: string
  mensagem: string
  origemLabel: string
  origemPath: string
}

export function buildContatoEmailHtml({ nome, telefone, email, mensagem, origemLabel, origemPath }: ContatoEmailData) {
  return `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Novo contato pelo site</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e5e7eb;">

          <!-- Top accent bar -->
          <tr>
            <td style="height:6px;background-color:#dc2626;"></td>
          </tr>

          <!-- Logo -->
          <tr>
            <td align="center" style="padding:36px 40px 8px 40px;">
              <img src="${LOGO_URL}" alt="SafeD" width="160" style="display:block;max-width:160px;height:auto;" />
            </td>
          </tr>

          <!-- Heading -->
          <tr>
            <td align="center" style="padding:8px 40px 4px 40px;">
              <h1 style="margin:0;font-size:22px;line-height:28px;color:#111827;font-weight:700;">Novo contato pelo site</h1>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding:0 40px 28px 40px;">
              <p style="margin:0;font-size:13px;color:#6b7280;">Recebido através do formulário em safed.com.br</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:0 40px;">
              <p style="margin:0 0 20px 0;font-size:15px;line-height:24px;color:#374151;">
                Olá, você recebeu uma nova mensagem pelo site da SafeD. Os dados de contato estão abaixo:
              </p>
            </td>
          </tr>

          <!-- Info card -->
          <tr>
            <td style="padding:0 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f9fafb;border:1px solid #eef0f2;border-radius:12px;">
                <tr>
                  <td style="padding:20px 24px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:4px 0;font-size:13px;color:#9ca3af;width:110px;vertical-align:top;">Nome</td>
                        <td style="padding:4px 0;font-size:14px;color:#111827;font-weight:600;">${escapeHtml(nome)}</td>
                      </tr>
                      <tr>
                        <td style="padding:4px 0;font-size:13px;color:#9ca3af;vertical-align:top;">Telefone</td>
                        <td style="padding:4px 0;font-size:14px;color:#111827;">${escapeHtml(telefone || "não informado")}</td>
                      </tr>
                      <tr>
                        <td style="padding:4px 0;font-size:13px;color:#9ca3af;vertical-align:top;">E-mail</td>
                        <td style="padding:4px 0;font-size:14px;color:#111827;">${escapeHtml(email)}</td>
                      </tr>
                      <tr>
                        <td style="padding:4px 0;font-size:13px;color:#9ca3af;vertical-align:top;">Origem</td>
                        <td style="padding:4px 0;font-size:14px;color:#111827;">${escapeHtml(origemLabel)} <span style="color:#9ca3af;">(${escapeHtml(origemPath)})</span></td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding:24px 40px 0 40px;">
              <p style="margin:0 0 6px 0;font-size:13px;color:#9ca3af;font-weight:600;text-transform:uppercase;letter-spacing:0.04em;">Mensagem</p>
              <p style="margin:0;font-size:15px;line-height:24px;color:#374151;white-space:pre-wrap;">${escapeHtml(mensagem)}</p>
            </td>
          </tr>

          <!-- CTA button -->
          <tr>
            <td align="center" style="padding:32px 40px 8px 40px;">
              <a href="mailto:${encodeURIComponent(email)}" style="display:inline-block;background-color:#dc2626;color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;padding:14px 28px;border-radius:10px;">
                Responder por e-mail
              </a>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:32px 40px 0 40px;">
              <div style="border-top:1px solid #e5e7eb;"></div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px 36px 40px;">
              <p style="margin:0 0 4px 0;font-size:12px;color:#9ca3af;">SafeD Cursos e Eventos</p>
              <p style="margin:0;font-size:12px;color:#9ca3af;">
                (11) 94212-0232 &nbsp;·&nbsp; safed@safed.com.br
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

export function buildContatoEmailText({ nome, telefone, email, mensagem, origemLabel, origemPath }: ContatoEmailData) {
  return `Nome: ${nome}\nTelefone: ${telefone || "não informado"}\nE-mail: ${email}\nPágina de origem: ${origemLabel} (${origemPath})\n\n${mensagem}`
}

function escapeHtml(value: string) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}
