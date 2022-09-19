########## Lab 3    ##Christine Bourgholtzer    ##9/18/2022 ##########

#Define variables to be called in BODY message/variable
$User = [system.environment]::username
$Hostname = hostname
$PSversion = $HOST.version.Major
$Date = Get-Date -DisplayHint Date

#Define BODY variable
$BODY = 'This machine''s IP is {0}. User is {1}. Hostname is {2}. PowerShell Version {3}. Today''s Date is {4}.' -f $IP, $User, $Hostname, $PSversion, $Date

#Send output to file
$BODY | Out-File C:\it3038c-files\WinSysInfo.txt