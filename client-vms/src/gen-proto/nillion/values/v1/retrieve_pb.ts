// @generated by protoc-gen-es v2.2.0 with parameter "target=ts"
// @generated from file nillion/values/v1/retrieve.proto (package nillion.values.v1.retrieve, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { SignedReceipt } from "../../payments/v1/receipt_pb";
import { file_nillion_payments_v1_receipt } from "../../payments/v1/receipt_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file nillion/values/v1/retrieve.proto.
 */
export const file_nillion_values_v1_retrieve: GenFile = /*@__PURE__*/
  fileDesc("CiBuaWxsaW9uL3ZhbHVlcy92MS9yZXRyaWV2ZS5wcm90bxIabmlsbGlvbi52YWx1ZXMudjEucmV0cmlldmUiWwoVUmV0cmlldmVWYWx1ZXNSZXF1ZXN0EkIKDnNpZ25lZF9yZWNlaXB0GAEgASgLMioubmlsbGlvbi5wYXltZW50cy52MS5yZWNlaXB0LlNpZ25lZFJlY2VpcHQiMAoWUmV0cmlldmVWYWx1ZXNSZXNwb25zZRIWCg5iaW5jb2RlX3ZhbHVlcxgBIAEoDEK7AQoeY29tLm5pbGxpb24udmFsdWVzLnYxLnJldHJpZXZlQg1SZXRyaWV2ZVByb3RvUAGiAgROVlZSqgIaTmlsbGlvbi5WYWx1ZXMuVjEuUmV0cmlldmXKAhpOaWxsaW9uXFZhbHVlc1xWMVxSZXRyaWV2ZeICJk5pbGxpb25cVmFsdWVzXFYxXFJldHJpZXZlXEdQQk1ldGFkYXRh6gIdTmlsbGlvbjo6VmFsdWVzOjpWMTo6UmV0cmlldmViBnByb3RvMw", [file_nillion_payments_v1_receipt]);

/**
 * A request to retrieve a set of stored values.
 *
 * @generated from message nillion.values.v1.retrieve.RetrieveValuesRequest
 */
export type RetrieveValuesRequest = Message<"nillion.values.v1.retrieve.RetrieveValuesRequest"> & {
  /**
   * The receipt that proves this operation was paid for.
   *
   * The receipt must be for a `RetrieveValues` operation.
   *
   * @generated from field: nillion.payments.v1.receipt.SignedReceipt signed_receipt = 1;
   */
  signedReceipt?: SignedReceipt;
};

/**
 * Describes the message nillion.values.v1.retrieve.RetrieveValuesRequest.
 * Use `create(RetrieveValuesRequestSchema)` to create a new message.
 */
export const RetrieveValuesRequestSchema: GenMessage<RetrieveValuesRequest> = /*@__PURE__*/
  messageDesc(file_nillion_values_v1_retrieve, 0);

/**
 * A response to a request to retrieve values stored in the network.
 *
 * @generated from message nillion.values.v1.retrieve.RetrieveValuesResponse
 */
export type RetrieveValuesResponse = Message<"nillion.values.v1.retrieve.RetrieveValuesResponse"> & {
  /**
   * The values encoded in bincode format.
   *
   * @generated from field: bytes bincode_values = 1;
   */
  bincodeValues: Uint8Array;
};

/**
 * Describes the message nillion.values.v1.retrieve.RetrieveValuesResponse.
 * Use `create(RetrieveValuesResponseSchema)` to create a new message.
 */
export const RetrieveValuesResponseSchema: GenMessage<RetrieveValuesResponse> = /*@__PURE__*/
  messageDesc(file_nillion_values_v1_retrieve, 1);

