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

5. You're ready to go!
![Ready to go!](/Images/img5.png "Ready to go!")

6. To test the network simply run:
```
curl -X POST --data '{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":1}' 127.0.0.1:22000
```
The response should be:
```
{"jsonrpc":"2.0","id":1,"result":"Geth/v1.7.2-stable-df4267a2/linux-amd64/go1.10"}
```

![Up and running!](/Images/img6.png "Up and running!")