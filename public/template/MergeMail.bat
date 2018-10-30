REM Starting office
ECHO ==================================================================
ECHO These template files should be copied to Documents/template folder
Echo Usage: MergeMail.vbs MainDocPath DatasourcePath
ECHO ==================================================================
REM Runs VB script to start Word
set MainScript=%UserProfile%\Documents\template\MergeMail.vbs
set MainDocPath=%1
set DatasourcePath=%2
cscript //nologo %MainScript% %MainDocPath% %DatasourcePath%
pause