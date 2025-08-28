import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

export const PROMPTS = {
  calculate_investment: "calculate_investment",
};

export function configPrompts(server: McpServer) {
  server.prompt(
    PROMPTS.calculate_investment,
    "Calculate investment income",
    {
      countDays: z.string().describe("Count of days"),
      nar: z.string().describe("Nominal Annual Rate percentaje"),
      money: z.string().describe("Investment amount"),
    },
    ({ countDays, nar, money }) => ({
      messages: [
        {
          role: "user",
          content: {
            type: "text",
            text: String.raw`
              # Task
              Calculate the income for an ${countDays}-days long investment, with a NAR of ${nar}% and an investment amount of ${money}.
            `,
          },
        },
      ],
    })
  );
}
