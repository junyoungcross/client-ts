// @generated by protoc-gen-es v2.2.0 with parameter "target=ts"
// @generated from file nillion/payments/v1/quote.proto (package nillion.payments.v1.quote, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Empty, Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_empty, file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { PreprocessingElement } from "../../preprocessing/v1/element_pb";
import { file_nillion_preprocessing_v1_element } from "../../preprocessing/v1/element_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file nillion/payments/v1/quote.proto.
 */
export const file_nillion_payments_v1_quote: GenFile = /*@__PURE__*/
  fileDesc("Ch9uaWxsaW9uL3BheW1lbnRzL3YxL3F1b3RlLnByb3RvEhluaWxsaW9uLnBheW1lbnRzLnYxLnF1b3RlIvcDChFQcmljZVF1b3RlUmVxdWVzdBItCgtwb29sX3N0YXR1cxgBIAEoCzIWLmdvb2dsZS5wcm90b2J1Zi5FbXB0eUgAEkAKDXN0b3JlX3Byb2dyYW0YAiABKAsyJy5uaWxsaW9uLnBheW1lbnRzLnYxLnF1b3RlLlN0b3JlUHJvZ3JhbUgAEkQKD3JldHJpZXZlX3ZhbHVlcxgDIAEoCzIpLm5pbGxpb24ucGF5bWVudHMudjEucXVvdGUuUmV0cmlldmVWYWx1ZXNIABJOChRyZXRyaWV2ZV9wZXJtaXNzaW9ucxgEIAEoCzIuLm5pbGxpb24ucGF5bWVudHMudjEucXVvdGUuUmV0cmlldmVQZXJtaXNzaW9uc0gAEj4KDHN0b3JlX3ZhbHVlcxgFIAEoCzImLm5pbGxpb24ucGF5bWVudHMudjEucXVvdGUuU3RvcmVWYWx1ZXNIABJCCg5pbnZva2VfY29tcHV0ZRgGIAEoCzIoLm5pbGxpb24ucGF5bWVudHMudjEucXVvdGUuSW52b2tlQ29tcHV0ZUgAEkoKEnVwZGF0ZV9wZXJtaXNzaW9ucxgHIAEoCzIsLm5pbGxpb24ucGF5bWVudHMudjEucXVvdGUuVXBkYXRlUGVybWlzc2lvbnNIAEILCglvcGVyYXRpb24iLwoLU2lnbmVkUXVvdGUSDQoFcXVvdGUYASABKAwSEQoJc2lnbmF0dXJlGAIgASgMIpcCCgpQcmljZVF1b3RlEg0KBW5vbmNlGAEgASgMEjIKBGZlZXMYAiABKAsyJC5uaWxsaW9uLnBheW1lbnRzLnYxLnF1b3RlLlF1b3RlRmVlcxI9CgdyZXF1ZXN0GAMgASgLMiwubmlsbGlvbi5wYXltZW50cy52MS5xdW90ZS5QcmljZVF1b3RlUmVxdWVzdBIuCgpleHBpcmVzX2F0GAQgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBJXChpwcmVwcm9jZXNzaW5nX3JlcXVpcmVtZW50cxgFIAMoCzIzLm5pbGxpb24ucGF5bWVudHMudjEucXVvdGUuUHJlcHJvY2Vzc2luZ1JlcXVpcmVtZW50InUKCVF1b3RlRmVlcxINCgV0b3RhbBgBIAEoBBIMCgRiYXNlGAIgASgEEhIKCmNvbmdlc3Rpb24YAyABKAQSDwoHc3RvcmFnZRgEIAEoBBIVCg1wcmVwcm9jZXNzaW5nGAUgASgEEg8KB2NvbXB1dGUYBiABKAQicwoMU3RvcmVQcm9ncmFtEjwKCG1ldGFkYXRhGAEgASgLMioubmlsbGlvbi5wYXltZW50cy52MS5xdW90ZS5Qcm9ncmFtTWV0YWRhdGESFwoPY29udGVudHNfc2hhMjU2GAIgASgMEgwKBG5hbWUYAyABKAkiuQIKD1Byb2dyYW1NZXRhZGF0YRIUCgxwcm9ncmFtX3NpemUYASABKAQSEwoLbWVtb3J5X3NpemUYAiABKAQSGQoRaW5zdHJ1Y3Rpb25fY291bnQYAyABKAQSUgoMaW5zdHJ1Y3Rpb25zGAQgAygLMjwubmlsbGlvbi5wYXltZW50cy52MS5xdW90ZS5Qcm9ncmFtTWV0YWRhdGEuSW5zdHJ1Y3Rpb25zRW50cnkSVwoacHJlcHJvY2Vzc2luZ19yZXF1aXJlbWVudHMYBSADKAsyMy5uaWxsaW9uLnBheW1lbnRzLnYxLnF1b3RlLlByZXByb2Nlc3NpbmdSZXF1aXJlbWVudBozChFJbnN0cnVjdGlvbnNFbnRyeRILCgNrZXkYASABKAkSDQoFdmFsdWUYAiABKAQ6AjgBInIKGFByZXByb2Nlc3NpbmdSZXF1aXJlbWVudBJHCgdlbGVtZW50GAEgASgOMjYubmlsbGlvbi5wcmVwcm9jZXNzaW5nLnYxLmVsZW1lbnQuUHJlcHJvY2Vzc2luZ0VsZW1lbnQSDQoFY291bnQYAiABKAQiIwoOUmV0cmlldmVWYWx1ZXMSEQoJdmFsdWVzX2lkGAEgASgMIigKE1JldHJpZXZlUGVybWlzc2lvbnMSEQoJdmFsdWVzX2lkGAEgASgMIiYKEVVwZGF0ZVBlcm1pc3Npb25zEhEKCXZhbHVlc19pZBgBIAEoDCKIAQoLU3RvcmVWYWx1ZXMSFwoPcGFydGljbGVzX2NvdW50GAEgASgEEhsKE3NlY3JldF9zaGFyZWRfY291bnQYAiABKAQSGwoTcHVibGljX3ZhbHVlc19jb3VudBgDIAEoBBIQCgh0dGxfZGF5cxgEIAEoDRIUCgxwYXlsb2FkX3NpemUYBSABKAQiQAoNSW52b2tlQ29tcHV0ZRISCgpwcm9ncmFtX2lkGAEgASgJEhsKE3ZhbHVlc19wYXlsb2FkX3NpemUYAiABKARCswEKHWNvbS5uaWxsaW9uLnBheW1lbnRzLnYxLnF1b3RlQgpRdW90ZVByb3RvUAGiAgROUFZRqgIZTmlsbGlvbi5QYXltZW50cy5WMS5RdW90ZcoCGU5pbGxpb25cUGF5bWVudHNcVjFcUXVvdGXiAiVOaWxsaW9uXFBheW1lbnRzXFYxXFF1b3RlXEdQQk1ldGFkYXRh6gIcTmlsbGlvbjo6UGF5bWVudHM6OlYxOjpRdW90ZWIGcHJvdG8z", [file_google_protobuf_empty, file_google_protobuf_timestamp, file_nillion_preprocessing_v1_element]);

