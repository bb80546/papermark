export const PREMIUM_TEAM_LIMIT = 1;

export async function getPremiumTeamEligibility(
  _userId: string,
): Promise<{ eligible: boolean; reason?: string }> {
  return { eligible: true };
}
