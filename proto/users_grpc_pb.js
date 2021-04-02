// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var users_pb = require('./users_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_LoginRequest(arg) {
  if (!(arg instanceof users_pb.LoginRequest)) {
    throw new Error('Expected argument of type users.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_LoginRequest(buffer_arg) {
  return users_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var UsersService = exports.UsersService = {
  authenticate: {
    path: '/users.Users/Authenticate',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.LoginRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_users_LoginRequest,
    requestDeserialize: deserialize_users_LoginRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.UsersClient = grpc.makeGenericClientConstructor(UsersService);
