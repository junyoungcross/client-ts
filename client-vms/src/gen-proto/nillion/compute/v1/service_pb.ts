// @generated by protoc-gen-es v2.2.0 with parameter "target=ts"
// @generated from file nillion/compute/v1/service.proto (package nillion.compute.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { EmptySchema } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_empty } from "@bufbuild/protobuf/wkt";
import type { InvokeComputeRequestSchema, InvokeComputeResponseSchema } from "./invoke_pb";
import { file_nillion_compute_v1_invoke } from "./invoke_pb";
import type { ComputeStreamMessageSchema } from "./stream_pb";
import { file_nillion_compute_v1_stream } from "./stream_pb";
import type { RetrieveResultsRequestSchema, RetrieveResultsResponseSchema } from "./retrieve_pb";
import { file_nillion_compute_v1_retrieve } from "./retrieve_pb";

/**
 * Describes the file nillion/compute/v1/service.proto.
 */
export const file_nillion_compute_v1_service: GenFile = /*@__PURE__*/
  fileDesc("CiBuaWxsaW9uL2NvbXB1dGUvdjEvc2VydmljZS5wcm90bxISbmlsbGlvbi5jb21wdXRlLnYxMtkCCgdDb21wdXRlEnIKDUludm9rZUNvbXB1dGUSLy5uaWxsaW9uLmNvbXB1dGUudjEuaW52b2tlLkludm9rZUNvbXB1dGVSZXF1ZXN0GjAubmlsbGlvbi5jb21wdXRlLnYxLmludm9rZS5JbnZva2VDb21wdXRlUmVzcG9uc2USWgoNU3RyZWFtQ29tcHV0ZRIvLm5pbGxpb24uY29tcHV0ZS52MS5zdHJlYW0uQ29tcHV0ZVN0cmVhbU1lc3NhZ2UaFi5nb29nbGUucHJvdG9idWYuRW1wdHkoARJ+Cg9SZXRyaWV2ZVJlc3VsdHMSMy5uaWxsaW9uLmNvbXB1dGUudjEucmV0cmlldmUuUmV0cmlldmVSZXN1bHRzUmVxdWVzdBo0Lm5pbGxpb24uY29tcHV0ZS52MS5yZXRyaWV2ZS5SZXRyaWV2ZVJlc3VsdHNSZXNwb25zZTABQpABChZjb20ubmlsbGlvbi5jb21wdXRlLnYxQgxTZXJ2aWNlUHJvdG9QAaICA05DWKoCEk5pbGxpb24uQ29tcHV0ZS5WMcoCEk5pbGxpb25cQ29tcHV0ZVxWMeICHk5pbGxpb25cQ29tcHV0ZVxWMVxHUEJNZXRhZGF0YeoCFE5pbGxpb246OkNvbXB1dGU6OlYxYgZwcm90bzM", [file_google_protobuf_empty, file_nillion_compute_v1_invoke, file_nillion_compute_v1_stream, file_nillion_compute_v1_retrieve]);

/**
 * A service to perform compute operations.
 *
 * @generated from service nillion.compute.v1.Compute
 */
export const Compute: GenService<{
  /**
   * Invoke a computation.
   *
   * @generated from rpc nillion.compute.v1.Compute.InvokeCompute
   */
  invokeCompute: {
    methodKind: "unary";
    input: typeof InvokeComputeRequestSchema;
    output: typeof InvokeComputeResponseSchema;
  },
  /**
   * Start a stream of message for a specific instance of a computation.
   *
   * This is meant to be used internally by nodes in the network.
   *
   * @generated from rpc nillion.compute.v1.Compute.StreamCompute
   */
  streamCompute: {
    methodKind: "client_streaming";
    input: typeof ComputeStreamMessageSchema;
    output: typeof EmptySchema;
  },
  /**
   * Retrieve the result of a computation.
   *
   * The user invoking this operation must have been defined as an output party in the program
   * the execution was tied to.
   *
   * This call will wait for the program execution to end if it hasn't done so already. Clients must
   * wait until either a result or failure message is sent, ignoring any `Waiting` messages sent until
   * that happens.
   *
   * @generated from rpc nillion.compute.v1.Compute.RetrieveResults
   */
  retrieveResults: {
    methodKind: "server_streaming";
    input: typeof RetrieveResultsRequestSchema;
    output: typeof RetrieveResultsResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_nillion_compute_v1_service, 0);

