// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const handler = (req: any, res: any) => {
  // Open Chrome DevTools to step through the debugger!
  // debugger;
  res.status(200).json({ name: "Hello, world!" });
};
