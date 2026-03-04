declare module "exceljs" {
	const value: any
	export default value
	export const Workbook: any
	export type Cell = any
}

declare module "puppeteer-core" {
	export const launch: any
	export const connect: any
	export type Browser = any
	export type Page = any
	export type LoggerMessage = any
	export type ScreenshotOptions = any
	export class TimeoutError extends Error {}
}

declare module "@opentelemetry/resources" {
	export const Resource: any
	export type Resource = any
}

declare module "@opentelemetry/semantic-conventions" {
	export const ATTR_SERVICE_NAME: string
	export const ATTR_SERVICE_VERSION: string
}

declare module "@sap-ai-sdk/orchestration" {
	export const OrchestrationClient: any
	export type ChatMessage = any
	export type OrchestrationModuleConfig = any
	export type CompletionPostResponse = any
}
