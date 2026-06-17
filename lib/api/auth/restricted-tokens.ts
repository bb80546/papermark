import { z } from "zod";

export const RestrictedTokenSubjectTypeSchema = z.enum(["user", "machine"]);

export function parseRestrictedTokenSubjectType(value: unknown) {
  return RestrictedTokenSubjectTypeSchema.safeParse(value);
}

export async function revokeUserBoundTeamTokens(
  _user: unknown,
  _teamId: string,
): Promise<void> {}
