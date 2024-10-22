// @generated by protoc-gen-es v2.2.0 with parameter "target=ts"
// @generated from file nillion/permissions/v1/permissions.proto (package nillion.permissions.v1.permissions, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { UserId } from "../../auth/v1/user_pb";
import { file_nillion_auth_v1_user } from "../../auth/v1/user_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file nillion/permissions/v1/permissions.proto.
 */
export const file_nillion_permissions_v1_permissions: GenFile = /*@__PURE__*/
  fileDesc("CihuaWxsaW9uL3Blcm1pc3Npb25zL3YxL3Blcm1pc3Npb25zLnByb3RvEiJuaWxsaW9uLnBlcm1pc3Npb25zLnYxLnBlcm1pc3Npb25zIo8CCgtQZXJtaXNzaW9ucxIrCgVvd25lchgBIAEoCzIcLm5pbGxpb24uYXV0aC52MS51c2VyLlVzZXJJZBIuCghyZXRyaWV2ZRgCIAMoCzIcLm5pbGxpb24uYXV0aC52MS51c2VyLlVzZXJJZBIsCgZ1cGRhdGUYAyADKAsyHC5uaWxsaW9uLmF1dGgudjEudXNlci5Vc2VySWQSLAoGZGVsZXRlGAQgAygLMhwubmlsbGlvbi5hdXRoLnYxLnVzZXIuVXNlcklkEkcKB2NvbXB1dGUYBSADKAsyNi5uaWxsaW9uLnBlcm1pc3Npb25zLnYxLnBlcm1pc3Npb25zLkNvbXB1dGVQZXJtaXNzaW9ucyJVChJDb21wdXRlUGVybWlzc2lvbnMSKgoEdXNlchgBIAEoCzIcLm5pbGxpb24uYXV0aC52MS51c2VyLlVzZXJJZBITCgtwcm9ncmFtX2lkcxgCIAMoCULmAQomY29tLm5pbGxpb24ucGVybWlzc2lvbnMudjEucGVybWlzc2lvbnNCEFBlcm1pc3Npb25zUHJvdG9QAaICBE5QVlCqAiJOaWxsaW9uLlBlcm1pc3Npb25zLlYxLlBlcm1pc3Npb25zygIiTmlsbGlvblxQZXJtaXNzaW9uc1xWMVxQZXJtaXNzaW9uc+ICLk5pbGxpb25cUGVybWlzc2lvbnNcVjFcUGVybWlzc2lvbnNcR1BCTWV0YWRhdGHqAiVOaWxsaW9uOjpQZXJtaXNzaW9uczo6VjE6OlBlcm1pc3Npb25zYgZwcm90bzM", [file_nillion_auth_v1_user]);

/**
 * The permissions for a set of stored values.
 *
 * @generated from message nillion.permissions.v1.permissions.Permissions
 */
export type Permissions = Message<"nillion.permissions.v1.permissions.Permissions"> & {
  /**
   * The user id for the owner of these values.
   *
   * @generated from field: nillion.auth.v1.user.UserId owner = 1;
   */
  owner?: UserId;

  /**
   * The list of user ids that are allowed to retrieve the stored values.
   *
   * @generated from field: repeated nillion.auth.v1.user.UserId retrieve = 2;
   */
  retrieve: UserId[];

  /**
   * The list of user ids that are allowed to update the stored values.
   *
   * @generated from field: repeated nillion.auth.v1.user.UserId update = 3;
   */
  update: UserId[];

  /**
   * The list of user ids that are allowed to delete the stored values.
   *
   * @generated from field: repeated nillion.auth.v1.user.UserId delete = 4;
   */
  delete: UserId[];

  /**
   * The list of compute permissions.
   *
   * @generated from field: repeated nillion.permissions.v1.permissions.ComputePermissions compute = 5;
   */
  compute: ComputePermissions[];
};

/**
 * Describes the message nillion.permissions.v1.permissions.Permissions.
 * Use `create(PermissionsSchema)` to create a new message.
 */
export const PermissionsSchema: GenMessage<Permissions> = /*@__PURE__*/
  messageDesc(file_nillion_permissions_v1_permissions, 0);

/**
 * The permissions to execute a program.
 *
 * @generated from message nillion.permissions.v1.permissions.ComputePermissions
 */
export type ComputePermissions = Message<"nillion.permissions.v1.permissions.ComputePermissions"> & {
  /**
   * The user id we're granting permissions to.
   *
   * @generated from field: nillion.auth.v1.user.UserId user = 1;
   */
  user?: UserId;

  /**
   * The program ids this user is allowed to use the stored values in.
   *
   * @generated from field: repeated string program_ids = 2;
   */
  programIds: string[];
};

/**
 * Describes the message nillion.permissions.v1.permissions.ComputePermissions.
 * Use `create(ComputePermissionsSchema)` to create a new message.
 */
export const ComputePermissionsSchema: GenMessage<ComputePermissions> = /*@__PURE__*/
  messageDesc(file_nillion_permissions_v1_permissions, 1);

