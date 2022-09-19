function getIP{
    (get-netipaddress).ipv4address | select-string "192*"}

write-host(getIP)
