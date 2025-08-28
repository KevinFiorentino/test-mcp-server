import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

export const TOOLS = {
  calculate_add: "add_numbers",
  calculate_subtract: "subtract_numbers",
  calculate_investment: "calculate_investment",
};

export function configTools(server: McpServer) {
  server.tool(
    TOOLS.calculate_add,
    "Add numbers",
    {
      a: z.number().describe("First number to sum"),
      b: z.number().describe("Second number to sum"),
    },
    async ({ a, b }) => {
      const result = a + b;
      return { content: [{ type: "text", text: String(result) }] };
    }
  );

  server.tool(
    TOOLS.calculate_subtract,
    "Subtract numbers",
    {
      a: z.number().describe("First number to subtract"),
      b: z.number().describe("Second number to subtract"),
    },
    async ({ a, b }) => {
      const result = a - b;
      return { content: [{ type: "text", text: String(result) }] };
    }
  );

  server.tool(
    TOOLS.calculate_investment,
    "Calculate investment income",
    {
      countDays: z.number().describe("Count of days"),
      nar: z.number().describe("Nominal Annual Rate percentaje"),
      money: z.number().describe("Investment amount"),
    },
    async ({ countDays, nar, money }) => {
      const result = (countDays * (nar / 100) * money) / 365;
      return { content: [{ type: "text", text: String(result) }] };
    }
  );
}
