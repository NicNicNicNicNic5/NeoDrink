// export default async function page(req, res) {
//   res.status(200).json({ message: 'Hello from Next.js!' })
// }
export async function GET() {
  return Response.json({ message: 'Hello Get World' })
}
 
export async function HEAD(request) {
  return Response.json({ message: 'Hello Head World' })
}
 
export async function POST(request) {
  return Response.json({ message: 'Hello Post World' })
}
 
export async function PUT(request) {
  return Response.json({ message: 'Hello Put World' })
}
 
export async function DELETE(request) {
  return Response.json({ message: 'Hello Delete World' })
}
 
export async function PATCH(request) {
  return Response.json({ message: 'Hello Patch World' })
}
 
// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and set the appropriate Response `Allow` header depending on the other methods defined in the Route Handler.
export async function OPTIONS(request) {
  return Response.json({ message: 'Hello Option World' })
}