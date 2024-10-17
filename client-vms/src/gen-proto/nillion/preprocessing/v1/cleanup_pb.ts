// @generated by protoc-gen-es v2.2.0 with parameter "target=ts"
// @generated from file nillion/preprocessing/v1/cleanup.proto (package nillion.preprocessing.v1.cleanup, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { PreprocessingElement } from "./element_pb";
import { file_nillion_preprocessing_v1_element } from "./element_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file nillion/preprocessing/v1/cleanup.proto.
 */
export const file_nillion_preprocessing_v1_cleanup: GenFile = /*@__PURE__*/
  fileDesc("CiZuaWxsaW9uL3ByZXByb2Nlc3NpbmcvdjEvY2xlYW51cC5wcm90bxIgbmlsbGlvbi5wcmVwcm9jZXNzaW5nLnYxLmNsZWFudXAijQEKGkNsZWFudXBVc2VkRWxlbWVudHNSZXF1ZXN0EkcKB2VsZW1lbnQYASABKA4yNi5uaWxsaW9uLnByZXByb2Nlc3NpbmcudjEuZWxlbWVudC5QcmVwcm9jZXNzaW5nRWxlbWVudBITCgtzdGFydF9jaHVuaxgCIAEoBBIRCgllbmRfY2h1bmsYAyABKARC2AEKJGNvbS5uaWxsaW9uLnByZXByb2Nlc3NpbmcudjEuY2xlYW51cEIMQ2xlYW51cFByb3RvUAGiAgROUFZDqgIgTmlsbGlvbi5QcmVwcm9jZXNzaW5nLlYxLkNsZWFudXDKAiBOaWxsaW9uXFByZXByb2Nlc3NpbmdcVjFcQ2xlYW51cOICLE5pbGxpb25cUHJlcHJvY2Vzc2luZ1xWMVxDbGVhbnVwXEdQQk1ldGFkYXRh6gIjTmlsbGlvbjo6UHJlcHJvY2Vzc2luZzo6VjE6OkNsZWFudXBiBnByb3RvMw", [file_nillion_preprocessing_v1_element]);

/**
 * A request to cleanup used preprocessing elements.
 *
 * @generated from message nillion.preprocessing.v1.cleanup.CleanupUsedElementsRequest
 */
export type CleanupUsedElementsRequest = Message<"nillion.preprocessing.v1.cleanup.CleanupUsedElementsRequest"> & {
  /**
   * The element to be cleanedup.
   *
   * @generated from field: nillion.preprocessing.v1.element.PreprocessingElement element = 1;
   */
  element: PreprocessingElement;

  /**
   * The first chunk to be deleted.
   *
   * @generated from field: uint64 start_chunk = 2;
   */
  startChunk: bigint;

  /**
   * The one-past-the-end chunk index to be deleted.
   *
   * @generated from field: uint64 end_chunk = 3;
   */
  endChunk: bigint;
};

/**
 * Describes the message nillion.preprocessing.v1.cleanup.CleanupUsedElementsRequest.
 * Use `create(CleanupUsedElementsRequestSchema)` to create a new message.
 */
export const CleanupUsedElementsRequestSchema: GenMessage<CleanupUsedElementsRequest> = /*@__PURE__*/
  messageDesc(file_nillion_preprocessing_v1_cleanup, 0);

