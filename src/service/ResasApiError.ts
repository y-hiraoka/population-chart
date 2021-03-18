export class ResasApiError extends Error {
  constructor(public statusCode: number, public description: string) {
    super(`${statusCode} : ${description}`);
  }
}
