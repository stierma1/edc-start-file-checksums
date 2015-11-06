"use strict"

var StartingPoint = require("basic-distributed-computation").StartingPoint;
var Request = require("basic-distributed-computation").Request;
var uuid = require("uuid");

class FileCheckSumsSP extends StartingPoint {
  constructor(){
    super("file-checksums");
    this.add(0, "file-checksums");
    this.add(1, "mv/_output/checksums");
    this.add(2, "cp/_input/checksums/_output/checksums2");
  }

  createRequest(payload){
    var req = super.createRequest(payload, Request);
    req.correlationId = uuid.v4();
    return req;
  }
}

module.exports = new FileCheckSumsSP();
