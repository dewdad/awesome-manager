' Open and Print a Word Document

Dim objWord, objFso, objWshShell

Set objFso = CreateObject("Scripting.FileSystemObject") 
Set objWord = CreateObject("Word.Application")
Set objWshShell = CreateObject("WScript.Shell")

Dim sMainFilePath, sDataSourcePath

' Arguments 0: MainFilePath, default is template.doc
' Arguments 1: DataSourcePath, default is db.csv

Dim sCurDir
sCurDir = objWshShell.CurrentDirectory

if WScript.Arguments.Count = 0 then
    WScript.Echo "Missing parameters, using the default"
    sMainFilePath = sCurDir & "\template.doc"
    sDataSourcePath = sCurDir & "\db.csv"
else
    sMainFilePath = WScript.Arguments(0)
    sDataSourcePath = WScript.Arguments(1)
end if

Dim objDoc
Set objDoc=objWord.Documents.Open(sMainFilePath)
'Set objDoc=objWord.Documents.Add

With objDoc.MailMerge

    .MainDocumentType = wdFormLetters
    .OpenDataSource sDataSourcePath 
    .Destination = wdSendToNewDocument
    '.Execute(False)

End With

objWord.Visible = true
set objWord=Nothing

Set objFso=Nothing 
set objWshShell = Nothing
wscript.quit