#include "protheus.ch"
#include "totvs.ch"

/*/{Protheus.doc} BINTODEC
Function convert binary to decimal
@type Function
@author gabriel-trevisan
@since 16/04/2022
@version 12.1.33
@param cBinary, character, string binary
@return numeric, conversion result
/*/
User Function BINTODEC(cBinary)
    Local nExponent as numeric
    Local cUnity as string
    Local nCont := 1
    Local nResult := 0
    Default cBinary := "10010"

    for nExponent := (Len(cBinary) - 1) to 0 Step -1
        cUnity := SubStr(cBinary, nCont, 1)
        nResult += Val(cUnity) * (2 ^ nExponent)
        nCont++
    next nExponent

Return nResult
