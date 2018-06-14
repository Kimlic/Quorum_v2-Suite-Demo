FROM ubuntu:16.04 as builder

LABEL "company"="Pharos Production Inc."
LABEL version="1.1"

ENV LANG=C.UTF-8 \
  REFRESHED_AT=2017-06-07-1
WORKDIR /work

RUN apt-get update && \
    apt-get install -y \
            build-essential=12.1ubuntu2  \
            git=1:2.7.4-0ubuntu1.4  \
            libdb-dev=1:5.3.21~exp1ubuntu2  \
            libleveldb-dev=1.18-5  \
            libsodium-dev=1.0.8-5 \
            zlib1g-dev=1:1.2.8.dfsg-2ubuntu4.1 \
            libtinfo-dev=6.0+20160213-1ubuntu1 \
            sysvbanner=1.0.15 \
            wget=1.17.1-1ubuntu1.4 \
            wrk=4.0.1-2 \
            dnsutils=1:9.10.3.dfsg.P4-8ubuntu1.10 \
    && rm -rf /var/lib/apt/lists/*

RUN wget -q https://github.com/jpmorganchase/constellation/releases/download/v0.3.2/constellation-0.3.2-ubuntu1604.tar.xz && \
    tar xvf constellation-0.3.2-ubuntu1604.tar.xz && \
    mv constellation-0.3.2-ubuntu1604 ubuntu1604 && \
    cp ubuntu1604/constellation-node /usr/local/bin && \
    chmod 0755 /usr/local/bin/constellation-node && \
    rm -rf constellation-0.3.2-ubuntu1604.tar.xz ubuntu1604    

ENV GOREL go1.10.2.linux-amd64.tar.gz
ENV PATH $PATH:/usr/local/go/bin

RUN wget -q https://storage.googleapis.com/golang/$GOREL && \
    tar xfz $GOREL && \
    mv go /usr/local/go && \
    rm -f $GOREL

RUN git clone https://github.com/Kimlic/quorum.git && \
    cd quorum && \
    make all && \
    cp build/bin/geth /usr/local/bin && \
    cp build/bin/bootnode /usr/local/bin && \
    cd .. && \
    rm -rf quorum

FROM ubuntu:16.04

LABEL "company"="Pharos Production Inc."
LABEL version="1.1"

ENV LANG=C.UTF-8 \
  REFRESHED_AT=2017-06-07-2

RUN apt-get update && \
    apt-get install -y --no-install-recommends software-properties-common=0.96.20.7 && \
    add-apt-repository ppa:ethereum/ethereum && \
    apt-get update && \
    apt-get install -y --no-install-recommends \
        libdb-dev=1:5.3.21~exp1ubuntu2 \
        libleveldb-dev=1.18-5 \
        libsodium-dev=1.0.8-5 \
        zlib1g-dev=1:1.2.8.dfsg-2ubuntu4.1 \
        libtinfo-dev=6.0+20160213-1ubuntu1 \
        netbase=5.3 \
        ca-certificates=20170717~16.04.1 \
        curl=7.47.0-1ubuntu2.8 \
        solc=1:0.4.24-0ubuntu1~xenial \
        dnsutils=1:9.10.3.dfsg.P4-8ubuntu1.10 \
    && rm -rf /var/lib/apt/lists/* \
    && rm -f /var/cache/apt/archives/*.deb /var/cache/apt/archives/partial/*.deb /var/cache/apt/*.bin \\
    &&  echo "" > /var/log/dpkg.log && echo "" > /var/log/last.log && echo "" > /var/log/bootstrap.log

RUN mkdir -p /templates && mkdir -p /scripts
COPY --from=builder \
        /usr/local/bin/constellation-node \
        /usr/local/bin/geth \
        /usr/local/bin/bootnode \
        /usr/local/bin/