/**
 * A price quote request.
 *
 * @generated from message nillion.payments.v1.quote.PriceQuoteRequest
 */
export type PriceQuoteRequest = Message<"nillion.payments.v1.quote.PriceQuoteRequest"> & {
  /**
   * @generated from oneof nillion.payments.v1.quote.PriceQuoteRequest.operation
   */
  operation: {
    /**
     * A pool status operation.
     *
     * @generated from field: google.protobuf.Empty pool_status = 1;
     */
    value: Empty;
    case: "poolStatus";
  } | {
    /**
     * A store program operation.
     *
     * @generated from field: nillion.payments.v1.quote.StoreProgram store_program = 2;
     */
    value: StoreProgram;
    case: "storeProgram";
  } | {
    /**
     * A retrieve values operation.
     *
     * @generated from field: nillion.payments.v1.quote.RetrieveValues retrieve_values = 3;
     */
    value: RetrieveValues;
    case: "retrieveValues";
  } | {
    /**
     * A retrieve permissions operation.
     *
     * @generated from field: nillion.payments.v1.quote.RetrievePermissions retrieve_permissions = 4;
     */
    value: RetrievePermissions;
    case: "retrievePermissions";
  } | {
    /**
     * A store values operation.
     *
     * @generated from field: nillion.payments.v1.quote.StoreValues store_values = 5;
     */
    value: StoreValues;
    case: "storeValues";
  } | {
    /**
     * A invoke compute operation.
     *
     * @generated from field: nillion.payments.v1.quote.InvokeCompute invoke_compute = 6;
     */
    value: InvokeCompute;
    case: "invokeCompute";
  } | {
    /**
     * A retrieve permissions operation.
     *
     * @generated from field: nillion.payments.v1.quote.UpdatePermissions update_permissions = 7;
     */
    value: UpdatePermissions;
    case: "updatePermissions";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message nillion.payments.v1.quote.PriceQuoteRequest.
 * Use `create(PriceQuoteRequestSchema)` to create a new message.
 */
export const PriceQuoteRequestSchema: GenMessage<PriceQuoteRequest> = /*@__PURE__*/
  messageDesc(file_nillion_payments_v1_quote, 0);

/**
 * A quote signed by the node that generated it.
 *
 * @generated from message nillion.payments.v1.quote.SignedQuote
 */
export type SignedQuote = Message<"nillion.payments.v1.quote.SignedQuote"> & {
  /**
   * The serialized `PriceQuote`.
   *
   * @generated from field: bytes quote = 1;
   */
  quote: Uint8Array;

  /**
   * The signature for this quote.
   *
   * @generated from field: bytes signature = 2;
   */
  signature: Uint8Array;
};

/**
 * Describes the message nillion.payments.v1.quote.SignedQuote.
 * Use `create(SignedQuoteSchema)` to create a new message.
 */
export const SignedQuoteSchema: GenMessage<SignedQuote> = /*@__PURE__*/
  messageDesc(file_nillion_payments_v1_quote, 1);

/**
 * A price quote.
 *
 * @generated from message nillion.payments.v1.quote.PriceQuote
 */
export type PriceQuote = Message<"nillion.payments.v1.quote.PriceQuote"> & {
  /**
   * A nonce that uniquely identifies this quote.
   *
   * @generated from field: bytes nonce = 1;
   */
  nonce: Uint8Array;

  /**
   * The fees for this quote.
   *
   * @generated from field: nillion.payments.v1.quote.QuoteFees fees = 2;
   */
  fees?: QuoteFees;

  /**
   * The request that this quote is for.
   *
   * @generated from field: nillion.payments.v1.quote.PriceQuoteRequest request = 3;
   */
  request?: PriceQuoteRequest;

  /**
   * The point in time at which this quote is no longer valid.
   *
   * @generated from field: google.protobuf.Timestamp expires_at = 4;
   */
  expiresAt?: Timestamp;

  /**
   * The preprocessing requirements for this operation.
   *
   * @generated from field: repeated nillion.payments.v1.quote.PreprocessingRequirement preprocessing_requirements = 5;
   */
  preprocessingRequirements: PreprocessingRequirement[];
};

/**
 * Describes the message nillion.payments.v1.quote.PriceQuote.
 * Use `create(PriceQuoteSchema)` to create a new message.
 */
export const PriceQuoteSchema: GenMessage<PriceQuote> = /*@__PURE__*/
  messageDesc(file_nillion_payments_v1_quote, 2);

/**
 * The fees associated with a quote.
 *
 * All fees are in "unil" units.
 *
 * @generated from message nillion.payments.v1.quote.QuoteFees
 */
export type QuoteFees = Message<"nillion.payments.v1.quote.QuoteFees"> & {
  /**
   * The sum of all the fees.
   *
   * @generated from field: uint64 total = 1;
   */
  total: bigint;

  /**
   * The base fee.
   *
   * This is a flat fee based on the operation being ran.
   *
   * @generated from field: uint64 base = 2;
   */
  base: bigint;

  /**
   * The congestion fee.
   *
   * This depends on how congested the network is.
   *
   * @generated from field: uint64 congestion = 3;
   */
  congestion: bigint;

  /**
   * The storage fee.
   *
   * This depends on how much data is being stored, in case the operation being quoted stores data.
   *
   * @generated from field: uint64 storage = 4;
   */
  storage: bigint;

  /**
   * The preprocessing fee.
   *
   * This is only valid for compute operations and accounts for any preprocessing material needed
   * to execute the program being invoked.
   *
   * @generated from field: uint64 preprocessing = 5;
   */
  preprocessing: bigint;

  /**
   * The compute fee.
   *
   * This fee is only valid for compute operations and depends on the complexity of the program
   * being invoked.
   *
   * @generated from field: uint64 compute = 6;
   */
  compute: bigint;
};

/**
 * Describes the message nillion.payments.v1.quote.QuoteFees.
 * Use `create(QuoteFeesSchema)` to create a new message.
 */
export const QuoteFeesSchema: GenMessage<QuoteFees> = /*@__PURE__*/
  messageDesc(file_nillion_payments_v1_quote, 3);

/**
 * A store program operation.
 *
 * @generated from message nillion.payments.v1.quote.StoreProgram
 */
export type StoreProgram = Message<"nillion.payments.v1.quote.StoreProgram"> & {
  /**
   * The program's metadata.
   *
   * @generated from field: nillion.payments.v1.quote.ProgramMetadata metadata = 1;
   */
  metadata?: ProgramMetadata;

  /**
   * A sha256 hash of the compiled program.
   *
   * @generated from field: bytes contents_sha256 = 2;
   */
  contentsSha256: Uint8Array;

  /**
   * The program's name.
   *
   * @generated from field: string name = 3;
   */
  name: string;
};

/**
 * Describes the message nillion.payments.v1.quote.StoreProgram.
 * Use `create(StoreProgramSchema)` to create a new message.
 */
export const StoreProgramSchema: GenMessage<StoreProgram> = /*@__PURE__*/
  messageDesc(file_nillion_payments_v1_quote, 4);

/**
 * The metadata about a program being stored.
 *
 * @generated from message nillion.payments.v1.quote.ProgramMetadata
 */
export type ProgramMetadata = Message<"nillion.payments.v1.quote.ProgramMetadata"> & {
  /**
   * The size of the program in bytes.
   *
   * @generated from field: uint64 program_size = 1;
   */
  programSize: bigint;

  /**
   * The amount of memory needed by the program.
   *
   * @generated from field: uint64 memory_size = 2;
   */
  memorySize: bigint;

  /**
   * The total number of instructions in the program.
   *
   * @generated from field: uint64 instruction_count = 3;
   */
  instructionCount: bigint;

  /**
   * The number of instructions per type.
   *
   * @generated from field: map<string, uint64> instructions = 4;
   */
  instructions: { [key: string]: bigint };

  /**
   * The preprocessing requirements.
   *
   * @generated from field: repeated nillion.payments.v1.quote.PreprocessingRequirement preprocessing_requirements = 5;
   */
  preprocessingRequirements: PreprocessingRequirement[];
};

/**
 * Describes the message nillion.payments.v1.quote.ProgramMetadata.
 * Use `create(ProgramMetadataSchema)` to create a new message.
 */
export const ProgramMetadataSchema: GenMessage<ProgramMetadata> = /*@__PURE__*/
  messageDesc(file_nillion_payments_v1_quote, 5);

/**
 * A number of preprocessing elements required for a program.
 *
 * @generated from message nillion.payments.v1.quote.PreprocessingRequirement
 */
export type PreprocessingRequirement = Message<"nillion.payments.v1.quote.PreprocessingRequirement"> & {
  /**
   * The preprocessing element.
   *
   * @generated from field: nillion.preprocessing.v1.element.PreprocessingElement element = 1;
   */
  element: PreprocessingElement;

  /**
   * The total number of elements of this type needed.
   *
   * @generated from field: uint64 count = 2;
   */
  count: bigint;
};

/**
 * Describes the message nillion.payments.v1.quote.PreprocessingRequirement.
 * Use `create(PreprocessingRequirementSchema)` to create a new message.
 */
export const PreprocessingRequirementSchema: GenMessage<PreprocessingRequirement> = /*@__PURE__*/
  messageDesc(file_nillion_payments_v1_quote, 6);

/**
 * A retrieve values operation.
 *
 * @generated from message nillion.payments.v1.quote.RetrieveValues
 */
export type RetrieveValues = Message<"nillion.payments.v1.quote.RetrieveValues"> & {
  /**
   * The identifier to be retrieved.
   *
   * @generated from field: bytes values_id = 1;
   */
  valuesId: Uint8Array;
};

/**
 * Describes the message nillion.payments.v1.quote.RetrieveValues.
 * Use `create(RetrieveValuesSchema)` to create a new message.
 */
export const RetrieveValuesSchema: GenMessage<RetrieveValues> = /*@__PURE__*/
  messageDesc(file_nillion_payments_v1_quote, 7);

/**
 * A retrieve permissions operation.
 *
 * @generated from message nillion.payments.v1.quote.RetrievePermissions
 */
export type RetrievePermissions = Message<"nillion.payments.v1.quote.RetrievePermissions"> & {
  /**
   * The identifier of the values entity to be retrieved.
   *
   * @generated from field: bytes values_id = 1;
   */
  valuesId: Uint8Array;
};

/**
 * Describes the message nillion.payments.v1.quote.RetrievePermissions.
 * Use `create(RetrievePermissionsSchema)` to create a new message.
 */
export const RetrievePermissionsSchema: GenMessage<RetrievePermissions> = /*@__PURE__*/
  messageDesc(file_nillion_payments_v1_quote, 8);

/**
 * An update permissions operation.
 *
 * @generated from message nillion.payments.v1.quote.UpdatePermissions
 */
export type UpdatePermissions = Message<"nillion.payments.v1.quote.UpdatePermissions"> & {
  /**
   * The identifier of the values entity whose permissions are to be updated.
   *
   * @generated from field: bytes values_id = 1;
   */
  valuesId: Uint8Array;
};

/**
 * Describes the message nillion.payments.v1.quote.UpdatePermissions.
 * Use `create(UpdatePermissionsSchema)` to create a new message.
 */
export const UpdatePermissionsSchema: GenMessage<UpdatePermissions> = /*@__PURE__*/
  messageDesc(file_nillion_payments_v1_quote, 9);

/**
 * A store values operation.
 *
 * @generated from message nillion.payments.v1.quote.StoreValues
 */
export type StoreValues = Message<"nillion.payments.v1.quote.StoreValues"> & {
  /**
   * The number of particles being stored.
   *
   * @generated from field: uint64 particles_count = 1;
   */
  particlesCount: bigint;

  /**
   * The number of secret shared secrets being stored.
   *
   * This is the number of secrets in secret shared form being stored, not the total number of shares. e.g.
   * for a 5 node network a single secret shared secret requires value `1` here rather than `5`.
   *
   * @generated from field: uint64 secret_shared_count = 2;
   */
  secretSharedCount: bigint;

  /**
   * The number of public values being stored.
   *
   * @generated from field: uint64 public_values_count = 3;
   */
  publicValuesCount: bigint;

  /**
   * The number of days to persist these secrets for.
   *
   * @generated from field: uint32 ttl_days = 4;
   */
  ttlDays: number;

  /**
   * The size of the payload to be stored.
   *
   * @generated from field: uint64 payload_size = 5;
   */
  payloadSize: bigint;
};

/**
 * Describes the message nillion.payments.v1.quote.StoreValues.
 * Use `create(StoreValuesSchema)` to create a new message.
 */
export const StoreValuesSchema: GenMessage<StoreValues> = /*@__PURE__*/
  messageDesc(file_nillion_payments_v1_quote, 10);

/**
 * An invoke compute operation.
 *
 * @generated from message nillion.payments.v1.quote.InvokeCompute
 */
export type InvokeCompute = Message<"nillion.payments.v1.quote.InvokeCompute"> & {
  /**
   * The program to be invoked.
   *
   * @generated from field: string program_id = 1;
   */
  programId: string;

  /**
   * The size of the compute time values being sent as part of this operation.
   *
   * @generated from field: uint64 values_payload_size = 2;
   */
  valuesPayloadSize: bigint;
};

/**
 * Describes the message nillion.payments.v1.quote.InvokeCompute.
 * Use `create(InvokeComputeSchema)` to create a new message.
 */
export const InvokeComputeSchema: GenMessage<InvokeCompute> = /*@__PURE__*/
  messageDesc(file_nillion_payments_v1_quote, 11);

