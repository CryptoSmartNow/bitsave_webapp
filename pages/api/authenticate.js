// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.writeHead(302, { Location: '/dashboard' });
  res.end();
}

