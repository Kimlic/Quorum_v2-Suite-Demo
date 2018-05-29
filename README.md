# How to use this repo

** Quorum node version 2.0.2, Geth version 1.7.2 **

1. Run setup:
```
cd Quorum && sh setup.sh
```

2. Follow answers below to setup required values:
```
Project name: kimlic
Start port: default 22000
Node count: 3
Node name: KIM1
Password: press return to leave blank
Node name: KIM2
Password: press return to leave blank
Node name: KIM3
Password: press return to leave blank
```

![Setup](/Images/img1.png "Setup")

3. Copy node addresses from terminal for the future usage. In the current settings they are:
```
KIM1 2xVHFePHoOb3SznaiBTOjLBXvHN6DLCCfA59zuizGiw=
KIM2 Y/jVJ0jgHyha9gj818Zvr6NtKOmBhkD7NgvY11HLZkI=
KIM3 3R52M+F53gozZOx6/ReEoEaWFkEpENxbSXo4hQ6pDGI=
```

![Successfully created cluster](/Images/img2.png "Successfully created cluster")

4. Run docker-compose for the first time:
```
cd kimlic && docker-compose --verbose up --force-recreate
```

5. You should see that Quorum started with 3 errors:
```
Fatal: Raft-based consensus requires either (1) an initial peers list (in static-nodes.json) including this enode hash
Copy all 3 addresses Quorum shows you into some temporary file.
```

![Enode errors](/Images/img3.png "Enode errors")

6. Stop containers and Remove them. It should be required to prune docker networks too. In case you're not a skilled devOps, you can use this commands on your own risk:
```
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
docker network prune
```

7. Edit ```KIM1 > qdata > static-nodes.json```. 
File is corrupted, the structure should be:
```
[
"enode://address1@10.50.0.6:21000?discport=0&raftport=50400",
"enode://address2@10.50.0.6:21001?discport=0&raftport=50400",
"enode://address3@10.50.0.6:21002?discport=0&raftport=50400"
]
```
where address 1, 2, 3 - addresses shown in quorum logs on step 5;
21000, 21001, 21002 - ports of nodes (on step 2 you set 22000 - rpc port, but here you should use 21000 - http port)
discports and raft ports are the same - 0 and 50400
subnetwork ip is the same - 10.50.0.6
Current `static-nodes.json` looks like this:
```
[
	"enode://bc1343ad25c4ef8557167a19f8bdb4a58338157c512ec898bbbb078750f5b13acc1eb80827087654f3fd41a32ead76e0d4d646be69217edd376c1b7e46b4e676@10.50.0.6:21000?discport=0&raftport=50400",
	"enode://4960788acf4ee678f5060b5e16834c99ca3ebf47b7a17fb7492f12d278f137b6ea3ad528d73cdf784c4c8a40cc1e1a75fd3c1201e06e09982ed71bd65300ae7e@10.50.0.6:21001?discport=0&raftport=50400",
	"enode://489775da4d4794e0c370b83a8df3f35b770958db5564d4be1ade9d7d2f5147ed8a9cac042337c40c9abd4547199fe7043f4d069571be8a59b9d0075b3eb8b908@10.50.0.6:21002?discport=0&raftport=50400"
]
```

![static-nodes.json](/Images/img4.png "static-nodes.json")

8. Override `static-nodes.json` in `KIM2` and `KIM3` with the current version.

9. Run docker-compose again:
```
docker-compose --verbose up --force-recreate
```

![Ready to go!](/Images/img5.png "Ready to go!")

10. To test the network simply run:
```
curl -X POST --data '{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":1}' 127.0.0.1:22000
```
The response should be:
```
{"jsonrpc":"2.0","id":1,"result":"Geth/v1.7.2-stable-df4267a2/linux-amd64/go1.10"}
```

![Up and running!](/Images/img6.png "Up and running!")