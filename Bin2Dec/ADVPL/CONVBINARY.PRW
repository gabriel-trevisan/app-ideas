#include "protheus.ch"
#include "totvs.ch"

/*/{Protheus.doc} CONVBINARY
Screen for the user to enter data
@type function
@version 12.1.33  
@author Gabriel
@since 18/04/2022
/*/
User Function CONVBINARY()
    Local cText as string
    Local cMessage := "The conversion is: "
    cText := FWInputBox("Enter up to 8 binary digits", "")

    MsgInfo(cMessage + BINTODEC(cText))
Return

/*/{Protheus.doc} BINTODEC
Function convert binary to decimal
@type Function
@author gabriel-trevisan
@since 16/04/2022
@version 12.1.33
@param cBinary, character, string binary
@return character, conversion result
/*/
Static Function BINTODEC(cBinary)
    Local nExponent as numeric
    Local cUnity as string
    Local nCont := 1
    Local nResult := 0

    for nExponent := (Len(cBinary) - 1) to 0 Step -1
        cUnity := SubStr(cBinary, nCont, 1)
        nResult += Val(cUnity) * (2 ^ nExponent)
        nCont++
    next nExponent

Return cValtoChar(nResult)
