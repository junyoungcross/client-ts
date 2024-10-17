// @generated by protoc-gen-es v2.2.0 with parameter "target=ts"
// @generated from file nillion/programs/v1/store.proto (package nillion.programs.v1.store, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { SignedReceipt } from "../../payments/v1/receipt_pb";
import { file_nillion_payments_v1_receipt } from "../../payments/v1/receipt_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file nillion/programs/v1/store.proto.
 */
export const file_nillion_programs_v1_store: GenFile = /*@__PURE__*/
  fileDesc("Ch9uaWxsaW9uL3Byb2dyYW1zL3YxL3N0b3JlLnByb3RvEhluaWxsaW9uLnByb2dyYW1zLnYxLnN0b3JlImoKE1N0b3JlUHJvZ3JhbVJlcXVlc3QSDwoHcHJvZ3JhbRgBIAEoDBJCCg5zaWduZWRfcmVjZWlwdBgCIAEoCzIqLm5pbGxpb24ucGF5bWVudHMudjEucmVjZWlwdC5TaWduZWRSZWNlaXB0IioKFFN0b3JlUHJvZ3JhbVJlc3BvbnNlEhIKCnByb2dyYW1faWQYASABKAlCswEKHWNvbS5uaWxsaW9uLnByb2dyYW1zLnYxLnN0b3JlQgpTdG9yZVByb3RvUAGiAgROUFZTqgIZTmlsbGlvbi5Qcm9ncmFtcy5WMS5TdG9yZcoCGU5pbGxpb25cUHJvZ3JhbXNcVjFcU3RvcmXiAiVOaWxsaW9uXFByb2dyYW1zXFYxXFN0b3JlXEdQQk1ldGFkYXRh6gIcTmlsbGlvbjo6UHJvZ3JhbXM6OlYxOjpTdG9yZWIGcHJvdG8z", [file_nillion_payments_v1_receipt]);

/**
 * A request to store a program in the network.
 *
 * @generated from message nillion.programs.v1.store.StoreProgramRequest
 */
export type StoreProgramRequest = Message<"nillion.programs.v1.store.StoreProgramRequest"> & {
  /**
   * The contents of the program.
   *
   * @generated from field: bytes program = 1;
   */
  program: Uint8Array;

  /**
   * The receipt that proves this operation was paid for.
   *
   * The receipt must be for a `StoreProgram` operation.
   *
   * @generated from field: nillion.payments.v1.receipt.SignedReceipt signed_receipt = 2;
   */
  signedReceipt?: SignedReceipt;
};

/**
 * Describes the message nillion.programs.v1.store.StoreProgramRequest.
 * Use `create(StoreProgramRequestSchema)` to create a new message.
 */
export const StoreProgramRequestSchema: GenMessage<StoreProgramRequest> = /*@__PURE__*/
  messageDesc(file_nillion_programs_v1_store, 0);

/**
 * A response to a request to store a program in the network.
 *
 * @generated from message nillion.programs.v1.store.StoreProgramResponse
 */
export type StoreProgramResponse = Message<"nillion.programs.v1.store.StoreProgramResponse"> & {
  /**
   * The program identifier.
   *
   * @generated from field: string program_id = 1;
   */
  programId: string;
};

/**
 * Describes the message nillion.programs.v1.store.StoreProgramResponse.
 * Use `create(StoreProgramResponseSchema)` to create a new message.
 */
export const StoreProgramResponseSchema: GenMessage<StoreProgramResponse> = /*@__PURE__*/
  messageDesc(file_nillion_programs_v1_store, 1);

